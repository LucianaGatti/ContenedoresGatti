"use client";

import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      {/* Navbar para pantallas grandes */}
      <div className="hidden lg:flex justify-between bg-zinc-900 p-2 shadow-yellow-400 shadow-md">
        <Link href="/">
          <img
            className="w-36 flex items-center ml-6"
            src="LOGO-BLANCO.png"
            alt="Descripción de la imagen"
          />
        </Link>
        <div className="flex items-center">
          <div className="mr-4 flex items-center">
            <img
              className="w-10 flex items-center mr-1"
              src="580b57fcd9996e24bc43c543.png"
              alt="Descripción de la imagen"
            />
            <button
              className="text-white text-lg font-semibold p-2 focus:outline-none"
              onClick={() =>
                window.open(
                  "https://wa.me/3515444038?text=¡Hola! Me gustaría obtener más información para alquilar un contenedor.",
                  "_blank"
                )
              }
            >
              3515444038
            </button>
          </div>
          <div className="mr-4 flex items-center">
            <img
              className="w-10 flex items-center mr-1"
              src="580b57fcd9996e24bc43c543.png"
              alt="Descripción de la imagen"
            />
            <button
              className="text-white text-lg font-semibold p-2 focus:outline-none"
              onClick={() =>
                window.open(
                  "https://wa.me/3516122605?text=¡Hola! Me gustaría obtener más información para alquilar un contenedor.",
                  "_blank"
                )
              }
            >
              3516122605
            </button>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 flex items-center mr-1"
              src="580b57fcd9996e24bc43c543.png"
              alt="Descripción de la imagen"
            />
            <button
              className="text-white text-lg font-semibold p-2 focus:outline-none"
              onClick={() =>
                window.open(
                  "https://wa.me/3512184006?text=¡Hola! Me gustaría obtener más información para alquilar un contenedor.",
                  "_blank"
                )
              }
            >
              3512184006
            </button>
          </div>
        </div>
      </div>

      {/* Navbar para pantallas pequeñas */}
      <div className="lg:hidden bg-zinc-900 p-2 shadow-yellow-400 shadow-md flex justify-between items-center">
        <Link href="/">
          <img
            className="w-36 flex items-center ml-6"
            src="LOGO-BLANCO.png"
            alt="Descripción de la imagen"
          />
        </Link>
        <div className="mr-4">
          <button
            className="text-white p-2 focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden fixed top-0 right-0 w-3/10 h-full bg-zinc-900 z-50">
          <button
            className="text-white p-2 focus:outline-none absolute top-2 right-2"
            onClick={closeMenu}
          >
            &times;
          </button>
          <ul className="text-slate-200 mx-4 font-semibold flex flex-col items-center">
            <li className="py-2">
              <p className="flex items-center text-xl mt-10 justify-center">
                Escribinos!
              </p>
              <button
                className="flex items-center text-xl mt-10"
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
            <li className="py-2">
              <button
                className="flex items-center text-xl"
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
            <li className="py-2">
              <button
                className="flex items-center text-xl"
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
      )}
    </nav>
  );
};

export default NavBar;
