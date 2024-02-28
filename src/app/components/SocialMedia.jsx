import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function SocialMedia() {
  return (
    <div>
      <Link href="#">
        <FaFacebook />
      </Link>
      <Link href="#">
        <FaInstagramSquare />
      </Link>
      <Link href="#">
        <FaGithub />
      </Link>
    </div>
  );
}

export default SocialMedia;
