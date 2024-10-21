import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './components/Home/home.jsx';
import About from './components/about/about.jsx';
import Layout from '/src/layout.jsx'; 
import Contact from "./components/contact/contact.jsx";
import User from "./components/User/user.jsx";
import Github, { githubInfoLoader } from "./components/Github/github.jsx";


//method-1
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />, // Use the Layout component here
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    //nesting
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route
     path='github'
      element={<Github/>}
    loader={githubInfoLoader}
      />



    </Route>

    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
