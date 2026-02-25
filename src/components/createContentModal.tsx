import { useRef, useState } from "react";
import { CrossIcon } from "../icons/crossicon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { content } from "../services/api";
import { Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { backdropVariants, modalVariants, staggerItem } from "@/lib/animation-variants";

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

    return (
        <AnimatePresence mode="wait">
            {open && (
                <div className="fixed inset-0 z-50 flex justify-center items-center">
                    {/* Backdrop */}
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={backdropVariants}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={modalVariants}
                        className="relative w-full max-w-md bg-card rounded-lg shadow-2xl p-7 z-10 border border-border/50"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h2 className="font-display text-xl font-semibold text-foreground">
                                    Add Content
                                </h2>
                                <p className="text-xs text-muted-foreground mt-1">
                                    Save a link to your second brain
                                </p>
                            </div>
                            <motion.div
                                onClick={onClose}
                                className="cursor-pointer hover:bg-accent rounded-md p-1.5 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <CrossIcon />
                            </motion.div>
                        </div>

                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
                            className="flex flex-col gap-5"
                        >
                            <motion.div variants={staggerItem}>
                                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                                    Title
                                </label>
                                <Input ref={titleRef} placeholder="Give it a name" />
                            </motion.div>
                            <motion.div variants={staggerItem}>
                                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                                    Link
                                </label>
                                <Input ref={linkRef} placeholder="Paste a URL" onChange={handleLinkChange} />
                            </motion.div>

                            <motion.div variants={staggerItem} className="flex flex-col gap-2">
                                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Type
                                </label>
                                <select
                                    className="w-full rounded-md border border-border bg-background/50 p-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#d4a053]/40 focus:border-[#d4a053]/40 transition-all"
                                    value={type}
                                    onChange={(e) => setType(e.target.value as ContentType)}
                                >
                                    <option value={ContentType.Youtube}>Youtube</option>
                                    <option value={ContentType.Twitter}>Twitter</option>
                                </select>
                            </motion.div>

                            <motion.div variants={staggerItem} className="flex justify-end mt-2">
                                <Button
                                    onClick={addContent}
                                    variant="default"
                                    disabled={loading}
                                    className="text-sm"
                                >
                                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Save to Brain
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
