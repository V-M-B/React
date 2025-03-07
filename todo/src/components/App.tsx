
import '../App.css'
import BackgroundHeading from './BackgroundHeading.tsx'

export default function App() {
  

  return (
    <>
      <div className="bg-[#f1d4b3] min-h-screen flex justify-center items-center flex-col">
       <BackgroundHeading/>
        <main className='relative w-[972px] h-[636px] bg-white rounded-[8px]  grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden'> 
          <header className='col-[1/3] row-[1/2] bg-[#fbf5ed] border-l border-black/[0.08]'></header>
        
        
          <ul></ul>


          <section className='col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08]'></section>

        </main>

        <footer className='flex justify-between items-center w-[972px] text-[11px] mt-[12px]'>
            <small>
              &copy; Copyright by VMB
            </small>
            <p>
              Version <b>1.5</b>
            </p>
        </footer>
      </div>
    </>
  )
}
