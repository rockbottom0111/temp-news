import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-color-black">
      <div className='grid grid-cols-3'>
      <div className="col-span-1 bg-white-200 p-4">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="/logo1.jpg" alt="" height={100} width={150} />
            <span className="ml-3 text-xl">RASHTRIYA TV</span>
          </a>
          </div>
          </div>

      <div className="col-span-1 bg-white-200 p-4 flex items-center justify-end">
          <div className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:borderL-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            ©2023 RASHTRIYA TV
          </div>
          </div>
      </div>

      <div className="col-span-1 bg-white-200 p-10">
      <div className="box">
        <h3>contact info</h3>
        <a href="#" className="links"> 
        <svg
          className="w-1 h-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        ></svg> +91-9911872414 </a>
        <a href="#" className="links"> 
        <svg
          className="w-1 h-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        ></svg> tanish </a>
        <a href="#" className="links"> 
        <svg
          className="w-1 h-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        ></svg> vashisth </a>
        <a href="#" className="links"> 
        <svg
          className="w-1 h-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        ></svg> engineer </a>
      </div>
      </div>
     
    </footer>
  );
};

export default Footer;
