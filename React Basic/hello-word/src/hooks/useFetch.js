// // export function usePostTitle(){
// //     const [post, setPost] = useState({})
// //     async function getPost() {
// //     const res=await fetch("https://jsonplaceholder.typicode.com/todos/1");
// //     const json=await res.json();
// //     setPost(json);
// //   }
// //   useEffect(()=>{
// //     // fetch("https://jsonplaceholder.typicode.com/todos/1")
// //     getPost()
// //   })
// //   return post.title;
// // }

// import { useEffect, useState } from "react";

// export function useFetch(url) {
//   const [finalData, setFinalData] = useState({});

//   async function getDetails(params) {
//     const res = await fetch(url);
//     const json = await res.json();
//     setFinalData(json)
//   }

//   useEffect(() => {
//     getDetails();
//   });
// }




import { useEffect, useState } from "react";

export function useFetch(url) {
  const [finalData, setFinalData] = useState({});

  async function getDetails() {
    const res = await fetch(url);
    const json = await res.json();
    setFinalData(json);
  }

  useEffect(() => {
    getDetails();
  }, [url]);  // Add dependency array to avoid infinite loop

  return { finalData };  // Return the data object
}
