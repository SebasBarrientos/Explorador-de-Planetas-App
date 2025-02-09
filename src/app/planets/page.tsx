import { prisma } from "@/lib/db"
import PlanetModal from "./PlanetsList";

export const dynamic = "force-dynamic"; 
export default async function PlanetsPage() {
    const planets = await prisma.planets.findMany()
    return < PlanetModal planets ={planets} />
    
}