import { useState } from "react";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/signin",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 200 && (res.data as any).token) {
        localStorage.setItem("token", (res.data as any).token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${(res.data as any).token}`;
        login(); // Update auth store
        navigate("/"); // Redirect to dashboard
      } else {
        setError("Sign in failed. Check your credentials.");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Sign in failed.");
    }
  };

  return (
    <div className="h-screen w-screen bg-background flex flex-col items-center justify-center">
      <div className="w-80 bg-card rounded-lg shadow-md p-8 flex flex-col items-center justify-center border border-border">
        <h2 className="text-2xl font-bold mb-6 text-card-foreground">Sign In</h2>
        <form className="flex flex-col gap-4 w-full items-center" onSubmit={handleSignIn}>
          <InputBox
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full"
          />
          <InputBox
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full"
          />
          <Button variant="primary" text="Sign In" size="md" loading={false} />
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
