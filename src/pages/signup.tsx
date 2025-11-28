import React, { useRef, useState } from "react";
import axios from "axios";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/button";

const SignUp = () => {
  const usernameref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const username = usernameref.current?.value;
    const password = passwordref.current?.value;

    try {
      setError(null);
      setSuccess(false);
      // Replace /api/signup with your actual backend endpoint
      const res = await axios.post("http://localhost:3000/api/v1/signup", { username, password });
      if (res.status === 201 || (res.data as any).success) {
        setSuccess(true);
      } else {
        setError("Failed to create account. Please try again.");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create account.");
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-72 bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center border-2 border-black">
        <form onSubmit={handleSignUp} className="flex flex-col gap-4 w-full items-center">
          <InputBox placeholder="Username" reference={usernameref} />
          <InputBox placeholder="Password" reference={passwordref} />
          <Button variant="primary" text="Sign Up" />
        </form>
        {error && <div className="text-red-500 mt-2">{error}</div>}
        {success && <div className="text-green-500 mt-2">Account created successfully!</div>}
      </div>
    </div>
  );
};

export default SignUp;
