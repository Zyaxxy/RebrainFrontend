import { useState } from "react";
import { CrossIcon } from "../icons/crossicon";
export function CreateContentModal({open ,onClose}) {

    return <div>
        { open && <div className="w-screen h-screen bg-black fixed top-0 left-0 opacity-60 flex justify-center">
            <span className="flex flex-col justify-center opacity-100">
                <div className="bg-white rounded-md p-4 opacity-100">
                    <div className="flex flex-col justify-end"><CrossIcon/></div>
                    <div>
                        <InputBox onChange={()=>{}} placeholder="Title"/>
                        <InputBox onChange={()=>{}} placeholder="Link"/>
                    </div>
                </div>  
            </span>
            
        </div>}
    </div>

}
interface InputBoxProps {
    onChange:()=>void;
    placeholder:string;
}
function InputBox({onChange ,placeholder}:InputBoxProps) {
    return <div>
        <input type={"text"} placeholder={placeholder} className="px-4 py-2 m-2" onChange={onChange}></input>
        
    </div>
}