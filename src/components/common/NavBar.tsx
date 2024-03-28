"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/assets/logo.png";

function NavBar() {
    const [toggle, setToggle] = useState(false);
    return (
        <header>
            <nav
                className="
                    flex flex-wrap
                    items-center
                    justify-between
                    w-full
                    py-4
                    md:py-0
                    px-4
                    text-lg text-gray-700
                    bg-white
                    fixed w-full top-0 z-10
                    "
            >
                <div>
                    <Link href="/">
                        <Image src={Logo} alt="EECon 2024" height={60}></Image>
                    </Link>
                </div>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setToggle((prev) => !prev)}
                    className="h-6 w-6 cursor-pointer md:hidden block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>

                <div
                    className={`${
                        toggle ? "" : "hidden"
                    } w-full md:flex md:items-center md:w-auto`}
                >
                    <ul
                        className="pt-4 text-sm text-blue-950 md:flex md:justify-between md:pt-0"
                        onClick={() => setToggle(false)}
                    >
                        <li>
                            <Link
                                className="md:p-4 py-2 block hover:text-red-500"
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="md:p-4 py-2 block hover:text-red-500"
                                href="/committee"
                            >
                                Committee
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="md:p-4 py-2 block hover:text-red-500"
                                href="speakers"
                            >
                                Speakers
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="md:p-4 py-2 block hover:text-red-500"
                                href="/program"
                            >
                                Program
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="md:p-4 py-2 block hover:text-red-500"
                                href="/registration"
                            >
                                Registration
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="md:p-4 py-2 block hover:text-red-500"
                                href="/schedule"
                            >
                                Schedule
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="md:p-4 py-2 block hover:text-red-500"
                                href="/contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
