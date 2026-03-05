// src/lib/geoContent.ts
export function getPlumbingGeoBlock(region?: string) {
  switch (region) {
    case "south-florida":
      return "High humidity and hurricane flooding increase drain stress...";
    case "texas-gulf":
      return "Expansive clay soil and freeze cycles increase pipe stress...";
    case "midwest":
      return "Freeze-thaw cycles are a leading cause of burst pipes...";
    default:
      return "Local infrastructure conditions can contribute to plumbing failures...";
  }
}