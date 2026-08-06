import { createServerFn } from "@tanstack/react-start";

export type GoogleReview = {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  photo?: string;
  source: "google";
};

export type InstagramPost = {
  id: string;
  caption: string;
  imageUrl: string;
  permalink: string;
};

const GATEWAY = "https://connector-gateway.lovable.dev/google_maps";

async function resolvePlaceId(lovableKey: string, connKey: string): Promise<string | null> {
  const configured = process.env["GOOGLE_PLACE_ID"];
  if (configured) return configured;

  const res = await fetch(`${GATEWAY}/places/v1/places:searchText`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": connKey,
      "Content-Type": "application/json",
      "X-Goog-FieldMask": "places.id,places.displayName",
    },
    body: JSON.stringify({ textQuery: "Braso Taste", languageCode: "pt-BR" }),
  });
  if (!res.ok) {
    console.error(`Places searchText falhou [${res.status}]: ${await res.text()}`);
    return null;
  }
  const json = (await res.json()) as { places?: Array<{ id?: string }> };
  return json.places?.[0]?.id ?? null;
}

/** Avaliações reais do Google Maps (Places API New). Retorna [] em caso de falha. */
export const getGoogleReviews = createServerFn({ method: "GET" }).handler(async (): Promise<GoogleReview[]> => {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const connKey = process.env["GOOGLE_MAPS_API_KEY"];
  if (!lovableKey || !connKey) return [];

  try {
    const placeId = await resolvePlaceId(lovableKey, connKey);
    if (!placeId) return [];

    const res = await fetch(`${GATEWAY}/places/v1/places/${encodeURIComponent(placeId)}`, {

      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": connKey,
        "X-Goog-FieldMask": "reviews,rating,userRatingCount",
        "Accept-Language": "pt-BR",
      },
    });
    if (!res.ok) {
      console.error(`Google Places falhou [${res.status}]: ${await res.text()}`);
      return [];
    }
    const json = (await res.json()) as {
      reviews?: Array<{
        name?: string;
        rating?: number;
        text?: { text?: string };
        originalText?: { text?: string };
        relativePublishTimeDescription?: string;
        authorAttribution?: { displayName?: string; photoUri?: string };
      }>;
    };

    return (json.reviews ?? [])
      .map((r, i) => ({
        id: r.name ?? `google-${i}`,
        name: r.authorAttribution?.displayName ?? "Cliente Google",
        role: `Avaliação no Google${r.relativePublishTimeDescription ? ` · ${r.relativePublishTimeDescription}` : ""}`,
        text: (r.text?.text ?? r.originalText?.text ?? "").trim(),
        rating: Math.round(r.rating ?? 5),
        photo: r.authorAttribution?.photoUri,
        source: "google" as const,
      }))
      .filter((r) => r.text.length > 0);
  } catch (error) {
    console.error("Erro ao buscar avaliações do Google:", error);
    return [];
  }
});

/** Posts de imagem do Instagram (Graph API). Retorna [] em caso de falha. */
export const getInstagramPosts = createServerFn({ method: "GET" }).handler(async (): Promise<InstagramPost[]> => {
  const token = process.env["INSTAGRAM_ACCESS_TOKEN"];
  if (!token) return [];

  try {
    const url = new URL("https://graph.instagram.com/me/media");
    url.searchParams.set("fields", "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp");
    url.searchParams.set("limit", "12");
    url.searchParams.set("access_token", token);

    const res = await fetch(url.toString());
    if (!res.ok) {
      console.error(`Instagram Graph falhou [${res.status}]: ${await res.text()}`);
      return [];
    }
    const json = (await res.json()) as {
      data?: Array<{
        id: string;
        caption?: string;
        media_type?: string;
        media_url?: string;
        thumbnail_url?: string;
        permalink?: string;
      }>;
    };

    return (json.data ?? [])
      .filter((m) => m.media_type === "IMAGE" || m.media_type === "CAROUSEL_ALBUM" || m.media_type === "VIDEO")
      .map((m) => ({
        id: m.id,
        caption: (m.caption ?? "Braso Taste no Instagram").slice(0, 120),
        imageUrl: m.media_type === "VIDEO" ? (m.thumbnail_url ?? "") : (m.media_url ?? ""),
        permalink: m.permalink ?? "https://instagram.com/brasotaste",
      }))
      .filter((m) => m.imageUrl.length > 0)
      .slice(0, 8);
  } catch (error) {
    console.error("Erro ao buscar posts do Instagram:", error);
    return [];
  }
});
