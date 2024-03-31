import React from "react";
import Link from "next/link";

interface WorkContent {
    children : React.ReactNode;
}

interface LinkProps {
    href: string
    children: React.ReactNode
}

interface WorkDetail {
    title?: string
    children: React.ReactNode
    color?: string
}

export const WorkContainer : React.FC<WorkContent> = ({children}) => {
    return <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky"> { children } </div>
}

export const WorkBackground : React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
            <div className="bg-[#f5778a] h-[70vh] lg:h-auto"></div>
            <div className="bg-white h-[30vh] lg:min-h-screen"></div>
        </div>
    )
}

export const WorkLeft : React.FC<WorkContent> = ( { children }) => {
    return (
        <div className="flex flex-col items-center justify-center text-1xl lg:text-3xl h-[70vh] lg:h-auto">
            <div className="leading-10 max-w-auto mx-5 py-10 lg:py-0">
                { children }
            </div>
        </div>
    )
}

export const WorkRight : React.FC<WorkContent> = ( { children }) => {
    return (
        <div className="flex flex-1 lg:items-center justify-center h-screen">
            <div className="py-auto lg:py-auto px-5 md:px-16">
                { children }
            </div>
        </div>
    )
}

export const WorkLink : React.FC<LinkProps> = ({ href, children }) => {
    return <Link href={href} target="_blank" className="underline underline-offset-auto my-1 mr-5 md:mr-0"> {children} </Link>
}

export const WorkDescription : React.FC<WorkContent> = ({ children }) => {
    return (
        <div className="text-xs lg:text-xl font-light max-w-md my-2 lg:my-5 tracking-tight text-justify leading-relaxed">
            {children}
        </div>
    )
}

export const WorkDetail : React.FC<WorkDetail> = ({ title, children , color}) => {
    return (
        <div className="flex flex-col justify-between max-w-lg mb-auto lg:mb-[10px]">
            <h3 className='tracking-tight text-sm xl:text-lg underline underline-offset-8 decoration-dotted my-2' style={{
                color: color,
            }}>{title}</h3>
            
            <div className="text-xs lg:text-lg flex flex-col"> {children} </div>
        </div>
    )
}