import Papa from 'papaparse'
import { useState } from 'react';
export interface Planet {
    name: string;
    temperature: number;
    gravity: number;
    composition: string;
    habitability: string;
}

export const CsvToJson = () => {
    const [parsedData, setParsedData] = useState<Planet[] | null>(null);
    const [parseError, setParseError] = useState<string | null>(null);



    const parseFile = (file: File) => {
        Papa.parse<Planet>(file, {
            header: true,
            skipEmptyLines: true,
            dynamicTyping: true,
            complete: (results) => {
                setParsedData(results.data);
            }, error: (err) => {
                console.error("Error al parsear el CSV:", err);
                setParseError("Error al parsear el archivo CSV.");
            }
        });
    }
    return { parsedData, parseError, parseFile };
}