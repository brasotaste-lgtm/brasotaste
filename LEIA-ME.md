# Braso Taste — correções consolidadas

VERSÃO 12 — 09/08/2026. Esta versão substitui integralmente todos os ZIPs anteriores.

Este pacote contém os arquivos pendentes de posição, layout, conteúdo e imagens.

## Como enviar ao GitHub

Abra o repositório `brasotaste-lgtm/brasotaste` e envie o conteúdo deste pacote mantendo exatamente as mesmas pastas. Quando o GitHub perguntar, confirme a substituição dos arquivos existentes.

Arquivos que precisam substituir os atuais:

- `src/components/site/Header.tsx`
- `src/components/site/sections.tsx`
- `src/data/experiences.ts`
- `src/routes/sobre.tsx`
- `src/routes/chef.tsx`
- `src/routes/nossa-historia.tsx`
- `src/routes/experiencias.$slug.tsx`
- `src/routes/contato.tsx`
- `src/styles.css`
- `src/assets/about-gathering.jpg`
- `src/assets/exp-anatomy.jpg`
- `src/assets/exp-celebration.jpg`
- `src/assets/exp-brunch.jpg`
- `src/assets/story/`
- `src/assets/videos/`

Importante: a foto atual do Chef não deve ser apagada nem substituída. O pacote não contém `src/assets/chef-portrait.jpg`, portanto o arquivo que já está no GitHub será preservado.

## Alterações incluídas

- Logo da Home centralizado horizontalmente entre `Depoimentos` e o botão de orçamento; tamanho e altura preservados.
- Menu desktop compactado, mantendo `Nossa História` inteira em uma linha e removendo apenas `Chef`.
- Página `Sobre` com conteúdo ampliado e foto real do casal alinhada ao alto da seção.
- Quatro tópicos posicionados abaixo da foto e indicadores de atendimento centralizados em toda a largura, após o conteúdo.
- Conteúdo do Chef incorporado ao final da página `Sobre`, com visual mais leve.
- Foto atual do Chef preservada.
- `Nossa História` com a foto do casal sorrindo e três registros reais do casamento junino.
- Card `Da Anatomia à Brasa` com a foto tratada de Fábio segurando a peça de carne.
- Card `Brunch Braso Taste` com a tábua real enviada pela Braso.
- Card e banner `Braso Celebration` com a mesa real enviada, adaptada ao enquadramento horizontal.
- Experiências exibidas em carrossel moderno com cartão central em destaque, laterais visíveis, indicadores, setas, arraste no computador e gesto de deslizar no celular.
- Título de Experiências em uma linha no computador, texto logo abaixo e abertura mais compacta.
- Imagens e conteúdo inicial dos cards mais baixos para deixar os nomes visíveis mais cedo no computador.
- Todo o card de experiência é clicável e conduz à respectiva página; não apenas o texto `Saiba mais`.
- Páginas individuais das experiências compactadas: banner com 350 px, título menor no computador e espaços verticais reduzidos entre conteúdo, destaques e demais seções.
- Rota antiga `/chef` redirecionada para a seção do Chef dentro de `/sobre`.
- Fontes de textos, formulários e cards aumentadas.
- Espaçamentos verticais reduzidos no desktop.
- Fundo geral claro preservado; apenas o formulário de contato recebe o fundo na cor do footer.
- Fotos convertidas para JPEG compatível e otimizadas para web.
- Todas as fotos removidas da Galeria; ela exibe somente vídeos reais na seção `Braso em movimento`.
- Depoimentos reorganizados com título centralizado, avaliação antes do texto e cards com detalhe lateral dourado.
- Contato reorganizado em duas colunas no computador, com canais à esquerda e formulário à direita, preservando fontes e a cor do formulário. No celular, o formulário aparece primeiro e os canais de contato depois.
- Vídeos sem áudio, otimizados em MP4/H.264 e acompanhados por capas estáticas.
- Cinco novos vídeos reais adicionados: mini burgers, mesa Braso, carne na brasa, fogo e finalização e anatomia dos cortes.
- Vídeos novos estabilizados, com redução de ruído, correção moderada de cor, 30 fps e resolução padronizada para web.
- Todos os vídeos padronizados em 9:16 e exibidos em carrossel social com cartão central em destaque, laterais visíveis, indicadores, setas, arraste e gesto no celular.
- Orientação registrada pelo celular aplicada antes da conversão, preservando o enquadramento vertical real.
- Vídeos `Mesa Braso`, `Fogo e finalização` e `Anatomia dos cortes` corrigidos sem achatamento e sem fundo desfocado.
- Barras de rolagem do carrossel de vídeos ocultadas.
- As três cópias idênticas do vídeo de mini burgers foram consolidadas em apenas um arquivo.
- Ordem comercial dos cards alterada para Celebration, Selection, Personal Taste, Anatomia à Brasa, House Burger e Brunch.
- Página `/contato` reforçada com conteúdo indexável sobre Grande Rio, Região Serrana, Região dos Lagos e principais cidades atendidas.

## Fotos efetivamente utilizadas

- `src/assets/about-gathering.jpg`
- `src/assets/exp-anatomy.jpg`
- `src/assets/exp-brunch.jpg`
- `src/assets/story/casal-sorrindo.jpg`
- `src/assets/story/casamento-01.jpg`
- `src/assets/story/casamento-02.jpg`
- `src/assets/story/casamento-03.jpg`

## Vídeos incluídos

Os vídeos já estão conectados ao arquivo `sections.tsx`. Envie a pasta completa:

- `src/assets/videos/`

Arquivos:

- `fogo-brasa.mp4`
- `corte-finalizacao.mp4`
- `mesa-full-service.mp4`
- `mini-burgers.mp4`
- `mesa-brunch.mp4`
- `carne-na-brasa.mp4`
- `fogo-finalizacao.mp4`
- `anatomia-cortes.mp4`
- respectivas capas `*-poster.jpg`

Depois do commit, acompanhe a nova build no Cloudflare. Não é necessário alterar configurações do domínio.

## SEO técnico incluído na versão 12

- Títulos e descrições em português, sem duplicidades.
- URLs canônicas em `https://brasotaste.com.br`.
- Metadados Open Graph e Twitter com imagem oficial de compartilhamento.
- `robots.txt` e `sitemap.xml` prontos para o Google Search Console.
- Dados estruturados de organização, site, serviços e breadcrumbs.
- Página `/experiencias` com conteúdo indexável.
- Eventos `generate_lead` e `whatsapp_click` preparados para Google Tag Manager.
- Vídeos carregados apenas quando entram na área visível, reduzindo o peso inicial da página.
- Conteúdo regional concentrado na página própria `/contato`, evitando páginas artificiais repetidas por cidade.

## Sincronização do Instagram

Não grave tokens ou chaves privadas no GitHub. Para concluir a sincronização, primeiro identifique se o código recebido é um `Widget ID` público do EmbedSocial ou um token privado da Meta/Instagram Graph API. Tokens privados devem ser cadastrados como segredo/variável de ambiente no Cloudflare. O snippet público de um widget pode ser incorporado ao componente da Galeria depois dessa confirmação.

Depois da publicação, ainda será necessário cadastrar o domínio no Google Search Console e informar os identificadores do GA4, Google Tag Manager e Google Ads.
