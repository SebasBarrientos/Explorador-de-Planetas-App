"use client"
import { useEffect, useState } from 'react'
import { Spinner } from "@heroui/react";
import { CsvToJson } from '@/app/hooks/parseCVS';
import { uploadPlanets, UploadError } from '../../services/planetServices';
import { useDisclosure } from "@heroui/modal";
import { useRouter } from 'next/navigation';
import ErrorModal from '../../components/ErrorUploadModal';

const Page = () => {
    const router = useRouter()
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState<boolean>(false);
    const { parsedData, parseFile } = CsvToJson();
    const [uploadErrors, setUploadErrors] = useState<UploadError[]>([]);
    useEffect(() => {
        if (parsedData) {
            const upload = async () => {
                setUploading(true);
                try {
                    const failedUploads = await uploadPlanets(parsedData);
                    if (failedUploads.length === 0) {
                        router.push('/planets');
                    } else {
                        setUploadErrors(failedUploads);
                        onOpen()
                        setUploading(false);
                    }
                } catch (error) {
                    console.error("Error en la carga de planetas:", error);
                }
            
            }
            upload()
        }
        ;
    }, [parsedData]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files ? e.target.files[0] : null);
    };
    const handleUpload = () => {
        if (file) {
            parseFile(file)
        } else {
            console.error("You must upload a file.");
        }

    }
    return (
        <div className="flex flex-col items-center ">
            <main className="flex flex-col gap-4 items-center ">
               
                <div className='mt-8'>
                    {uploading ? (<div className="flex gap-4 items-center">

                        <Spinner size="lg" color="default" label="Uploading planets..." labelColor="foreground" />
                    </div>
                    ) : (
                        <div className='flex flex-col gap-4 items-center'>

                            {/* <div className='flex  gap-4 items-center'> */}
                                <input className="flex w-full rounded-md border border-gray-300 border-input bg-content1 pr-1 text-gray-400 file:border-0 file:bg-gray-600 file:blue file:font-medium"
                                    type="file"
                                    id="picture"
                                    accept='.csv'
                                    onChange={onChange}
                                />
                                <button onClick={handleUpload} className='mt-2 w-fit bg-content1 border border-gray-600 hover:bg-gray-800 text-aliceblue font-semibold py-2 px-6 rounded-large transition'>Upload .csv</button>

                            {/* </div> */}
                      
                        </div>)}
                </div>

            </main>
            <ErrorModal isOpen={isOpen} onOpenChange={onOpenChange} errors={uploadErrors} onClose={() => setUploadErrors([])}            />
        </div>
    )

}
export default Page