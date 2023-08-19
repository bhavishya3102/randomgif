
import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import Usegif from './Usegif';




const Tag= () => {
  
 
  const [tag,settag]=useState('laptop');
  const {loading,gif,fetchdata}=Usegif(tag);
  




function clickhandler(){
  fetchdata(tag);

}
  return (
    <div className='w-5/12   bg-orange-500 mb-5 border-none  mt-8 gap-6 rounded-md flex flex-col justify-evenly items-center'>
      <h1 className='font-bold text-[1.2rem] '>A Random {tag} Gif</h1>
      <div>
      {
        loading?(<Spinner/>):(<img src={gif}></img>)

      }
      </div>

      <input 
      onChange={(event)=> settag(event.target.value)}
value={tag}
type="text"

      className='bg-gray-100 flex rounded-md w-11/12 py-2 mt-4 justify-center items-center text-[1.2rem]'>
      </input>
      
      <button onClick={clickhandler} className='bg-gray-400 flex rounded-md w-11/12 py-2 mt-4 mb-5 justify-center items-center text-[1.2rem] font-bold'>Generate</button>
    </div>
  )
}

export default Tag;

