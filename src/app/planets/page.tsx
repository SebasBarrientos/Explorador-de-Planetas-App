import { prisma } from "@/lib/db"


export default async function PlanetsPage() {
    const planets = await prisma.planet.findMany()
    

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