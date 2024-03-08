import SocialMedia from "./components/SocialMedia";

export default function Home() {
  return (
    <>
      <main>
        <section className="my-0 flex flex-col lg:flex-row lg:h-[600px]">
          <div className="p-10 lg:w-[80%] lg:h-[500px] lg:self-center">
            <h1 className="text-sky-600 dark:text-sky-300 text-2xl font-bold tracking-widest leading-10">
              Hola soy{" "}
            </h1>
            <p className="text-3xl py-2 font-bold text-slate-600 dark:text-slate-300">
              José Angel Garces Higuera
            </p>
            <p className="text-3xl font-bold text-slate-500 dark:text-slate-300">
              Me gusta mucho el Diseño Web
            </p>
            <p className="mt-5 text-lg">
              Ingeniero en Sistemas, especializado en el desarrollo de
              aplicaciones web. Actualmente estoy en busca de nuevas
              oportunidades laborales.
            </p>
            <SocialMedia />
            <div>
              <button className="border-2 rounded border-sky-500 p-4 w-[250px] text-lg tracking-widest hover:bg-sky-500 hover:dark:text-slate-900 ease-out duration-300">
                Contrátame
              </button>
            </div>
          </div>
          <div className="my-10 w-full ">
            <div className="w-[300px] h-[320px] m-auto bg-[url('../../public/img/profile.png')] lg:bg-[url('../../public/img/profile.png')] bg-cover rounded-lg lg:w-[100%] lg:h-[100%] lg:bg-center lg:bg-no-repeat lg:bg-[length:450px_576px]"></div>
          </div>
          {/* Experiencia Laboral */}
        </section>
        <h2 className="text-3xl text-slate-700 dark:text-white font bold tracking-widest w[85%] m-auto text-center pt-8 ">
          Experiencia Laboral
        </h2>
        <section className="my-12 flex flex-col w-[84%] m-auto lg:flex-row lg-[87%] lg:my-28">
          <div className="flex justify-between lg:flex-col lg:w-[20%]">
            <button
              type="button"
              className="border-b-2 hover:dark:bg-slate-800 w-full px-4 py-1 hover:bg-slate-300 focus:bg-white focus:border-sky-500 focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left border-sky-500 bg-white dark:bg-slate-700"
            >
              VIT
            </button>
            <button className="border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500 focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left">
              Zoologico
            </button>
            <button className="border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500 focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left">
              Trabajo inventado
            </button>
          </div>
          <article>
            <h3>
              Desarrollador <span>Venezolana de Industria Tecnológica</span>{" "}
            </h3>
            <h4>Agosto 2023 - Presente</h4>
            <ul>
              <li>
                <span></span>
                <p>
                  He trabajado con HTML, CSS y PostgreSQL. Además con lenguajes
                  de programación como lo son Javascript, PHP, C++ y Python
                </p>
              </li>

              <li>
                <span></span>
                <p>
                  Experiencia en frameworks como Laravel, FastApi y Next.
                  También en el uso librerias como React, Bootstrap y Tailwind{" "}
                </p>
              </li>
            </ul>
          </article>
        </section>
      </main>
    </>
  );
}
