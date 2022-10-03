/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react";
import { useEffect, useState } from "react";


export default function Content() {
  const [countDown,setCountDown] = useState(60)
  let countID = useRef(0)

    const handleCountDown = () => {
      countID.current = setInterval(() =>{
       setCountDown(preCount => preCount-1);
       console.log('start => ',countID)
      },1000)
    }
    
    const handleCountDownStop = () => {
      clearInterval(countID.current)
      console.log('Stop => ',countID.current)
    }

  return (
    <div>
      <h2>{countDown}</h2>
      <button onClick={handleCountDown}>Start</button>
      <button onClick={handleCountDownStop}>Stop</button>
    </div>

  );
}
