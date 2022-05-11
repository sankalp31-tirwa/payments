import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      {/* <footer className="bottom-0 ">
        <div className="container px-5 py-8 mx-auto flex justify-center">
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
            <a
              href="https://nedevelopers.in/"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              © by NE Developers.{" "}
            </a>
            All Rights Reserved.
          </p>
        </div>
      </footer> */}
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex justify-center">
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4 ">
            © 2022
            <a
              href="https://nedevelopers.in/"
              className="text-gray-600 ml-1 bg-slate-100"
              rel="noopener noreferrer"
              target="_blank"
            >
              NE Developers.{" "}
            </a>
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
