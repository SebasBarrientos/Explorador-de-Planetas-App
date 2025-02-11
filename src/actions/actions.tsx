"use server"

import { Planet } from "@/app/hooks/parseCVS";
import { prisma } from "@/lib/db";

export async function updateDB(data:Planet) {
    
    await prisma.planets.create({
        data: {
            name: data.name,
            temperature: data.temperature,
            gravity: data.gravity,
            composition: data.composition,
            habitability: data.habitability
        }
    })

}