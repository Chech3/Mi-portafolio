import Image from "next/image";
import React from "react";
import bob from "../../../public/img/bob.png";
import { FaGithub } from "react-icons/fa";

function Project({ texto = "cositas" }) {
  return (
    <div className="border-1 rounded-lg bg-white dark:bg-slate-800 m-5">
      <div className="m-2">
        <Image
          width={200}
          className="opacity-80 hover:opacity-100"
          src={bob}
          alt=""
        />
        <h4 className=" text-center font-bold my-2">{texto}</h4>
        <article className="flex justify-between">
          <div className="flex flex-nowrap items-center">
            <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
              HTML
            </span>
            <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
              CSS
            </span>
            <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">
              Javascript
            </span>
          </div>
          <div className="text-xl text-slate-600 dark:text-slate-200 pr-2 flex flex-nowrap  ">
          <FaGithub />
          </div>
        </article>
      </div>
    </div>
  );
}

export default Project;
