
import React from 'react';
import Spinner from './Spinner';
import Usegif from './Usegif';




const Random = () => {
  //custom hook
 const {loading,gif,fetchdata}=Usegif("");
  




function clickhandler(){
  fetchdata();

}
  return (
    <div className='w-5/12   bg-green-600 mt-8 gap-6 rounded-md flex flex-col justify-evenly items-center'>
      <h1 className='font-bold text-[1.2rem] '>A Random Gif</h1>
      <div>
      {
        loading?(<Spinner/>):(<img src={gif}></img>)

      }
      </div>

      
      
      <button onClick={clickhandler} className='bg-gray-400 flex rounded-md w-11/12 py-2 mt-4 mb-5 justify-center items-center text-[1.2rem] font-bold'>Generate</button>
    </div>
  )
}

export default Random;
