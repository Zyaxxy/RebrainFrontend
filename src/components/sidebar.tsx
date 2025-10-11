import { Xicon } from "../icons/Xicon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
    return (
        <div className="w-64 h-screen fixed bg-slate-100 border-slate-200 p-4 border-r"> 
            <SidebarItem text="X" icon={<Xicon/>}/>
            <SidebarItem text="Youtube" icon={<YoutubeIcon/>}/>
        </div>
    );
}   