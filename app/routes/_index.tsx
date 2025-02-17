import type { Route } from "./+types/_index";

export function loader({}: Route.LoaderArgs) {
  return { name: "React Router" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <h1>Hello {loaderData.name}</h1>;
}
