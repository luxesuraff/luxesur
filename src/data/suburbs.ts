export type Suburb = {
  slug: string;          // unique slug used in URL
  name: string;          // display name
  state: string;         // full state name
  stateAbbr: string;     // 2-letter abbreviation
  metroSlug: string;     // parent metro slug (must match cities.ts)
  population?: number;   // optional (useful later for filtering)
};

export const SUBURBS: Suburb[] = [
  {
    slug: "coral-gables-fl",
    name: "Coral Gables",
    state: "Florida",
    stateAbbr: "FL",
    metroSlug: "miami-fl",
    population: 49700,
  },
  {
    slug: "pasadena-tx",
    name: "Pasadena",
    state: "Texas",
    stateAbbr: "TX",
    metroSlug: "houston-tx",
    population: 151000,
  },
  {
    slug: "sugar-land-tx",
    name: "Sugar Land",
    state: "Texas",
    stateAbbr: "TX",
    metroSlug: "houston-tx",
    population: 118000,
  },
]; // ✅ CLOSE ARRAY HERE

// Helper functions go AFTER the array

export function getAllSuburbs(): Suburb[] {
  return SUBURBS;
}

export function getSuburbBySlug(slug: string): Suburb | undefined {
  return SUBURBS.find((s) => s.slug === slug);
}

export function getSuburbsByMetro(metroSlug: string): Suburb[] {
  return SUBURBS.filter((s) => s.metroSlug === metroSlug);
}