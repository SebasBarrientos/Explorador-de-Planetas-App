import { Card, CardHeader, CardBody, Divider } from "@heroui/react";

export default function PlanetCard({ name, habitability,id }: { name: string, habitability: string,id:number }) {
    return (
        <Card className={`md:w-[400px] border border-gray-600 ${habitability == "Yes" ? "hover:bg-green-900 " : "hover:bg-red-900"} p-2 m-2 items-center`}>
            <CardHeader >
                <div className="flex flex-col w-full">
                    <p className="text-md text-default-500">Planet</p>
                    <div className="flex justify-between items-baseline w-full">
                        <p className="text-xl text-aliceblue">{name}</p>
                        <p className="text-xs text-default-500 ">Id: {id}</p>
                    </div>
                </div>
            </CardHeader>
            <Divider />
            <CardBody className="flex text-aliceblue">
                <p>Fit for human habitation?</p>
                <p className="font-bold">{habitability}</p>
            </CardBody>
        </Card>
    );
}
