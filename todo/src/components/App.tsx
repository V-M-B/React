
import '../App.css'
import BackgroundHeading from './BackgroundHeading.tsx'
import Footer from './Footer.tsx'
import Header from './Header.tsx'
import Sidebar from './Sidebar.tsx'
import TodoList from './TodoList.tsx'

export default function App() {
  

  return (
    <>
      <div className="bg-[#f1d4b3] min-h-screen flex justify-center items-center flex-col">
       <BackgroundHeading/>
       <main className="relative w-[972px] shadow-[0_4px_4px_rgb(0,0,0,0.08)] h-[636px] bg-[#fff] rounded-[8px] overflow-hidden grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr]">
          
        <Header />
        <TodoList />
        <Sidebar />
        </main>

        <Footer />  
      </div>
    </>
  )
}
