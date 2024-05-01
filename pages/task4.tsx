import { DownloadButton } from "@/components/download-button"
import { WorkBackground, WorkContainer, WorkDescription, WorkLeft, WorkRight } from "@/components/work"
import { Card, CardFooter, Image } from "@nextui-org/react"

const Task4 : React.FC = () => {

    const links = [
        {
            src: "/assets/task4/A.jpeg",
            alt: "A",
            title: "A",
            fileUrl: "/uploads/tarea4/A.cdr",
            fileName: "A.ai",
        },
        {
            src: "/assets/task4/Android.jpeg",
            alt: "Android",
            title: "Android",
            fileUrl: "/uploads/tarea4/Android.cdr",
            fileName: "Android.cdr",
        },
        {
            src: "/assets/task4/Barco.jpeg",
            alt: "Barco",
            title: "Barco",
            fileUrl: "/uploads/tarea4/Barco.cdr",
            fileName: "Barco.cdr",
        },
        {
            src: "/assets/task4/Circulo.jpeg",
            alt: "Circulo",
            title: "Circulo",
            fileUrl: "/uploads/tarea4/Circulo.cdr",
            fileName: "Circulo.cdr",
        },
        {
            src: "/assets/task4/K.png",
            alt: "K",
            title: "K",
            fileUrl: "/uploads/tarea4/K.cdr",
            fileName: "K.cdr",
        },
        {
            src: "/assets/task4/Lorem Ipsum.jpeg",
            alt: "Lorem Ipsum",
            title: "Lorem Ipsum",
            fileUrl: "/uploads/tarea4/Lorem Ipsum.cdr",
            fileName: "Lorem Ipsum.cdr",
        },
        {
            src: "/assets/task4/Ojo.png",
            alt: "Ojo",
            title: "Ojo",
            fileUrl: "/uploads/tarea4/Ojo.cdr",
            fileName: "Ojo.cdr",
        },
        {
            src: "/assets/task4/Piña.png",
            alt: "Piñas",
            title: "Piñas",
            fileUrl: "/uploads/tarea4/Piñas.cdr",
            fileName: "Piñas.cdr",
        },
        {
            src: "/assets/task4/Tato.jpeg",
            alt: "Tato",
            title: "Tato",
            fileUrl: "/uploads/tarea4/Tato.cdr",
            fileName: "Tato.cdr",
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
                        Actividad &#x23;4
                    </div>
                    <WorkDescription>
                        <h2 className="h-5">Conjunto de ilustraciones</h2>
                    </WorkDescription>
                    </WorkLeft>
                    <WorkRight>
                        <div className="grid grid-rows-2 grid-flow-col gap-2">
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
                                        <p className="font-bold text-lg text-white">{l.title}</p>
                                        <DownloadButton fileUrl={l.fileUrl} fileName={l.fileName} textColor="text-white" />
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

export default Task4