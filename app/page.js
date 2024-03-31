"use client";
import React,{useState} from "react";
const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const submitHandler = (e) =>{
     e.preventDefault()
     console.log(title)
     console.log(desc)
     settitle("")
     setdesc("")
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        MY TODO LIST
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 rounded"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)

          }}

         
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8  px-4 py-2 rounded"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e)=>{
            setdesc(e.target.value)

          }}
        />
      <button className="bg-black text-white rounded px-4 py-2 font-bold text-xl m-5 ">
        Add Task
      </button>
      </form>
    </>
  );
};

export default page;
