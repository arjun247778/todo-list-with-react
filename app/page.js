"use client";
import React,{useState} from "react";
const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);
  const submitHandler = (e) =>{
     e.preventDefault()
     setmaintask([...maintask, {title,desc}])
     settitle("");
     setdesc("");
     console.log(maintask);
  }
    let rendertask =<h2>No Task Available</h2>
    const deletehandler= (i) => {
      let copytask =[...maintask]
      copytask.splice(i,1)
      setmaintask(copytask)
    }
    if (maintask.length>0) {
      rendertask = maintask.map((t ,i) => {
        return (
          <li key={i} className="flex items-center justify-between mb-8">
            <div className="flex items-center justify-between w-2/3">
              <h5 className="text-2xl font-semibold">{t.title}</h5>
              <h6 className="text-lg font-semibold">{t.desc}</h6>
            </div>
            <button onClick={() => {
            deletehandler(i)
            }}
             className="bg-red-500 rounded text-white font-bold px-4 py-2">Delete</button>
          </li>
        )
      })
      
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
      <hr/>
      <div className="p-8 bg-slate-200">
        <ul>{rendertask}</ul>
      </div>
    </>
  );
};

export default page;
