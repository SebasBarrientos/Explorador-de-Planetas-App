"use client"
//Ejemplo de codigo no modular
import { useEffect, useState } from 'react'
import Papa from 'papaparse'
import { updateDB } from '@/actions/actions';
import { redirect } from 'next/navigation';
import { Spinner } from "@heroui/react";
interface Planet {
    name: string;
    temperature: number;
    gravity: number;
    composition: string;
    habitability: string;
}


const Page = () => {

    const [file, setFile] = useState<File | null>(null);
    const [jsonData, setJsonData] = useState<Planet[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (jsonData) {
            setLoading(true);
            uploadPlanets();
        }
    }, [jsonData]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files ? e.target.files[0] : null);
    };

    const csvToJson = () => {
        const selectedFile = file
        console.log("Archivo seleccionado:", selectedFile);
        if (selectedFile) {
            Papa.parse<Planet>(selectedFile, {
                header: true,
                skipEmptyLines: true,
                dynamicTyping: true,
                complete: (results) => {
                    console.log("Datos JSON:", results.data);
                    setJsonData(results.data);
                },
                error: (error: Error) => {
                    console.error("Error al parsear el CSV:", error);
                }
            });
        } else {
            console.error("No se ha seleccionado ningún archivo.");
        }
    }
    const uploadPlanets = async () => {
        if (jsonData) {
            try {
                const results = await Promise.allSettled(
                    jsonData.map((planet: Planet) => updateDB(planet))
                );

                results.forEach((result, index) => {
                    if (result.status === "rejected") {
                        console.error(`Error actualizando el planeta ${jsonData[index].name}:`, result.reason);
                    }
                });
            } catch (error) {
                console.error("Error en la carga de planetas:", error);
            }
            redirect(`/planets`);
        }
    }
    return (
        <div className="flex flex-col items-center  p-10">
            <main className="flex flex-col gap-4 row-start-2 items-center ">
                <h1 className="max-w-[50rem] sm:max-w-[49rem] px-3 md:px-0 sm:text-5xl md:text-7xl text-4xl font-semibold font-display md:leading-[1.1em] text-center z-10 bg-gradient-to-b from-gray-200 to-gray-500 text-transparent bg-clip-text mt-5">
                    Cosmic Voyager<span className="text-white sm:text-5xl md:text-7xl text-4xl">🪐</span>
                </h1>
                <div className='mt-8'>
                    {loading ? (<div className="flex gap-4 items-center">

                        <Spinner size="lg" color="default" label="Uploading planets..." labelColor="foreground" />
                    </div>
                    ) : (
                        <div>
                            <input className="flex w-full rounded-md border border-gray-300 border-input bg-content1  text-gray-400 file:border-0 file:bg-grey-600 file:blue file:text-sm file:font-medium"
                                type="file"
                                id="picture"
                                accept='.csv'
                                onChange={onChange}
                            />

                            <div className='flex justify-center mt-5'>
                                <button onClick={csvToJson} className='mt-2 inline-block bg-content1 border border-gray-600 hover:bg-gray-800 text-aliceblue font-bold py-3 px-6 rounded-large transition'>Upload button</button>
                            </div>
                        </div>)}
                </div>

            </main>
        </div>
    )
}

export default Page