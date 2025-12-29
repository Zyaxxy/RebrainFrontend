import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "@/services/api";
import { Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem, shakeVariants } from "@/lib/animation-variants";

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
      // Assuming successful signup doesn't automatically login, redirect to signin
      navigate("/signin");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-screen w-screen bg-background flex flex-col items-center justify-center"
    >
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="w-80 bg-card rounded-lg shadow-md p-8 flex flex-col items-center justify-center border border-border"
      >
        <motion.h2
          variants={staggerItem}
          className="text-2xl font-bold mb-6 text-card-foreground"
        >
          Sign Up
        </motion.h2>
        <form onSubmit={handleSignUp} className="flex flex-col gap-4 w-full items-center">
          <motion.div variants={staggerItem} className="w-full">
            <Input placeholder="Username" ref={usernameref} className="w-full" />
          </motion.div>
          <motion.div variants={staggerItem} className="w-full">
            <Input placeholder="Password" ref={passwordref} className="w-full" type="password" />
          </motion.div>
          <motion.div variants={staggerItem} className="w-full">
            <Button variant="default" size="default" disabled={loading} className="w-full">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign Up
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
              className="text-destructive mt-2 text-sm"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          variants={staggerItem}
          className="mt-4 text-sm text-muted-foreground"
        >
          Already have an account? <Link to="/signin" className="text-primary hover:underline">Sign In</Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SignUp;
