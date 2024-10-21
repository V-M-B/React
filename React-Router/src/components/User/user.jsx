import { React } from "react";
import { useParams } from "react-router-dom";

export default function user(){
    const {userid}=useParams()
    return(
    <div className=   "  bg-slate-600 text-3xl text-white flex-auto">User:{userid}</div>
    )
}