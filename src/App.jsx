import Random from "./Components/Random";
import Tag from "./Components/Tag";
import './index.css';

export default function App() {
  return (

    <div className="background w-screen  flex flex-col items-center">
    <div className="bg-white w-11/12 items-center flex justify-center h-5 mt-7 py-5 px-6 border rounded-xl ">
    <h1 className="text-[1.2rem] font-bold">Random Gifs</h1></div>
    <div className="w-full flex flex-col items-center justify-center">
    <Random></Random>
    <Tag></Tag>
    
    </div>
    </div>
  );
}
