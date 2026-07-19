import { defineMcp } from "@lovable.dev/mcp-js";

import getAboutTool from "./tools/get-about";
import getContactInfoTool from "./tools/get-contact-info";
import listExperiencesTool from "./tools/list-experiences";

export default defineMcp({
  name: "braso-taste-mcp",
  title: "Braso Taste",
  version: "0.1.0",
  instructions:
    "Public MCP server for Braso Taste — BBQ & Gastronomic Experience at Home. Use these tools to list the experience formats, retrieve official contact information (WhatsApp, Instagram, email) and read the brand positioning and service area. All data is public and read-only.",
  tools: [listExperiencesTool, getContactInfoTool, getAboutTool],
});
