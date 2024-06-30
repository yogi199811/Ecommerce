import React from "react";
import Movies from "../Movies";
import axios from "axios";

const Help = () => {

  const clickHandle = async () => {
    const {data} = await axios("https://swapi.dev/api/films/");
    

    const dets = await data.results.map((val)=>{

        return {
            id : val.episode_id,
            title : val.title,
            director : val.director
        }

    })

    console.log(dets[0].title);




    
   
  };

  return (
    <>
      <div className=" container  mt-28">
        <Movies />

        
        <button
          onClick={clickHandle}
          className=" bg-blue-600 p-5 rounded-full text-white"
        >
          add data
        </button>
      </div>
    </>
  );
};

export default Help;
