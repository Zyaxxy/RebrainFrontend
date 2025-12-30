import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth";
import { auth } from "@/services/api";
import { Loader2 } from "lucide-react";
import Beams from "@/components/ui/Beams";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem, shakeVariants } from "@/lib/animation-variants";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const data = await auth.signIn(username, password) as any;

      if (data.token) {
        localStorage.setItem("token", data.token);
        login(); // Update auth store
        navigate("/"); // Redirect to dashboard
      } else {
        setError("Sign in failed. Check your credentials.");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Sign in failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-background">
      {/* Background layer */}
      <Beams
        beamWidth={2}
        beamHeight={15}
        beamNumber={12}
        lightColor="#ffffff"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={0}
      />

      {/* Content layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 flex items-center justify-center z-10"
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
            Sign In
          </motion.h2>
          <form className="flex flex-col gap-4 w-full items-center" onSubmit={handleSignIn}>
            <motion.div variants={staggerItem} className="w-full">
              <Input
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full"
              />
            </motion.div>
            <motion.div variants={staggerItem} className="w-full">
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full"
              />
            </motion.div>
            <motion.div variants={staggerItem} className="w-full">
              <Button variant="default" size="default" disabled={loading} className="w-full">
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Sign In
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
            Don't have an account? <Link to="/signup" className="text-primary hover:underline">Sign Up</Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignIn;
