"use client";
import { Planets } from "@prisma/client";

export default function Modal({ isOpen, onClose, setSelectedPlanet }: { isOpen: boolean, onClose: () => void, setSelectedPlanet: Planets|null }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay bg-gray-900 bg-opacity-50 fixed inset-0 flex items-center justify-center">
            <div className="modal-content flex flex-col bg-gray-500 p-8 text-white">
                <h2>{setSelectedPlanet?.name}</h2>
                <p>{setSelectedPlanet?.composition}</p>
                <p>Gravity: {setSelectedPlanet?.gravity}</p>
                <p>Habitability: {setSelectedPlanet?.habitability}</p>

                <button onClick={onClose} >Cerrar</button>
            </div>
        </div>
    );
}