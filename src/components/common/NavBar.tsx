"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/assets/logo.png";
import { Menu } from "@headlessui/react";

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
                    py-0
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
            // onClick={() => setToggle(false)}
          >
            <li onClick={() => setToggle(false)}>
              <Link className="md:p-4 py-2 block hover:text-red-500" href="/">
                Home
              </Link>
            </li>
            <Menu as="li">
              <Menu.Button className="md:p-4 py-2 block hover:text-red-500 inline-flex w-full justify-start items-center">
                For Attendees
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-1 w-3 h-3 stroke-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Menu.Button>
              <Menu.Items className="md:absolute md:top-16 md:mt-2 w-56 md:origin-top-right divide-y divide-gray-100 md:rounded-md bg-white md:shadow-lg md:ring-1 md:ring-black/5 focus:outline-non">
                <div className="p-2" onClick={() => setToggle(false)}>
                  <Menu.Item>
                    <Link
                      className="md:p-4 py-2 block hover:text-red-500 inline-flex w-full justify-start items-center"
                      href="/program"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                      Program
                    </Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link
                      className="md:p-4 py-2 block hover:text-red-500 inline-flex w-full justify-start items-center"
                      href="/travel-information"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                      Travel Information
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      className="md:p-4 py-2 block hover:text-red-500 inline-flex w-full justify-start items-center"
                      href="/registration"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                      Registration
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>

            <li onClick={() => setToggle(false)}>
              <Link
                className="md:p-4 py-2 block hover:text-red-500"
                href="/committee"
              >
                Committee
              </Link>
            </li>

            <Menu as="li">
              <Menu.Button className="md:p-4 py-2 block hover:text-red-500 inline-flex w-full justify-start items-center">
                For Authors
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-1 w-3 h-3 stroke-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Menu.Button>
              <Menu.Items className="md:absolute md:top-16 md:mt-2 w-56 md:origin-top-right divide-y divide-gray-100 md:rounded-md bg-white md:shadow-lg md:ring-1 md:ring-black/5 focus:outline-non">
                <div className="p-2" onClick={() => setToggle(false)}>
                  <Menu.Item>
                    <Link
                      className="md:p-4 py-2 block hover:text-red-500 inline-flex w-full justify-start items-center"
                      href="/important-dates"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                      Important Dates
                    </Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link
                      className="md:p-4 py-2 block hover:text-red-500 inline-flex w-full justify-start items-center"
                      href="/author-instructions"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                      Author Instructions
                    </Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link
                      className="md:p-4 py-2 block hover:text-red-500 inline-flex w-full justify-start items-center"
                      href="/camera-ready-paper-instructions"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                      Camera Ready Paper Instructions
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
            <Menu as="li">
              <Menu.Button className="md:p-4 py-2 block hover:text-red-500 inline-flex w-full justify-start items-center">
                Explore Programs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-1 w-3 h-3 stroke-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Menu.Button>
              <Menu.Items className="md:absolute md:top-16 md:mt-2 w-56 md:origin-top-right divide-y divide-gray-100 md:rounded-md bg-white md:shadow-lg md:ring-1 md:ring-black/5 focus:outline-non">
                <div className="p-2" onClick={() => setToggle(false)}>
                  <Menu.Item>
                    <Link
                      className="md:p-4 py-2 block hover:text-red-500 inline-flex w-full justify-start items-center"
                      href="/speakers"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                      Keynotes
                    </Link>
                  </Menu.Item>

                  {/* <Menu.Item>
                      <Link
                        className="md:p-4 py-2 block hover:text-red-500 inline-flex w-full justify-start items-center"
                        href="/special-sessions"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                        Special Sessions
                      </Link>
                    </Menu.Item> */}
                  <Menu.Item>
                    <Link
                      className="md:p-4 py-2 block hover:text-red-500 inline-flex w-full justify-start items-center"
                      href="/workshops"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                      Workshops
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>

            <Menu as="li">
              <Menu.Button className="md:p-4 py-2 block hover:text-red-500 inline-flex w-full justify-start items-center">
                Past Proceedings
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-1 w-3 h-3 stroke-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Menu.Button>
              <Menu.Items className="md:absolute md:top-16 md:mt-2 w-56 md:origin-top-right divide-y divide-gray-100 md:rounded-md bg-white md:shadow-lg md:ring-1 md:ring-black/5 focus:outline-non">
                <div className="p-2" onClick={() => setToggle(false)}>
                  <Menu.Item>
                    <Link
                      target="blank"
                      className="md:p-4 py-2 block hover:text-red-500 inline-flex w-full justify-start items-center"
                      href="https://ieeexplore.ieee.org/xpl/conhome/7818135/proceeding
                                            "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                      EECon 2016
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      target="blank"
                      className="md:p-4 py-2 block hover:text-red-500 inline-flex w-full justify-start items-center"
                      href=" https://ieeexplore.ieee.org/xpl/conhome/8528200/proceeding"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                      EECon 2018
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      target="blank"
                      className="md:p-4 py-2 block hover:text-red-500 inline-flex w-full justify-start items-center"
                      href="https://ieeexplore.ieee.org/xpl/conhome/9580924/proceeding"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                      EECon 2021
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
            <li onClick={() => setToggle(false)}>
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
