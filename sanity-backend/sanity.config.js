// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas/schema";

export default defineConfig({
  title: "sanity-backend",
  projectId: "eltl721x",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
