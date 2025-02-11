
import { updateDB } from '@/actions/actions';
import { Planet } from '../hooks/parseCVS';

export interface UploadError {
  planet: Planet;
  reason: unknown;
}


export const uploadPlanets = async (planets: Planet[]): Promise<UploadError[]> => {
  try {
    const results = await Promise.allSettled(
      planets.map((planet: Planet) => updateDB(planet))
    );

    const failedUploads: UploadError[] = results
      .map((result, index) => {
        if (result.status === "rejected") {
          console.error(`Error actualizando el planeta ${planets[index].name}:`, result.reason);
          return { planet: planets[index], reason: result.reason };
        }
        return null;
      })
      .filter((error): error is UploadError => error !== null);
      
    return failedUploads;
  }
  catch (error) {
    console.error("Error en la carga de planetas:", error);
    return planets.map(planet => ({ planet, reason: error }));
  }
}