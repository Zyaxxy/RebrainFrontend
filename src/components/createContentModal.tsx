import { useRef, useState } from "react";
import { CrossIcon } from "../icons/crossicon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { content } from "../services/api";
import { Loader2 } from "lucide-react";

const ContentType = {
    Youtube: "youtube",
    Twitter: "twitter"
} as const;

type ContentType = typeof ContentType[keyof typeof ContentType];

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState<ContentType>(ContentType.Youtube);
    const [loading, setLoading] = useState(false);

    function handleLinkChange(e: React.ChangeEvent<HTMLInputElement>) {
        const url = e.target.value;
        const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
        const twitterRegex = /^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\/.+$/;

        if (youtubeRegex.test(url)) {
            setType(ContentType.Youtube);
        } else if (twitterRegex.test(url)) {
            setType(ContentType.Twitter);
        }
    }

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        if (!title || !link) {
            alert("Please fill in all fields");
            return;
        }

        setLoading(true);
        try {
            await content.create({
                title,
                link,
                type
            });
            onClose();
            window.location.reload();
        } catch (e) {
            console.error(e);
            alert("Failed to create content");
        } finally {
            setLoading(false);
        }
    }

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
            {/* Opaque background */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

            <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-6 z-10">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Create Content</h2>
                    <div onClick={onClose} className="cursor-pointer hover:bg-gray-100 rounded p-1">
                        <CrossIcon />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <Input ref={titleRef} placeholder="Title" />
                    <Input ref={linkRef} placeholder="Link" onChange={handleLinkChange} />

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700">Type</label>
                        <select
                            className="w-full rounded-md border border-gray-300 bg-white p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={type}
                            onChange={(e) => setType(e.target.value as ContentType)}
                        >
                            <option value={ContentType.Youtube}>Youtube</option>
                            <option value={ContentType.Twitter}>Twitter</option>
                        </select>
                    </div>

                    <div className="flex justify-end mt-2">
                        <Button
                            onClick={addContent}
                            variant="default"
                            disabled={loading}
                        >
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Create
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}