"use client";

import MapContainer from "../components/map"
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="flex items-center justify-center text-center mt-16 text-4xl text-zinc-900 font-bold">
          ALQUILER DE CONTENEDORES Y OBRADORES EN CÓRDOBA
        </h1>

        <img
          className="my-6 w-11/12 border-8 border-zinc-900"
          src="wallpaper2.png"
          alt="Descripción de la imagen"
        />
        <div className="absolute left-0 sm:bottom-14 md:bottom-28 lg:bottom-52 flex flex-col"></div>

      </div>

      <hr />
      <hr />

      <div className="flex justify-center m-10">
        <h1 className="text-xl bg-slate-400 p-6 font-semibold">
          Estamos ubicados en la ciudad de Córdoba, con una trayectoria de mas
          de 15 años, garantizando un trabajo serio, confiable, seguro y
          puntual. Nuestra empresa cuenta con todos los seguros y habilitaciones
          para que tengas un servicio de calidad.
        </h1>
      </div>

<div className="flex flex-col items-center justify-center mt-16 mb-6 sm:flex-row">
  <img
    className="flex w-3/4 h-auto mb-6 sm:mb-0 sm:mr-6 border-2 border-slate-200 max-w-full object-cover sm:w-1/5"
    src="camion.png"
    alt="Descripción de la imagen"
  />
  <img
    className="flex w-3/4 h-auto mb-6 sm:mb-0 sm:mr-6 border-2 border-slate-200 max-w-full object-cover sm:w-1/5"
    src="contenedores.png"
    alt="Descripción de la imagen"
  />
  <img
    className="flex w-3/4 h-auto mb-6 sm:mb-0 sm:mr-6 border-2 border-slate-200 max-w-full object-cover sm:w-1/5"
    src="camion2.png"
    alt="Descripción de la imagen"
  />
  <img
    className="flex w-3/4 h-auto mb-6 sm:mb-0 border-2 border-slate-200 max-w-full object-cover sm:w-1/5"
    src="obrador.jpg"
    alt="Descripción de la imagen"
  />
</div>

<div className="flex justify-center m-10">
  <ul className=" text-slate-200 font-semibold text-lg p-6 sm:p-10 sm:text-xl list-disc w-full sm:w-auto">
    <li>Contenedores habilitados por la municipalidad de Córdoba</li>
    <br />
    <li>Contamos con seguro para prevenirte de cualquier accidente</li>
    <br />
    <li>Mejoramos cualquier presupuesto</li>
    <br />
    <li>Planes por 3 días, semanales, quincenales y mensuales</li>
    <br />
    <li>Obradores reforzados para guardar tus materiales</li>
  </ul>
</div>

<div className="flex flex-col sm:flex-row justify-center m-10 items-center">
  <img
    className="flex w-3/4 sm:w-1/4 h-auto border-2 border-slate-200 max-w-full mb-4 sm:mb-0"
    src="contenedor5mts.png"
    alt="Descripción de la imagen"
  />
  <img
    className="flex w-3/4 sm:w-1/4 h-auto ml-0 sm:ml-6 border-2 border-slate-200 max-w-full"
    src="obrador12mts.png"
    alt="Descripción de la imagen"
  />
</div>

      <div className="flex flex-col justify-center">
        <h1 className=" text-3xl mb-10 text-center">
          Pedinos tu contenedor y te lo llevamos antes de las 24hs!
        </h1>
        <div className="flex flex-col items-center justify-between mb-6 md:flex-row sm:items-center">
  <button
    className="w-full md:w-1/3 flex-shrink-0 mb-4 md:mb-0 md:mr-4 text-center"
    onClick={() =>
      window.open(
        "https://wa.me/3515444038?text=¡Hola! Me gustaría obtener más información para alquilar un contenedor.",
        "_blank"
      )
    }
  >
    <p className="flex font-semibold items-center text-3xl justify-center">
      <img
        className="w-1/12 mr-2"
        src="580b57fcd9996e24bc43c543.png"
        alt="Descripción de la imagen"
      />
      3515444038
    </p>
  </button>
  <button
    className="w-full md:w-1/3 flex-shrink-0 mb-4 md:mb-0 md:mr-4 text-center"
    onClick={() =>
      window.open(
        "https://wa.me/3516122605?text=¡Hola! Me gustaría obtener más información para alquilar un contenedor.",
        "_blank"
      )
    }
  >
    <p className="flex font-semibold items-center text-3xl justify-center">
      <img
        className="w-1/12 mr-2"
        src="580b57fcd9996e24bc43c543.png"
        alt="Descripción de la imagen"
      />
      3516122605
    </p>
  </button>
  <button
    className="w-full md:w-1/3 flex-shrink-0 mb-4 md:mb-0 text-center"
    onClick={() =>
      window.open(
        "https://wa.me/3512184006?text=¡Hola! Me gustaría obtener más información para alquilar un contenedor.",
        "_blank"
      )
    }
  >
    <p className="flex font-semibold items-center text-3xl justify-center">
      <img
        className="w-1/12 mr-2"
        src="580b57fcd9996e24bc43c543.png"
        alt="Descripción de la imagen"
      />
      3512184006
    </p>
  </button>
</div>






      </div>
      <hr />
      <hr />

      <h1 className="text-3xl mb-6 flex justify-center mt-6">
        Empresas que confían en nosotros
      </h1>

      <div className="flex flex-wrap justify-center m-10 space-x-4 ">
  <div className="mb-4 sm:mb-0">
    <img
      className="flex flex-row w-20 h-auto sm:w-20 sm:h-auto"
      src="Irsa.png"
      alt="Descripción de la imagen"
    />
  </div>
  <div className="mb-4 sm:mb-0">
    <img
      className="flex flex-row w-20 h-auto sm:w-20 sm:h-auto"
      src="iacc.png"
      alt="Descripción de la imagen"
    />
  </div>

  <div className="mb-4 sm:mb-0">
    <img
      className="flex flex-row w-20 h-auto sm:w-20 sm:h-auto"
      src="lasso.png"
      alt="Descripción de la imagen"
    />
  </div>
  <div className="mb-4 sm:mb-0">
    <img
      className="flex flex-row w-20 h-auto sm:w-20 sm:h-auto"
      src="wala.png"
      alt="Descripción de la imagen"
    />
  </div>
  <div className="mb-4 sm:mb-0">
    <img
      className="flex flex-row w-20 h-auto sm:w-20 sm:h-auto"
      src="sza.jpg"
      alt=""
    />
  </div>
  <div className="mb-4 sm:mb-0">
    <img
      className="flex flex-row w-44 h-auto sm:w-40 sm:h-auto"
      src="GRUPO-VIATTURI.png"
      alt="Descripción de la imagen"
    />
  </div>
</div>

<div className="bg-zinc-900 p-10">
  <h1 className="text-center text-3xl mb-6">
    Recibimos los principales medios de pago
  </h1>
  <div className="flex justify-center p-3">
    <img
      className="flex w-3/4 mx-10 h-auto pt-3"
      src="tarjetas.jpg"
      alt="Descripción de la imagen"
    />
  </div>

  <h1 className="text-center text-3xl my-6">Visítanos en</h1>
  <div className="flex flex-col items-center m-10 justify-center text-center">
    <p className="mb-6 text-lg">
      Av. Alfonsina Storni 255, esquina Pablo Groussac
    </p>
    <MapContainer />
    <div className="flex items-start justify-start">
      <Link href="/">
        <div className="flex justify-center mt-4">
          <img
            className="w-1/2 sm:w-1/2 md:w-1/3 h-auto pt-3"
            src="LOGO-BLANCO.png"
            alt="Descripción de la imagen"
          />
        </div>
      </Link>
    </div>
  </div>
</div>
    </>
  );
}
