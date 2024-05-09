import FAQ from "../../Common/Doubts/FAQ";
import Views from "./View/Views";
import { IoMdAddCircle } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
const FlashCard = () => {
  return (
    <div className="w-11/12 mx-auto py-20 flex flex-col gap-10">
      <div className="w-11/12 mx-auto">
        <div className="flex items-center text-gray-700 max-lg:text-[14px] max-md:text-[12px] max-sm:text-[10px]">
          {" "}
          <IoHomeOutline></IoHomeOutline> <FaChevronRight></FaChevronRight>
          <p>FlashCarda</p>
          <FaChevronRight></FaChevronRight>
          <p>Mathematics</p>
          <FaChevronRight></FaChevronRight>
          <p className="text-blue-700">Relation And Function</p>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <h1 className="font-bold text-xl text-blue-800">
          Relations and Functions (Mathmatics)
        </h1>
      </div>
      <div className="w-11/12 flex justify-center items-center">
        <Views></Views>
      </div>

      <div className="w-11/12 mx-auto flex justify-between items-center">
        <div className="flex gap-3  items-center">
          <div className="w-[50px] h-[50px] rounded-[50%] shadow-[0px_0px_10px_rgb(10,35,205)] flex justify-center items-center">
            <img
              className="w-9/12 h-9/12"
              alt="loading..."
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1715269027/UploadOnly/Screenshot_2024-05-09_at_9.03.58_PM-removebg-preview_egvanc.png"
            ></img>
          </div>
          <div className="">
            <p className="text-[12px]">Published By</p>
            <img
              className="w-20 "
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1715269605/UploadOnly/Screenshot_2024-05-09_at_9.15.36_PM-removebg-preview_ilru7w.png"
              alt="loading..."
            ></img>
          </div>
        </div>
        <button className="flex justify-center items-center gap-2 max-md:gap-0 border max-md:w-1/2 max-md:text-xl  text-2xl text-blue-900">
          <IoMdAddCircle className="text-4xl "></IoMdAddCircle>
          <p>Create FlashCard</p>
        </button>
      </div>

      <div>
        <FAQ></FAQ>
      </div>
    </div>
  );
};
export default FlashCard;
