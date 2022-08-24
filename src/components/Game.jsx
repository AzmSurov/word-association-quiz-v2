/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Game = () => {
let apiKey;
if(process.env.NODE_ENV !== 'production') {
  apiKey = process.env.REACT_APP_RAPID_API_KEY;
    console.log(apiKey);
} else {
  apiKey = process.env.REACT_APP_RAPID_API_KEY2;
    console.log(apiKey);
}
  const [showOptions, setShowOptions] = useState(false);
  const [chosenLevel, setChosenLevel] = useState(null);
  const [value, setValue] = useState("Select Level");
  const [words, setWords] = useState(null);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([])
  const [clicked, setClicked] = useState([])
 


  const correctNotify = () =>
  toast("Correct", {
    icon: "✅",
  });

  const wrongtNotify = () =>
  toast("Wrong", {
    icon: "❌",
  });

  const party = () =>
  toast("Perfect Score!!", {
    icon: "🎉",
  });



  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  const axios = require("axios");
  const data = [
    {
        id:1,
        value: "1",
        assignedLevel: "Level 1"
    },
    {
        id:2,
        value: "2",
        assignedLevel: "Level 2"
    },
    {
        id:3,
        value: "3",
        assignedLevel: "Level 3"
    },
    {
        id:4,
        value: "4",
        assignedLevel: "Level 4"
    },
    {
        id:5,
        value: "5",
        assignedLevel: "Level 5"
    },
    {
        id:6,
        value: "6",
        assignedLevel: "Level 6"
    },
    {
        id:7,
        value: "7",
        assignedLevel: "Level 7"
    },
    {
        id:8,
        value: "8",
        assignedLevel: "Level 8"
    },
    {
        id:9,
        value: "9",
        assignedLevel: "Level 9"
    },
    {
        id:10,
        value: "10",
        assignedLevel: "Level 10"
    },
]
  const getRandomWords = () => {

    


    const options = {
      method: "GET",
      url: "https://twinword-word-association-quiz.p.rapidapi.com/type1/",
      params: { level: chosenLevel, area: "sat" },
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "twinword-word-association-quiz.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setWords(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (chosenLevel) getRandomWords();
  }, [chosenLevel]);

  const checkAnswer = (option, optionIndex, correctAnswer) => {
    console.log(optionIndex, correctAnswer)
    if (optionIndex === correctAnswer) {
        setCorrectAnswers([...correctAnswers, option])
        setScore((score) => score + 1)
        correctNotify()
    } 
    else {
        wrongtNotify()
    }
    setClicked([...clicked, option])
}

if(score === 10) {
    party()
}

  console.log(correctAnswers);
  return (
    <div className="container mx-auto">
      {!chosenLevel && (
        <div className="h-screen">
          <h1 className="text-white text-center py-5 text-2xl">
            Word Association Game
          </h1>

          <div className="flex justify-center">
            <div class="relative inline-block text-left py-5">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  id="menu-button"
                  onClick={handleClick}
                  value="options"
                >
                  {value}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {showOptions && (
                <div
                  className="origin-top-right absolute right-0 mt-1 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div
                    className="py-1 flex flex-col justify-center divide-y-2"
                    role="none"
                  >
                      {
                          data.map(({id, value, assignedLevel}) => (
                            <button
                            className="text-gray-700 px-4 py-2 text-sm "
                            key={id}
                            onClick={() => {
                              handleClick();
                              setValue(assignedLevel);
                              setChosenLevel(value);
                            }}
                            value="1"
                          >
                            {assignedLevel}
                          </button>
                          ))
                      }
                    
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {chosenLevel && words && (
        <div>
          <div className="flex flex-row justify-between px-3 md:px-0">
            <h1 className="text-white text-center py-5 text-2xl">
              Welcome to level : {chosenLevel}
            </h1>
            
            <h1 className="text-white text-center py-5 text-2xl">
              Your Socore is : {score}
            </h1>
          </div>
          <div className="flex justify-center">
            <button class="relative inline-flex py-2 items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white  focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" onClick={() => setChosenLevel(null)}>
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
      Go Back
  </span>
</button>
            </div>
          <div className="container mx-auto py-5 ">
            <div className="grid md:grid-cols-3 grid-cols-1 px-5 md:px-0 gap-4 ">
              {words.quizlist.map((question, _questionIndex) => (
                <div
                  class="relative block p-8 border border-gray-600 shadow-xl rounded-xl"
                  href=""
                >
                  <span class="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-gradient-to-br from-pink-500 to-orange-400 text-white font-medium text-xs">
                    {_questionIndex + 1}
                  </span>

                  <div class="mt-4 text-gray-500 sm:pr-8">
                    <h5 class="mt-4 text-lg font-bold text-white">Hints: </h5>
                    <div className="flex flex-row gap-4">
                      {question.quiz.map((tip) => (
                        <p class=" mt-2 text-md text-white">{tip}</p>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 flex justify-start ">
                    {question.option.map((option, optionIndex) => (
                      <div >
                          <button key={optionIndex} class={"relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 disabled:bg-red-500 disabled:opacity-50" } disabled={clicked.includes(option) && "opacity-75"}
                      onClick={() => {
                        checkAnswer(option, optionIndex + 1, question.correct)
                      }}>
                        <span class={"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" }>
                          {option}
                        </span>
                      </button>
                           </div>
                      
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Toaster
                      position="top-center"
                      toastOptions={{ duration: 1500 }}
                      gutter={8}
                    />
    </div>
  );
};

export default Game;
