import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
const FAQCard = ({value}) => {
    const [isExpanded, setIsExpanded] = useState(false);

  const toggleIcon = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
        <details className="border border-blue-700 rounded-lg w-1/2 max-lg:w-8/12 max-md:w-10/12 max-sm:w-full">
            <summary className="py-2 px-3 flex items-center justify-between">
              {value.qna}
              <span className="text-blue-700 ml-2 text-lg" onClick={toggleIcon}>
                {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </summary>
            <p
              className="bg-slate-100 px-10 py-1 rounded-b-lg "
              style={{ display: isExpanded ? "block" : "none" }}
            >
              {value.ans}
            </p>
          </details>
    </div>
  )
}
export default FAQCard