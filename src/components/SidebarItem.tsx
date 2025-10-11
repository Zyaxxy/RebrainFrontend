import type { ReactElement} from "react";


export function SidebarItem({text,icon}:{text:string, icon:ReactElement}) {
    return (
        <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="text-gray-500 p-2">
                        {icon}
                    </div>
                    {text}
                </div>

            </div>
    )
}   
