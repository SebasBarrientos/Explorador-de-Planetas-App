import { Card, CardHeader, CardBody, Divider } from "@heroui/react";

export default function PlanetCard({ name, habitability,id }: { name: string, habitability: string,id:number }) {
    return (
        <Card className={`md:w-[400px] hover:border-b ${habitability == "Yes" ? "hover:bg-green-800" : "hover:bg-red-800"} p-2 m-2 items-center`}>
            <CardHeader >
                <div className="flex flex-col w-full">
                    <p className="text-md text-default-500">Planet</p>
                    <div className="flex flex justify-between items-baseline w-full">
                        <p className="text-xl">{name}</p>
                        <p className="text-xs text-default-500 ">Id: {id}</p>
                    </div>
                </div>
            </CardHeader>
            <Divider />
            <CardBody className="flex ">
                <p>Is it habitable? </p>
                <p className="font-bold">{habitability}</p>
            </CardBody>
        </Card>
    );
}
