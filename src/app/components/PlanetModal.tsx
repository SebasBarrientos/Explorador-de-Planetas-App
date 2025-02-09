"use client";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,

} from "@heroui/modal";
import { Divider } from "@heroui/react";
import { Planets } from "@prisma/client";

interface PlanetModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    selectedPlanet: Planets | null;
}

export default function PlanetModal({ isOpen, onOpenChange, selectedPlanet }: PlanetModalProps) {
    return (
        <Modal className="border border-gray-600" isOpen={isOpen} onOpenChange={onOpenChange} backdrop={"blur"} size={"xs"} placement={"center"}
            motionProps={{
                variants: {
                    enter: {
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.3,
                            ease: "easeOut",
                        },
                    },
                    exit: {
                        x: -20,
                        opacity: 0,
                        transition: {
                            duration: 0.2,
                            ease: "easeIn",
                        },
                    },
                },
            }}
        >
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="flex flex-col justify-start gap-1 -mb-1 mx-4 text-left px-2">{selectedPlanet?.name}</ModalHeader>
                        <div className="mx-4">
                            <Divider />
                        </div>
                        <ModalBody className="pb-4">
                            <ul>
                                <li>Temperature: {selectedPlanet?.temperature}</li>
                                <li>Composition: {selectedPlanet?.composition}</li>
                                <li>Gravity: {selectedPlanet?.gravity}</li>
                                <li>Habitability: {selectedPlanet?.habitability}</li>
                            </ul>
                        </ModalBody>

                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
