import React from "react";

import ImagenHero1 from "./assets/images/desktop-image-hero-1.jpg";
import ImagenAboutDark from "./assets/images/image-about-dark.jpg";
import ImagenAboutLight from "./assets/images/image-about-light.jpg";

import IconArrowShop from "./components/icons/IconArrowShop";
import IconNext from "./components/icons/IconNext";
import IconPrev from "./components/icons/IconPrev";


const App = () => {
  return (
    <div className="">
      <nav>
        <a href="#" className="bg-slate-400">
          Room
        </a>
        <div>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <header className="grid grid-cols-1 lg:grid-cols-7 lg:grid-rows-[10fr_1.5fr]">

        <img src={ImagenHero1} alt="" className="lg:col-span-4 lg:row-span-2 w-full h-full" />

        <article className="lg:col-span-3 lg:px-24 flex flex-col justify-center items-start">
          <h1 className=" font-bold text-4xl mb-6"> Discover innovative ways to decorate</h1>
          <p className="text-gray-500 mb-8">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you lov
          </p>

          <button className="flex items-center hover:text-gray-500 hover:fill-gray-500">
            <span className="font-bold text-lg uppercase tracking-[1rem]">Shop now</span>
            <IconArrowShop/>
          </button>
        </article>

        <div className="bg-black text-white flex">
          <button className="w-full ">
            <IconPrev className="mx-auto"/>
          </button>

          <button className="w-full">
            <IconNext className="mx-auto"/>
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-7">
        <img src={ImagenAboutDark} alt="" className="lg:col-span-2 w-full h-full" />

        <section className="lg:col-span-3 lg:px-16 flex flex-col justify-center">
          <h2 className="font-bold text-lg uppercase tracking-[0.5rem] mb-4">About our furniture</h2>
          <p className="text-gray-500">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </section>

        <img src={ImagenAboutLight} alt="" className="lg:col-span-2 w-full h-full" />
      </main>
    </div>
  );
};

export default App;
