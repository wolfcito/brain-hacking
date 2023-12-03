import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { Button, Card, CardBody, Collapse, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from "@material-tailwind/react";
import { ROUTES } from "@/constants/routes";
import { useEffect, useState } from "react";

export default function EnterApp() {
    const { isConnected } = useAccount();
    const routre = useRouter();

    const handleClickEnterApp = () => routre.push(ROUTES.CODING.INDEX)


    if (!isConnected)
        return null;

    return (isConnected && <section className="flex flex-col justify-center items-center content-center">
        <Button onClick={handleClickEnterApp} className="basis-1/2 rounded-md w-1/6 my-2">Ingresar</Button>
        <Collapse open={isConnected}>
            <Card className="basis-1/2 my-4 mx-auto w-8/12">
                <CardBody>
                    <Typography className="text-center">
                        Aprender React nunca fue más fácil 🙌. Ingresa a nuestros tutoriales.
                    </Typography>
                </CardBody>
            </Card>
        </Collapse>
    </section>
    )

}