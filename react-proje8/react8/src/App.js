import React, { useRef, useState } from 'react';
import './input.css';
import circle from './images/circle.png';
import cross from './images/close.png';

let data =["","","","","","","","",""]; 

function App() {
  const titleRef = useRef(null);
  let [count,setCount]=useState(0);
  let [lock,SetLock]=useState(false);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];
  
  const toggle = (e,num)=>{
      if(lock){
        return 0;
      }
      else if(count%2===0){
        e.target.innerHTML = `<img src='${circle}'>`
        data[num]="X";
        setCount(++count);
      }
      else{
        e.target.innerHTML = `<img src='${cross}'>`
        data[num]="O";
        setCount(++count);
      }
      checkWin();
  }
  
  const checkWin=()=>{
    if(data[0]===data[1] && data[1]===data[2] && data[2]!=="") {
      won(data[2]);
    }
    else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="") {
      won(data[5]);
    }
    else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="") {
      won(data[8]);
    }
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="") {
      won(data[7]);
    }
    else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="") {
      won(data[8]);
    }
    else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="") {
      won(data[8]);
    }
    else if(data[0]===data[1] && data[1]===data[2] && data[2]!=="") {
      won(data[2]);
    }
    else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="") {
      won(data[6]);
    }
  }
  
  const won=(winner)=>{
    SetLock(true);
    titleRef.current.innerHTML = `Tebrikler!!`;
  }
  
  const reset=()=>{
    SetLock(false);
    data=["","","","","","","","",""];
    titleRef.current.innerHTML = `Tic Tac Toe `;
    box_array.map((e)=>{
      e.current.innerHTML = "";
    })
  }

  return (
   
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-b from-red-500 to-blue-500'>
    
      <div className='text-center mb-8 font-bold text-white transition duration-500 hover:shadow-lg hover:text-yellow-400 text-6xl p-4 rounded-xl border-4 border-white' ref={titleRef}>Tic Tac Toe </div>
      <div className='bg-pink-400 bg-opacity-15'>
        {/* //row1 */}
        <div className='flex'>
          <div ref={box1} className='w-20 h-20 border border-white flex justify-center items-center' onClick={(e)=>{toggle(e,0)}}></div>
          <div ref={box2} className='w-20 h-20 border border-white flex justify-center items-center' onClick={(e)=>{toggle(e,1)}}></div>
          <div ref={box3} className='w-20 h-20 border border-white flex justify-center items-center' onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        {/* //row2 */}
        <div className='flex'>
          <div ref={box4} className='w-20 h-20 border border-white flex justify-center items-center' onClick={(e)=>{toggle(e,3)}}></div>
          <div ref={box5} className='w-20 h-20 border border-white flex justify-center items-center' onClick={(e)=>{toggle(e,4)}}></div>
          <div ref={box6} className='w-20 h-20 border border-white flex justify-center items-center' onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        {/* //row3 */}
        <div className='flex'>
          <div ref={box7} className='w-20 h-20 border border-white flex justify-center items-center' onClick={(e)=>{toggle(e,6)}}></div>
          <div ref={box8} className='w-20 h-20 border border-white flex justify-center items-center' onClick={(e)=>{toggle(e,7)}}></div>
          <div ref={box9} className='w-20 h-20 border border-white flex justify-center items-center' onClick={(e)=>{toggle(e,8)}}></div>
        </div>
      </div>
      <div className='mt-8'>
        <button onClick={()=>{reset()}} className='text-center mb-8 font-bold text-white transition duration-500 hover:shadow-lg hover:text-yellow-400 text-6xl p-4 rounded-xl'>Reset</button>
      </div>
    </div>
  );
}

export default App;
