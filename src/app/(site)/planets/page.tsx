import { prisma } from "@/lib/db";
import PlanetsList from "./PlanetsList";

export const dynamic = "force-dynamic";
export default async function PlanetsPage() {
    const planets = await prisma.planets.findMany();
    return <PlanetsList planets={planets} />;
}
