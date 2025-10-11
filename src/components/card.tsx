import type { ReactElement } from "react";
interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "instagram" | "youtube";
    StartIcon: ReactElement;
    EndIcon: ReactElement;
};

export function Card({ title, link, type , StartIcon, EndIcon }:CardProps) {
  return (
    <div className="bg-white rounded-md shadow-md outline-slate-200 max-w-72 m-1 border border-slate-100 p-2 h-min">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
            <div className="text-gray-500">
                {StartIcon}
            </div>
            {title}
        </div>
        <div className="flex items-center">
            <div className="text-gray-500">
                <a href={link} target="_blank" >
                    {EndIcon}
                </a>
            </div>
            <div className="text-gray-500">
            </div>
        </div>
       
      </div>
        <div className="pt-4">
                {type === "youtube" && <iframe className= "w-full" src={link.replace("watch", "embed").replace("?v=","/")}
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={link}></a>
                </blockquote>}
        </div>  
    </div>          
  );    
};