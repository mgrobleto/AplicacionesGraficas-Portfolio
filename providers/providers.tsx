'use client';

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";

export function Providers({children} : { children : React.ReactNode }) {
    const router = useRouter();
    return (
        <NextUIProvider> {children} </NextUIProvider>
    )
}