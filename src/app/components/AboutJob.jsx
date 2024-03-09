"use client";
import { useState } from "react";

function AboutJob() {
  const [showVit, setShowVit] = useState(true);
  const [showJob1, setShowJob1] = useState(false);
  const [showJob2, setShowJob2] = useState(false);

  const trabajoVit = () => {
    setShowVit(!showVit);
    setShowJob1(false);
    setShowJob2(false);
  };
  const trabajo1 = () => {
    setShowVit(false);
    setShowJob1(!showJob1);
    setShowJob2(false);
  };

  const trabajo2 = () => {
    setShowVit(false);
    setShowJob1(false);
    setShowJob2(!showJob2);
  };

  return (
    <section className="my-12 flex flex-col w-[84%] m-auto lg:flex-row lg-[87%] lg:my-28">
      <div className="flex justify-between lg:flex-col lg:w-[20%]">
        <button
          onClick={trabajoVit}
          type="button"
          className={`border-b-2 hover:dark:bg-slate-800 w-full px-4 py-1 hover:bg-slate-300 ${ showVit ? "focus:bg-white focus:border-sky-500 focus:dark:bg-slate-700" : ""} lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left border-sky-500 bg-white dark:bg-slate-700`}
        >
          Venezolana de Industria Tecnológica
        </button>
        <button
          onClick={trabajo1}
          className="border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500 focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left"
        >
          Zoologico
        </button>
        <button
          onClick={trabajo2}
          className="border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500 focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left"
        >
          Trabajo por tener
        </button>
      </div>

      <div className="my-5 lg:px-10 lg:my-0 lg:max-w-[800px]">
        <article className={`${showVit ? "" : "hidden"}`} id="job1">
          <h3>
            Programador &nbsp;
            <span className="text-sky-500 font-bold text-lg">OTI</span>
          </h3>
          <h4 className="text-sm pb-5">Agosto 2023 - Presente</h4>
          <ul>
            <li className="flex items-center py-2">
              <span className="pr-2 text-sky-500 font-black">&#9655;</span>
              <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                Trabajé con HTML, CSS y PostgreSQL. Además con lenguajes de
                programación como lo son Javascript, PHP, C++ y Python
              </p>
            </li>
            <li className="flex items-center py-2">
              <span className="pr-2 text-sky-500 font-black">&#9655;</span>
              <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                Estuve trabajando en frameworks como Laravel, FastApi y Next.
                También en el uso librerias como React, Bootstrap y Tailwind
              </p>
            </li>
            <li className="flex items-center py-2">
              <span className="pr-2 text-sky-500 font-black">&#9655;</span>
              <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                Experiencia con software libre Linux (Ubuntu y Debian)
              </p>
            </li>
          </ul>
        </article>
        {/* <!-- SECCIONES OCULTAS POR DEFECTO -->
          <!-- JOB #2 DESCRIPTION --> */}

        <article id="job2" className={`${showJob1 ? "" : "hidden"}`}>
          <h3>
            ZooGuia &nbsp;
            <span className="text-sky-500 font-bold text-lg">nomeacuerdo</span>
          </h3>
          <h4 className="text-sm pb-5">Junio 2018 - Junio 2020</h4>
          <ul>
            <li className="flex items-center py-2">
              <span className="pr-2 text-sky-500 font-black">&#9655;</span>
              <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
            </li>
            <li className="flex items-center py-2">
              <span className="pr-2 text-sky-500 font-black">&#9655;</span>
              <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur, deserunt. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Consectetur, deserunt.
              </p>
            </li>
            <li className="flex items-center py-2">
              <span className="pr-2 text-sky-500 font-black">&#9655;</span>
              <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur, deserunt. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Consectetur, deserunt.
              </p>
            </li>
          </ul>
        </article>
        {/* <!-- JOB #3 DESCRIPTION --> */}
        <article id="job3" className={`${showJob2 ? "" : "hidden"}`}>
          <h3>
            Desarrollador WEB &nbsp;
            <span className="text-sky-500 font-bold text-lg">Programador</span>
          </h3>
          <h4 className="text-sm pb-5">Junio 2017 - Junio 2018</h4>
          <ul>
            <li className="flex items-center py-2">
              <span className="pr-2 text-sky-500 font-black">&#9655;</span>
              <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur, deserunt. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Consectetur, deserunt.
              </p>
            </li>
            <li className="flex items-center py-2">
              <span className="pr-2 text-sky-500 font-black">&#9655;</span>
              <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur, deserunt. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Consectetur, deserunt.
              </p>
            </li>
            <li className="flex items-center py-2">
              <span className="pr-2 text-sky-500 font-black">&#9655;</span>
              <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur, deserunt. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Consectetur, deserunt.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default AboutJob;
