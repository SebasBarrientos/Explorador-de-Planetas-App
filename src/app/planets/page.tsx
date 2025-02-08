import { prisma } from "@/lib/db"

export const dynamic = "force-dynamic"; 
export default async function PlanetsPage() {
    const planets = await prisma.planets.findMany()
    
    return (
        <main> 
            <h1>Planets</h1>
            <ul>
                {planets.map(planet => (
                    <li key={planet.id}>{planet.name}</li>
                ))}
            </ul>
        </main>
    )
}