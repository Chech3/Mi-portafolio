import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="py-6 flex">
      <Link className="pr-2 text-2xl hover:text-sky-600 ease-out duration-300" target="_blank" href="https://www.facebook.com/joseangel.garces.14/">
        <FaFacebook />
      </Link>
      <Link className="pr-2 text-2xl hover:text-violet-500 ease-out duration-300" target="_blank" href="#">
        <FaInstagramSquare className="" />
      </Link>
      <Link className="pr-2 text-2xl hover:text-slate-400 dark:hover:text-slate-800 ease-out duration-300" target="_blank" href="https://github.com/Chech3">
        <FaGithub className="" />
      </Link>
    </div>
  );
}

export default SocialMedia;
