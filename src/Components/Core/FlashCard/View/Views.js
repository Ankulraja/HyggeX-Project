import { useState } from "react";
import { ViewNavLink } from "../../../../Data/ViewNavLink";
import Study from "./Study";
import Quiz from "./Quiz";
import Test from "./Test";
import Game from "./Game";
import Other from "./Other";

const Views = () => {
  const [tab, setTab] = useState(ViewNavLink[0]);

  const changeHandler = (value) => {
    setTab(value);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex mx-auto md:w-6/12 md:mx-auto md:flex-row justify-center items-center md:justify-between">
        {ViewNavLink.map((val, index) => (
          <div
            key={index}
            className={`text-richblack-200 cursor-pointer rounded-full py-2 px-5
            ${
              tab === val
                ? "text-blue-900"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => changeHandler(val)}
          >
            {val.name}
            {tab === val && (
              <div className="w-full h-[1.5px] bg-blue-900"></div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full mx-auto py-5">
        {tab.name === "Study" && <Study />}
        {tab.name === "Quiz" && <Quiz />}
        {tab.name === "Test" && <Test />}
        {tab.name === "Game" && <Game />}
        {tab.name === "Other" && <Other />}
      </div>
    </div>
  );
};

export default Views;
