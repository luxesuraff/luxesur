import cities from "../data/cities.csv";

export function getCityStaticPaths() {
  return cities
    .filter(c => c.active === true)
    .map(c => ({
      params: { city: c.slug },
      props: { city: c }
    }));
}
