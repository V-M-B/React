import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("grey")

  return (
   <div className='w-full h-screen duration-200'  style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-4 shadow-2xl bg-white px-3 py-2 rounded-3xl'>
        
        <button onClick={()=>setColor("red")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>

        <button onClick={()=>setColor("green")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>

        <button onClick={()=>setColor("blue")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>

        <button onClick={()=>setColor("yellow")} className='outline-none px-4 rounded-full text-white shadow-lg text-black' style={{backgroundColor:"yellow"}}>Yellow</button>

        <button onClick={()=>setColor("pink")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}}>Pink</button>

        <button onClick={()=>setColor("black")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>black</button>
        {/* onClick it accepts function where so we used onClick=()=>setColor("color") so that we can use parameter*/}
        {/* if we give refrences onClick=setColor(does not take para) so in onClick the some return will be stored */}
      </div>
    </div>
   </div>
  )
}

export default App
