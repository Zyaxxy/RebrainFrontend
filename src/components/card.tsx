import type { ReactElement } from "react";
import { Card as ShadcnCard, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { ShareIcon } from "../icons/shareicon";
import { CrossIcon } from "../icons/crossicon";
import { Xicon } from "../icons/Xicon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "instagram" | "youtube";
  StartIcon?: ReactElement;
  EndIcon?: ReactElement;
};

export function Card({ title, link, type, StartIcon }: CardProps) {
  const Icon = type === "twitter" ? <Xicon /> : type === "youtube" ? <YoutubeIcon /> : StartIcon;

  return (
    <ShadcnCard className="max-w-72 h-min">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2 font-medium">
          {Icon}
          {title}
        </div>
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <ShareIcon className="size-4 text-muted-foreground hover:text-foreground cursor-pointer" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: 90 }} whileTap={{ scale: 0.9 }}>
            <CrossIcon className="size-4 text-muted-foreground hover:text-foreground cursor-pointer" />
          </motion.div>
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </div>
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
