import React from "react"
import { Button } from "@nextui-org/react"
import Link from "next/link"

const Intro : React.FC = () => {

    return (
        <div className="h-full ">
            <div className="flex min-h-screen flex-col items-center justify-center p-24 backdrop-blur-lg">
            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[300px] after:w-full sm:after:w-[350px] after:translate-x-1/3 after:bg-gradient-conic after:from-[#d9254f] after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-[#d9254f] after:dark:via-[#0141ff]/40 before:lg:h-[400px]">
                <div className="p-12 drop-shadow-[0_5px_3px_rgba(0,0,0,0.5)] text-center flex flex-col items-center justify-center">
                    <h1 className="mb-6 text-4xl lg:text-5xl font-bold">Aplicaciones Gr&#xe1;ficas</h1>
                    <h2 className="font-medium text-sm lg:text-3xl">Repositorio</h2>
                    <div className="m-5">
                        <h2 className="font-tiny">Elaborado por Mar&#237;a Gabriela Robleto Guti&#233;rrez | 2020-0429U</h2>
                        <div className="m-3">
                            <Link href="https://github.com/mgrobleto/AplicacionesGraficas-Portfolio" target="_blank" className="font-bold text-md bg-[#fee5e7] p-2 rounded-xl hover:bg-[#b91741] hover:text-white">
                                Ver c&#243;digo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Intro