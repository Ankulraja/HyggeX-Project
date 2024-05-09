import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen flex flex-col text-black h-screen flex justify-center items-center">
      Home Page Comming Soon....
      <Link to={"/flashCard"} className="text-blue-600">
        Click Here{" "}
      </Link>
      to See working Page
    </div>
  );
};
export default Home;
