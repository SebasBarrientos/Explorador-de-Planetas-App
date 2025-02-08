"use client";
import { Planets } from "@prisma/client";
import { useState } from "react";
import Modal from "@/app/components/Modal";



export default function PlanetModal({ planets }: { planets: Planets[] }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPlanet, setSelectedPlanet] = useState<Planets | null>(null);

    const openPlanetModal = (planet: Planets) => {
        setSelectedPlanet(planet);
        setModalOpen(true);
    }


    return (
        <main>
            <h1>Planets</h1>
            <ul>
                {planets.map(planet => (
                    <li key={planet.id} onClick={() => openPlanetModal(planet)} >{planet.name}</li>

                ))}
            </ul>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} setSelectedPlanet={selectedPlanet}>   
            </Modal>

        </main >
    );
}