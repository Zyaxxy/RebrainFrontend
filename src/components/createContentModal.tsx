import { CrossIcon } from "../icons/crossicon";
import { Button } from "./button";
import { InputBox } from "./InputBox";
export function CreateContentModal({open, onClose}) {
    return (
        <div>
            {open &&
                <div className="fixed inset-0 z-50 flex justify-center items-center">
                    {/* Opaque background using RGBA */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
                    {/* Modal content stays solid */}
                    <span className="relative flex flex-col justify-center bg-white rounded-lg shadow-lg p-4">
                        <div className="flex justify-end">
                            <div onClick={onClose}>
                                <CrossIcon />
                            </div>
                        </div>
                        <div>
                            <InputBox onChange={()=>{}} placeholder="Title"/>
                            <InputBox onChange={()=>{}} placeholder="Link"/>
                        </div>
                        <Button variant="primary" text="Create"/>
                    </span>
                </div>
            }
        </div>
    );
}