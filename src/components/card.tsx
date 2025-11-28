import type { ReactElement } from "react";
import { Card as ShadcnCard, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "instagram" | "youtube";
  StartIcon: ReactElement;
  EndIcon?: ReactElement;
};

export function Card({ title, link, type, StartIcon }: CardProps) {
  return (
    <ShadcnCard className="max-w-72 h-min">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2 font-medium">
          {StartIcon}
          {title}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
          <ExternalLink className="h-4 w-4" />
        </a>
      </CardHeader>
      <CardContent className="pt-2">
        {type === "youtube" && (
          <iframe
            className="w-full aspect-video rounded-md"
            src={link.replace("watch", "embed").replace("?v=", "/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}

        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link}></a>
          </blockquote>
        )}
      </CardContent>
    </ShadcnCard>
  );
};