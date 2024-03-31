'use client';

import React from "react";
import { Navbar, NavbarContent, NavbarItem, Link, NavbarBrand } from "@nextui-org/react";
import { useRouter } from "next/router";

const links = [
    {
        label: "Inicio",
        path: "/"
    },
    {
        label: 'Tarea 1',
        path: '/task1',
    },
    {
        label: 'Tarea 2',
        path: '/task2',
    },
    {
        label: 'Tarea 3',
        path: '/task3',
    }
]

const NavbarComponent : React.FC = () => {
    const router = useRouter();
    return (
        <Navbar>
            <NavbarBrand>
                <p>Aplicaciones Gr&#xe1;ficas</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                {links.map((l,i) => {
                    return(
                        <NavbarItem>
                            <Link color="foreground" href={l.path} key={i}>
                                {l.label}
                            </Link>
                        </NavbarItem>
                    )
                })}
            </NavbarContent>
        </Navbar>
    )
}

export default NavbarComponent;