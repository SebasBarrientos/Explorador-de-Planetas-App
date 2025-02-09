import { Card, CardHeader, CardBody, Divider } from "@heroui/react";

export default function PlanetCard({ name, habitability }: { name: string, habitability: string }) {
    return (
        <Card className={`md:w-[400px] hover:border-b ${habitability=="Yes" ?"hover:bg-green-800" :"hover:bg-red-800"} p-2 m-2 items-center` }>
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-md text-default-500">Planet</p>
                    <p className="text-xl">{name}</p>
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
