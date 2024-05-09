import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { Faqlink } from "../../../Data/Faqlink";
import FAQCard from "./FAQCard";
const FAQ = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIcon = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-11/12 mx-auto py-20">
      <h1 className="text-4xl font-bold w-fit text-transparent bg-clip-text bg-gradient-to-br from-blue-800 to-blue-500">
        FAQ
      </h1>
      <div className="py-10 flex flex-col gap-4 ">
        {Faqlink?.map((value, index) => (
         <FAQCard value={value}></FAQCard>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
