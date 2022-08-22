import React from "react";
import { Link } from "react-router-dom";
import hero from "../img.png"
const Main = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 ">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto flex flex-wrap">
          <div class="lg:w-1/3   w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center"
              src="https://images.unsplash.com/photo-1561651188-d207bbec4ec3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            />
          </div>
          <div class="flex flex-col flex-wrap lg:py-32 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">

            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-3xl title-font font-medium mb-3">
                  Word Association Game
                </h2>
                <p class="leading-relaxed text-base text-gray-200">
                A word association game is a game in which a word is given to a person and then that person must say an associated word or phrase. Word association games are a fantastic way to help practice using their existing vocabulary and to learn new English words.
                </p>

              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              {/* <div class="flex-grow">
          <h2 class="text-white text-lg title-font font-medium mb-3">Shooting Stars</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div> */}
              <div className="text-center ">
                  <Link to="/game">
                  <button class="relative inline-flex lg:items-start items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span class="relative px-5 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Let's Play!
                  </span>
                </button>
                  </Link>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
