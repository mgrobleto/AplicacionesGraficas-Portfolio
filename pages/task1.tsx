import { useState } from "react"
import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@nextui-org/react"
import { WorkBackground, WorkContainer, WorkDescription, WorkLeft, WorkRight } from "@/components/work"
import Image from "next/image"
import { DownloadButton } from "@/components/download-button"

const Task1 : React.FC = () => {

    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <div className="">
            <div className="absolute h-full w-full">
                <WorkBackground />
            </div>
            <div className="sticky top-0 h-screen">
                <WorkContainer>
                    <WorkLeft>
                    <div className='text-sm md:text-5xl text-theme font-semibold tracking-tight'>
                        Actividad &#x23;1
                    </div>
                    <WorkDescription>
                        <h2 className="h-5">Objetivo&#x205A; Ambientarse a las herramientas de tratamientos de imagenes basicas con una guia paso a paso</h2>
                    </WorkDescription>
                    </WorkLeft>
                    <WorkRight>
                        <Card
                            isFooterBlurred
                            radius="lg"
                            className="border-none"
                        >
                            <Image
                                width={400}
                                src="/assets/task1/tarea1.png"
                                alt="tarea1"
                                height={400}
                                className="object-cover"
                            />
                            <CardFooter className="justify-between before:bg-white/10 border-white-20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                <p className="font-bold text-lg text-white/80">Angry Birds</p>
                                <DownloadButton fileUrl="/uploads/Tarea.ai" fileName="Tarea.ai"/>
                            </CardFooter>
                        </Card>
                    
                    </WorkRight>
                </WorkContainer>
            </div>
        </div>
    )
}

export default Task1