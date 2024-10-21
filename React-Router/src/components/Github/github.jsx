import { React, useEffect, useState } from "react";
import { Await } from "react-router-dom";
import {useLoaderData  } from "react-router-dom";


export default function github(){
//    const [data,setData]=useState([])
//     useEffect(()=>{
//     fetch("https://api.github.com/users/V-M-B")
//     .then(res=>res.json())//converted to json
//     .then(data=>{
//         console.log(data);
//         setData(data)
        
//     })

//    },[])
const data=useLoaderData()
    return(
    <div className="bg-gray-600 text-3xl text-white p-4 m-4 text-center">Github Followers: {data.followers}
    <img  className='' src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    )

}


export  const githubInfoLoader=async () => {
    const resp=await fetch("https://api.github.com/users/V-M-B")
    return resp.json()
}