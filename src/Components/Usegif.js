
import axios from 'axios';
import React, {  useState,useEffect } from 'react';


const api_key=process.env.REACT_APP_API_KEY;
const Usegif = ({tag}) => {
 // custom hook-- reusability of logic code..
    const [gif,setgif]=useState('');
  const [loading,setloading]=useState(false);
  

//   const api_key='OHBfIruKYz4E1mNrFWCmNQkuHH9RukUd';
    async function fetchdata(tag){
        try{
            setloading(true);
           
                
                const randomurl=`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;
                const tagurl=`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`;
            
    
            
            //const resp=await axios.get(tag?`${url}&tag=${tag}`: url);
            // let resp=await fetch(url);
            // let output=resp.json();
            const resp=await axios.get(tag==="" ? randomurl: tagurl);
            let output=resp.data.data.images.downsized_medium.url;
             setgif(output);
             setloading(false);


        }
        catch(e){
            console.log(e);
        }

     

    }

    useEffect(() => {
        fetchdata(tag);
        }, [])

    return {loading,gif,fetchdata};  

}

export default Usegif;
