import { CrossIcon } from "../icons/crossicon";
import { Button } from "./button";
export function CreateContentModal({open ,onClose}) {

    return <div>
        { open && <div className="w-screen h-screen bg-black fixed top-0 left-0 opacity-60 z-50 flex justify-center items-center">
            <span className="flex flex-col justify-center bg-white opacity-100">
                <div className="bg-white opacity-100 rounded-lg p-4">
                    <div className="flex justify-end ">
                        <div onClick={onClose}>
                        <CrossIcon/>
                        </div>
                    </div>
                    <div>
                        <InputBox onChange={()=>{}} placeholder="Title"/>
                        <InputBox onChange={()=>{}} placeholder="Link"/>
                    </div>
                </div>  
                <Button variant="primary" text = "Create"/>
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