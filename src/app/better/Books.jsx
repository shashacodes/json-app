"use client";
import React, { useState } from "react";
import Hooks from "./Hooks";

export default function Books() {
  const [count, setCount] = useState(200);
  const [myName, setMyName] = useState("sharon");
  return (
    <div className="justify-center text-center font-bold text-2xl gap-5 p-8">
      <h1>There is a hook here</h1> <br />
      <Hooks name="franc" age="10" town="igbo" /> <br />
      <Hooks name="sharon" age="20" town="ibibio" />
      <p className="border rounded-xl w-[100px] h-[50px] mx-auto text-center p-2">
        {count}
      </p>
      <button
        className="bg-yellow-200 px-2 justify-center py-3 rounded-xl mt-5  mr-8 hover:bg-amber-600"
        onClick={() => setCount(count + 1)}
      >
        Increase Number
      </button>
      <button
        className="bg-blue-200 px-2 py-3 rounded-xl mr-8 hover:bg-cyan-300"
        onClick={() => setCount(count - 1)}
      >
        Decrease Number
      </button>
      <button
        className="bg-amber-600 px-2 py-3 rounded-xl hover:bg-cyan-300"
        onClick={() => setCount(200)}
      >
        Reset
      </button>
      <div className="border p-6 w-[400px] h-[150px] bg-black text-white mx-auto mt-3">
        <h1>change the text here</h1>
        <ul>
          <li className="text-xl font-extrabold">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={myName}
              onChange={(e) => setMyName((prev) => e.target.value)}
            />
          </li>
          <p>{myName}</p>
          <li className="text-xl font-extrabold"></li>
        </ul>
      </div>
    </div>
  );
}
