// ErrorModal.tsx
import React from 'react';
import { UploadError } from '@/app/services/planetServices'
import Link from 'next/link';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,

} from "@heroui/modal";
import { Divider } from "@heroui/react";
interface ErrorModalProps {
    errors: UploadError[];
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ errors, onClose,isOpen, onOpenChange, }) => {

    return (

        <Modal className="border border-gray-600" isOpen={isOpen} backdrop={"blur"} onOpenChange={onOpenChange} size={"sm"} placement={"center"}>
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="flex flex-col justify-start gap-1 -mb-1 mx-4 text-left px-2"><h1>Errors</h1></ModalHeader>
                        <div className="mx-4">
                            <Divider />
                        </div>
                        <ModalBody >
                            <ul className="max-h-60 overflow-y-auto">
                                {errors.map(({ planet, reason }, index) => (
                                    <li key={index} className="mb-2">
                                        <strong>{planet.name}</strong>: {reason?.toString().includes("Planets_name_key") ? "The planets names must be unique" : reason?.toString() || "Error desconocido"}

                                    </li>
                                ))}
                            </ul>
                        </ModalBody>
                        <div className="mx-4">
                            <Divider />
                        </div>
                        <ModalFooter className="flex justify-between items-center gap-2">
                            <button
                                onClick={onClose}
                                className=" inline-block bg-gray-600 border border-gray-600 hover:bg-gray-700 text-aliceblue font-semibold py-1.5 px-3 rounded-large transition"
                            >
                                Choose other file
                            </button>
                            <Link href="planets" className=" inline-block bg-gray-800 border border-gray-600 hover:bg-gray-700 text-aliceblue font-semibold py-1.5 px-3 rounded-large transition">
                                Access database
                            </Link>
                        </ModalFooter>

                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default ErrorModal;
