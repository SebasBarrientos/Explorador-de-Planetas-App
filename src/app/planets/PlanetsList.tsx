"use client";
import { Planets } from "@prisma/client";
import { useState } from "react";
// import Modal from "@/app/components/Modal";
import { useDisclosure } from "@heroui/modal";
import PlanetModal from "../components/PlanetModal";
import PlanetCard from "../components/PlanetCard";
//En lo personal me gusta mas DRAWER o Accordion
import { motion } from "framer-motion";

export default function PlanetsList({ planets }: { planets: Planets[] }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [selectedPlanet, setSelectedPlanet] = useState<Planets | null>(null);

    const openPlanetModal = (planet: Planets) => {
        setSelectedPlanet(planet);
        onOpen()
    }

    return (
        <main className="flex flex-col items-center gap-4  p-10">
            <h1 className="max-w-[50rem] sm:max-w-[49rem] px-3 md:px-0 sm:text-5xl md:text-7xl text-4xl font-semibold font-display md:leading-[1.1em] text-center z-10 bg-gradient-to-b from-gray-200 to-gray-500 text-transparent bg-clip-text mt-5">
            Cosmic Voyager<span className="text-white sm:text-5xl md:text-7xl text-4xl">🪐</span>
            </h1>
            <h2 className="text-xl sm:text-xl text-gray-400 font-medium text-center max-w-[45rem] px-4">
                Pioneering the future of human kind.
            </h2>
            <div className="w-[80%] border-t border-gray-600 opacity-50 mb-6 mt-4"></div>
            <ul className="flex flex-wrap gap-4 justify-center">
                {planets.map((planet, index) => (
                    <motion.li
                        key={planet.id} onClick={() => openPlanetModal(planet)} initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }} >
                        <PlanetCard name={planet.name} habitability={planet.habitability} id={(planet.id)} />
                    </motion.li>
                ))}
            </ul>
            <PlanetModal isOpen={isOpen} onOpenChange={onOpenChange} selectedPlanet={selectedPlanet} />

        </main >
    );
}