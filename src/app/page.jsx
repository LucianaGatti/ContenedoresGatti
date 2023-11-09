"use client";

export default function Home() {
  return (
    <>
      <div className="relative">
        <h1 className="flex items-center justify-center mt-16 text-3xl">
          ALQUILER DE CONTENEDORES Y OBRADORES EN CORDOBA
        </h1>
        {/* <img
          className="w-full h-auto p-16"
          src="logo-blanco.png"
          alt="Descripción de la imagen"
        /> */}

        <img
          className="mt-6 w-auto h-auto mb-6 p-20"
          src="wallpaper.png"
          alt="Descripción de la imagen"
        />
        <div className="absolute left-0 sm:bottom-14 md:bottom-28 lg:bottom-52 flex flex-col"></div>
        <div></div>
      </div>

      <hr />
      <hr />

      <div className="flex justify-center m-10">
        <h1 className="text-xl">
          Estamos ubicados en la ciudad de Córdoba, con una trayectoria de mas
          de 15 años, garantizando un trabajo serio, confiable, seguro y
          puntual. Nuestra empresa cuenta con todos los seguros y habilitaciones
          para que tengas un servicio de calidad.
        </h1>
      </div>

      <div className="flex flex-row justify-center mt-16 mb-6 ">
        <img
          className=" flex w-96 h-auto ml-6 border-2 border-slate-200"
          src="camion.png"
          alt="Descripción de la imagen"
        />
        <img
          className=" flex w-96 h-auto ml-6 border-2 border-slate-200"
          src="contenedores.png"
          alt="Descripción de la imagen"
        />
        <img
          className=" flex w-96 h-auto ml-6 border-2 border-slate-200"
          src="camion2.png"
          alt="Descripción de la imagen"
        />
      </div>

      <h1 className=" text-5xl mb-10 text-center">
        Pedinos tu contenedor y te lo llevamos dentro de las 24hs
      </h1>
      <div className="flex justify-center flex-row mb-6">
        <button
          className="flex justify-center items-center mt-6"
          onClick={() =>
            window.open(
              "https://wa.me/3515444038?text=¡Hola! Me gustaría obtener más información para alquilar un contenedor.",
              "_blank"
            )
          }
        >
          <h1 className="flex font-semibold top-2 items-center text-4xl">
            <img
              className="w-32 sm:w-20 items-center mr-4"
              src="580b57fcd9996e24bc43c543.png"
              alt="Descripción de la imagen"
            />
            3515444038
          </h1>
        </button>
        <button
          className="flex justify-center items-center mt-6 ml-10"
          onClick={() =>
            window.open(
              "https://wa.me/3512184006?text=¡Hola! Me gustaría obtener más información para alquilar un contenedor.",
              "_blank"
            )
          }
        >
          <h1 className="flex font-semibold top-2 items-center text-4xl">
            <img
              className="w-32 sm:w-20 items-center mr-4"
              src="580b57fcd9996e24bc43c543.png"
              alt="Descripción de la imagen"
            />
            3512184006
          </h1>
        </button>
      </div>
      <hr />
      <hr />
      <h1 className="text-3xl mb-6 flex justify-center mt-6">
        Empresas que confían en nosotros
      </h1>

      <div className="flex justify-center m-10 space-x-4 ">
        <img
          className=" flex flex-row w-20 h-auto"
          src="irsa.png"
          alt="Descripción de la imagen"
        />
        <img
          className=" flex flex-row w-20 h-auto"
          src="iacc.png"
          alt="Descripción de la imagen"
        />
        <img
          className=" flex flex-row w-44 h-auto"
          src="grupo-viatturi.png"
          alt="Descripción de la imagen"
        />
        <img
          className=" flex flex-row w-20 h-auto"
          src="lasso.png"
          alt="Descripción de la imagen"
        />
        <img className=" flex flex-row w-20 h-auto" src="sza.jpg" alt="" />
      </div>
    </>
  );
}
