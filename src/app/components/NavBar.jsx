"use client";
import React, { useState } from "react";
import icono from "../../../public/img/robot3.png";
import Link from "next/link";
import DarkButton from "./DarkButton";
import Image from "next/image";
function NavBar() {
  const [menuButton, setMenuButton] = useState(true);

  return (
    <nav className="flex justify-between py-10 m-auto px-10 text-lg font-medium tracking-widest md:items-center">
      <a href="#">
        <Image alt="icono" src={icono} width={28} />
      </a>
      <div
        className={`bg-white dark:bg-slate-800 p-7 h-[380px] w-[320px] md:flex flex-col items-start justify-around 
      rounded-lg text-dark dark:text-white md:flex-row md:w-full 
      md:py-0 md:h-[50px] md:bg-inherit md:dark:bg-primary  ${
        menuButton ? "" : "hidden"
      }`}
      >
        <ul className="flex h-5/6 flex-col justify-around md:flex-row md:justify-center w-full ">
          <li onClick={() => setMenuButton(!menuButton)} className="md:px-5 hover:text-sky-600">
            <Link href="#">Quien Soy</Link>
          </li>
          <li onClick={() => setMenuButton(!menuButton)} className="md:px-5 hover:text-sky-600">
            <Link href="#">Experiencia</Link>
          </li>
          <li onClick={() => setMenuButton(!menuButton)} className="md:px-5 hover:text-sky-600">
            <Link href="#">Proyectos</Link>
          </li>
          <li onClick={() => setMenuButton(!menuButton)} className="md:px-5 hover:text-sky-600">
            <Link href="#">Contáctame</Link>
          </li>
        </ul>
        <DarkButton />
        
        {/* Boton Menu Hamburguesa */}
        {/* Fin de Menu Hamburguesa */}
      </div>

      <button
        onClick={() => setMenuButton(!menuButton)}
        className="absolute top-10 right-12 md:hidden"
      >
        <span
          className={`${
            menuButton ? "br-1" : ""
          }  block bg-black dark:bg-white my-2 rounded-md h-[3px] w-[28px]`}
        ></span>
        <span
          className={`${
            menuButton ? "br-2" : ""
          } block bg-black dark:bg-white my-2 rounded-md h-[3px] w-[28px]`}
        ></span>
        <span
          className={`${
            menuButton ? "br-3" : ""
          } block bg-black dark:bg-white my-2 rounded-md h-[3px] w-[28px]`}
        ></span>
      </button>

      
    </nav>
  );
}

export default NavBar;
