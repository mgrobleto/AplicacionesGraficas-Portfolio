import { DownloadButton } from "@/components/download-button"
import { WorkBackground, WorkContainer, WorkDescription, WorkLeft, WorkRight } from "@/components/work"
import { Card, CardFooter } from "@nextui-org/react"
import Image from "next/image"

const links = [
    {
        src: "/assets/task2/Basurero.png",
        alt: "Basurero",
        title: "Basurero",
        fileUrl: "/uploads/tarea2/Basurero.ai",
        fileName: "Basurero.ai",
    },
    {
        src: "/assets/task2/Caja.png",
        alt: "Caja",
        title: "Caja",
        fileUrl: "/uploads/tarea2/Caja.ai",
        fileName: "Caja.ai",
    },
    {
        src: "/assets/task2/Camion.png",
        alt: "Camion",
        title: "Camion",
        fileUrl: "/uploads/tarea2/Camion.ai",
        fileName: "Camion.ai",
    },
    {
        src: "/assets/task2/Citricos.png",
        alt: "Citricos",
        title: "Citricos",
        fileUrl: "/uploads/tarea2/Citricos.ai",
        fileName: "Citricos.ai",
    },
    {
        src: "/assets/task2/Globo.png",
        alt: "Globo",
        title: "Globo",
        fileUrl: "/uploads/tarea2/Globo.ai",
        fileName: "Globo.ai",
    },
    {
        src: "/assets/task2/Granjero.png",
        alt: "Granjero",
        title: "Granjero",
        fileUrl: "/uploads/tarea2/Granjero.ai",
        fileName: "Granjero.ai",
    },
    {
        src: "/assets/task2/Lata.png",
        alt: "Lata",
        title: "Lata",
        fileUrl: "/uploads/tarea2/Lata.ai",
        fileName: "Lata.ai",
    },
    {
        src: "/assets/task2/Mano.png",
        alt: "Mano",
        title: "Mano",
        fileUrl: "/uploads/tarea2/Mano.ai",
        fileName: "Mano.ai",
    },
    {
        src: "/assets/task2/Palmera.png",
        alt: "Palmera",
        title: "Palmera",
        fileUrl: "/uploads/tarea2/Palmera.ai",
        fileName: "Palmera.ai",
    },
    {
        src: "/assets/task2/Tortuga.png",
        alt: "Tortuga",
        title: "Tortuga",
        fileUrl: "/uploads/tarea2/Tortuga.ai",
        fileName: "Tortuga.ai",
    },
]

const Task2 : React.FC = () => {

    return (
        <div className="">
            <div className="absolute h-full w-full">
                <WorkBackground />
            </div>
            <div className="sticky top-0 h-screen">
                <WorkContainer>
                    <WorkLeft>
                    <div className='text-sm md:text-5xl text-theme font-semibold tracking-tight'>
                        Actividad &#x23;2
                    </div>
                    <WorkDescription>
                        <h2 className="h-5">Conjunto de ilustraciones</h2>
                    </WorkDescription>
                    </WorkLeft>
                    <WorkRight>
                        <div className="grid grid-rows-3 grid-flow-col gap-2">
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

export default Task2