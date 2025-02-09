"use client";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Planets } from "@prisma/client";

interface PlanetModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    selectedPlanet: Planets | null;
}

export default function PlanetModal({ isOpen, onOpenChange, selectedPlanet }: PlanetModalProps) {
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop={"blur"} size={"xs"}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 border-b mx-4">{selectedPlanet?.name}</ModalHeader>
                        <ModalBody>
                            <ul>
                                <li>Temperature: {selectedPlanet?.temperature}</li>
                                <li>Composition: {selectedPlanet?.composition}</li>
                                <li>Gravity: {selectedPlanet?.gravity}</li>
                                <li>Habitability: {selectedPlanet?.habitability}</li>
                            </ul>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
