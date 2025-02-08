import { prisma } from "@/lib/db"
import PlanetModal from "./PlanetModal";

export const dynamic = "force-dynamic"; 
export default async function PlanetsPage() {
    const planets = await prisma.planets.findMany()
    return < PlanetModal planets ={planets} />
        // <main> 
        //     <h1>Planets</h1>
        //     <ul>
        //         {planets.map(planet => (
        //             <li key={planet.id}>{planet.name}</li>
        //         ))}
        //     </ul>
//         // </main>
    
}