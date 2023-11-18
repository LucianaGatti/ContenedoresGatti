"use client";

import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-between bg-zinc-900 p-2 shadow-yellow-400 shadow-md">
        <Link href="/">
          <img
            className=" w-36 flex items-center ml-6"
            src="logo-blanco.png"
            alt="Descripción de la imagen"
          />
        </Link>
        <ul className="flex text-slate-200 mx-4 font-semibold shadow-md">
          <li className="px-4 flex justify-center items-center">
            <button
              className="flex justify-center items-center text-xl"
              onClick={() =>
                window.open(
                  "https://wa.me/3515444038?text=¡Hola! Me gustaría obtener más información para alquilar un contenedor.",
                  "_blank"
                )
              }
            >
              <img
                className="w-10 flex items-center mr-3"
                src="580b57fcd9996e24bc43c543.png"
                alt="Descripción de la imagen"
              />{" "}
              3515444038
            </button>
          </li>
          <li className="px-4 flex justify-center items-center">
            <button
              className="flex justify-center items-center text-xl"
              onClick={() =>
                window.open(
                  "https://wa.me/3516122605?text=¡Hola! Me gustaría obtener más información para alquilar un contenedor.",
                  "_blank"
                )
              }
            >
              <img
                className="w-10 flex items-center mr-3"
                src="580b57fcd9996e24bc43c543.png"
                alt="Descripción de la imagen"
              />{" "}
              3516122605
            </button>
          </li>
          <li className="px-4 flex justify-center items-center">
            <button
              className="flex justify-center items-center text-xl"
              onClick={() =>
                window.open(
                  "https://wa.me/3512184006?text=¡Hola! Me gustaría obtener más información para alquilar un contenedor.",
                  "_blank"
                )
              }
            >
              <img
                className="w-10 flex items-center mr-3"
                src="580b57fcd9996e24bc43c543.png"
                alt="Descripción de la imagen"
              />{" "}
              3512184006
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
