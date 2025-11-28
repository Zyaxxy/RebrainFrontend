import React, { useRef, useState } from "react";
import axios from "axios";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/button";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const usernameref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const username = usernameref.current?.value;
    const password = passwordref.current?.value;

    try {
      setError(null);
      const res = await axios.post("http://localhost:3000/api/v1/signup", { username, password });
      if (res.status === 201 || (res.data as any).success) {
        navigate("/signin");
      } else {
        setError("Failed to create account. Please try again.");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create account.");
    }
  };

  return (
    <div className="h-screen w-screen bg-background flex flex-col items-center justify-center">
      <div className="w-80 bg-card rounded-lg shadow-md p-8 flex flex-col items-center justify-center border border-border">
        <h2 className="text-2xl font-bold mb-6 text-card-foreground">Sign Up</h2>
        <form onSubmit={handleSignUp} className="flex flex-col gap-4 w-full items-center">
          <InputBox placeholder="Username" reference={usernameref} className="w-full" />
          <InputBox placeholder="Password" reference={passwordref} className="w-full" type="password" />
          <Button variant="primary" text="Sign Up" size="md" />
        </form>
        {error && <div className="text-destructive mt-2 text-sm">{error}</div>}
        <div className="mt-4 text-sm text-muted-foreground">
          Already have an account? <Link to="/signin" className="text-primary hover:underline">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
