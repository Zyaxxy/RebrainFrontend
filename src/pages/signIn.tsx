import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth";
import { auth } from "@/services/api";
import { Loader2 } from "lucide-react";
import { Beams } from "@/components/ui/Beams";

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
    <div className="h-screen w-screen bg-neutral-950 relative flex flex-col items-center justify-center overflow-hidden">
      <Beams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="w-80 bg-card rounded-lg shadow-md p-8 flex flex-col items-center justify-center border border-border z-10 relative">
        <h2 className="text-2xl font-bold mb-6 text-card-foreground">Sign In</h2>
        <form className="flex flex-col gap-4 w-full items-center" onSubmit={handleSignIn}>
          <Input
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full"
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full"
          />
          <Button variant="default" size="default" disabled={loading} className="w-full">
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign In
          </Button>
        </form>
        {error && <div className="text-destructive mt-2 text-sm">{error}</div>}
        <div className="mt-4 text-sm text-muted-foreground">
          Don't have an account? <Link to="/signup" className="text-primary hover:underline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
