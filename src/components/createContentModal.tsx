import { useRef, useState } from "react";
import { CrossIcon } from "../icons/crossicon";
import { Button } from "./button";
import { InputBox } from "./InputBox";
import { content } from "../services/api";

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
            // Ideally we should trigger a refresh here, but for now we'll just close
            // The parent component should handle refreshing the list
            window.location.reload(); // Temporary refresh to show new content
        } catch (e) {
            console.error(e);
            alert("Failed to create content");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            {open &&
                <div className="fixed inset-0 z-50 flex justify-center items-center">
                    {/* Opaque background using RGBA */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
                    {/* Modal content stays solid */}
                    <span className="relative flex flex-col justify-center bg-white rounded-lg shadow-lg p-4 w-96">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer hover:bg-gray-100 rounded p-1">
                                <CrossIcon />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mt-2">
                            <InputBox reference={titleRef} placeholder="Title" />
                            <InputBox reference={linkRef} placeholder="Link" />
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700">Type</label>
                                <div className="flex gap-2">
                                    <Button
                                        text="Youtube"
                                        variant={type === ContentType.Youtube ? "primary" : "secondary"}
                                        onClick={() => setType(ContentType.Youtube)}
                                    />
                                    <Button
                                        text="Twitter"
                                        variant={type === ContentType.Twitter ? "primary" : "secondary"}
                                        onClick={() => setType(ContentType.Twitter)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-6">
                            <Button onClick={addContent} variant="primary" text="Create" loading={loading} />
                        </div>
                    </span>
                </div>
            }
        </div>
    );
}