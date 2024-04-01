import { DownloadButton } from "@/components/download-button"
import { WorkBackground, WorkContainer, WorkDescription, WorkLeft, WorkRight } from "@/components/work"
import { Card, CardFooter, Image } from "@nextui-org/react"
import { useState } from "react"

const Task3 : React.FC = () => {

    const links = [
        {
            src: "/assets/task3/Botellas.png",
            alt: "Botellas",
            title: "Botellas",
            fileUrl: "/uploads/tarea3/Botellas.ai",
            fileName: "Botellas.ai",
        },
        {
            src: "/assets/task3/Cara1.png",
            alt: "Cara 1",
            title: "Emoji 1",
            fileUrl: "/uploads/tarea3/Cara1.ai",
            fileName: "Cara1.ai",
        },
        {
            src: "/assets/task3/Cara2.png",
            alt: "Emoji 2",
            title: "Emoji 2",
            fileUrl: "/uploads/tarea3/Cara2.ai",
            fileName: "Cara2.ai",
        },
        {
            src: "/assets/task3/Paloma.png",
            alt: "Paloma",
            title: "Paloma",
            fileUrl: "/uploads/tarea3/Paloma.ai",
            fileName: "Paloma.ai",
        },
        {
            src: "/assets/task3/UNI.png",
            alt: "UNI Logo",
            title: "UNI Logo",
            fileUrl: "/uploads/tarea3/UNI.ai",
            fileName: "UNI.ai",
        },
    ]

    return (
        <div className="">
            <div className="absolute h-full w-full">
                <WorkBackground />
            </div>
            <div className="sticky top-0 h-screen">
                <WorkContainer>
                    <WorkLeft>
                    <div className='text-sm md:text-5xl text-theme font-semibold tracking-tight'>
                        Actividad &#x23;3
                    </div>
                    <WorkDescription>
                        <h2 className="h-5">Conjunto de ilustraciones</h2>
                    </WorkDescription>
                    </WorkLeft>
                    <WorkRight>
                        <div className="grid grid-rows-2 grid-flow-col gap-4">
                            {links.map((l,i) => {
                                return (
                                    <Card
                                        isFooterBlurred
                                        radius="lg"
                                        className="border-none"
                                        key={i}
                                    >
                                    <Image
                                        key={i}
                                        width={200}
                                        src={l.src}
                                        alt={l.alt}
                                        height={200}
                                        className="object-cover"
                                        isBlurred
                                    />
                                    <CardFooter className="flex flex-col justify-between before:bg-white/10 border-white-20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                        <p className="font-bold text-lg text-[#83183a]">{l.title}</p>
                                        <DownloadButton fileUrl={l.fileUrl} fileName={l.fileName} />
                                    </CardFooter>
                                </Card>
                                )
                            })}
                        </div>
                    </WorkRight>
                </WorkContainer>
            </div>
        </div>
    )
}

export default Task3