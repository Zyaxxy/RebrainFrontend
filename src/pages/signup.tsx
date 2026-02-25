import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "@/services/api";
import { Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  shakeVariants,
  slideInLeft,
  slideInRight,
} from "@/lib/animation-variants";
import { ThemeToggle } from "@/components/ThemeToggle";

const SignUp = () => {
  const usernameref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const username = usernameref.current?.value;
    const password = passwordref.current?.value;

    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    setLoading(true);
    try {
      setError(null);
      await auth.signUp(username, password);
      navigate("/signin");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex bg-background">
      {/* Theme toggle */}
      <div className="fixed top-5 right-5 z-20">
        <ThemeToggle />
      </div>

      {/* ──────── Left: Branding Panel ──────── */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={slideInLeft}
        className="hidden lg:flex w-1/2 relative overflow-hidden items-center justify-center"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1408] via-[#0a0a0a] to-[#0d0d0d] dark:from-[#1a1408] dark:via-[#0a0a0a] dark:to-[#0d0d0d]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0e6] via-[#ede5d5] to-[#e8dcc8] dark:hidden" />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }} />

        {/* Gold accent line */}
        <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4a053]/30 to-transparent" />

        {/* Branding content */}
        <div className="relative z-10 px-16 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8">
              <div className="w-10 h-px bg-[#d4a053] mb-8" />
              <h1 className="font-display text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
                RE
                <span className="text-[#d4a053]">BRAIN</span>
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed font-body">
              Start building your personal knowledge vault.
              <br />
              <span className="text-[#d4a053]/70">Curate. Connect. Create.</span>
            </p>
          </motion.div>

          {/* Decorative dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex gap-2"
          >
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#d4a053]"
                style={{ opacity: 1 - i * 0.2 }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ──────── Right: Sign Up Form ──────── */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={slideInRight}
        className="flex-1 flex items-center justify-center px-6"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="w-full max-w-sm"
        >
          {/* Mobile branding */}
          <motion.div variants={staggerItem} className="lg:hidden mb-10">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
              RE<span className="text-[#d4a053]">BRAIN</span>
            </h1>
          </motion.div>

          <motion.div variants={staggerItem} className="mb-8">
            <h2 className="font-display text-3xl font-semibold text-foreground mb-2">
              Create account
            </h2>
            <p className="text-muted-foreground text-sm">
              Join and start curating your second brain
            </p>
          </motion.div>

          <form
            onSubmit={handleSignUp}
            className="flex flex-col gap-5 w-full"
          >
            <motion.div variants={staggerItem}>
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                Username
              </label>
              <Input
                placeholder="Choose a username"
                ref={usernameref}
                className="w-full"
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                Password
              </label>
              <Input
                placeholder="Create a password"
                ref={passwordref}
                className="w-full"
                type="password"
              />
            </motion.div>
            <motion.div variants={staggerItem} className="pt-2">
              <Button
                variant="default"
                size="default"
                disabled={loading}
                className="w-full h-11 text-sm font-medium tracking-wide"
              >
                {loading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Create Account
              </Button>
            </motion.div>
          </form>

          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial="initial"
                animate="shake"
                exit={{ opacity: 0 }}
                variants={shakeVariants}
                className="text-destructive mt-4 text-sm text-center"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            variants={staggerItem}
            className="mt-8 text-sm text-muted-foreground text-center"
          >
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-[#d4a053] hover:text-[#e8b86d] transition-colors"
            >
              Sign In
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignUp;
