import React from 'react';
import './App.css';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import SunMoon from './dummysunmoon';
import design from './images/design.png';
import MyPDF from './PDF';
import deved from './images/Shubham-t.png';
import code from './images/code.png';
import web1 from './images/web1.png';
import web2 from './images/web2.png';
import web3 from './images/web3.png';
import web4 from './images/web4.png';
import web5 from './images/web5.png';
import web6 from './images/web6.png';
import Modal from './MyModal'
import Projects from './components/code-page';


function App() {
  return (
    <div className="">
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className=" font-burtons text-xl">Developed by Shubham</h1>
            <ul className="flex items-center">
              <li className=" animate-bounce w-6 h-6">
                <SunMoon/>
              </li>
              <li>
                <MyPDF/>
              </li>
            </ul>
          </nav>
     
          <div className=" lg:flex gap-10">
            <div className="text-center p-10 py-10 flex-1">
                <h2 className="text-5xl py-2 text-teal-600 font-bold dark:text-teal-400 md:text-6xl">
                  Shubham Tanwar
                </h2>
                <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                  A Creative Designer and Developer<br />
                  Based in Delhi.
                </h3>
                <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
    
                </p>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                  <ul className=" flex">
                    <a href="https://twitter.com/o_0ATOM0_o" className=" mx-10"><AiFillTwitterCircle /></a>
                    <a href="https://www.linkedin.com/in/shubham-tanwar-129641247/" className=" mx-10"><AiFillLinkedin /></a>
                    <a href="https://github.com/Shubhamtanwar78" className=" mx-10"><AiFillGithub/></a>
                  </ul>
                </div>
              </div>
              <div className="mx-auto w-100 h-100 relative overflow-hidden mt-20 md:h-96 px-5 md:w-96 flex">
                <img src={deved} alt="" />
              </div>
            </div>
        
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 font-bold dark:text-white ">About me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I&apos;m a Designer,Web Developer, Freelancer.<br />
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve created some small
              <span className="text-teal-500"> projects</span>
              , <span className="text-teal-500"> games </span>
              and a<span className="text-teal-500"> calculator.</span>
            </p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400 flex-1 bg-purple-600">
            <p className=" font-bold text-md py-1 leading-8 text-black dark:text-black">
              I OFFER FROM A WIDE RANGE OF SERVICES, INCLUDING BRAND DESIGN, PROGRAMMING AND TEACHING.
            </p>
          <div className="lg:flex gap-10">
            <div className=" cursor-pointer active:bg-purple-700 text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-600 flex-1 bg-purple-400">
            
              <img className=' mx-auto' src={design} width={100} height={100} alt="" />
              <h3 className="text-lg font-bold pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
            
            </div>
            <div className=" cursor-pointer active:bg-purple-700 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600 flex-1 bg-purple-400">
              <a href={<Projects/>}>
              <img className=' mx-auto' src={code} width={100} height={100} alt="" />
              <h3 className="text-lg font-bold pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let&apos;s make it a
                reality.
              </p>
              </a>
            </div>
          </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 font-bold dark:text-white ">Contact Details</h3>
            <ul>
              <li>
                <h3 className=' dark:text-white'><span className=" dark:text-white font-bold">Email :-</span> shubhamtanwar78@gmail.com</h3>
              </li>
              <li>
                <h3 className=' dark:text-white'><span className=" dark:text-white font-bold">Phone No. :-</span> +91-9717728625</h3>
              </li>
            </ul>
           
          {/*<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            This is my official portfolio website to showcase my all works related to web development and UI designs. Join me down below and let's get cracking!
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>*/}
          </div> 
          <div className="flex flex-row gap-10 py-10 lg:flex-row lg:flex-wrap overflow-x-auto">
            <div className=" flex-1 ">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt=""
              />
            </div>
            <div className=" flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt=""
              />
            </div>
            <div className=" flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt=""
              />
            </div>
            <div className=" flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt=""
              />
            </div>
            <div className=" flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt=""
              />
            </div>
            <div className=" flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
                alt=""
              />
            </div>
          </div>
          <div className=" flex items-center justify-start">
              <Modal />
         </div>
        </section>
      </main>
    </div>
  );
}

export default App;
