interface InputBoxProps {
    onChange?:()=>void;
    placeholder:string;
    reference?:any;
}

export function InputBox({onChange ,placeholder}:InputBoxProps) {
    return <div>
        <input type={"text"} placeholder={placeholder} className="px-4 py-2 m-2" onChange={onChange}></input>
        
    </div>
}