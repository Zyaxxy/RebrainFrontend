import { useState } from "react";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/button";
import axios from "axios";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/signin",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );

      // Assuming backend sends the token in res.data.token
      if (res.status === 200 && (res.data as any).token) {
        // Store token in localStorage
        localStorage.setItem("token", (res.data as any).token);

        // Set default Authorization header for all axios requests
        axios.defaults.headers.common["Authorization"] = `Bearer ${(res.data as any).token}`;

        setSuccess(true);
        // Optionally redirect or update state/UI
      } else {
        setError("Sign in failed. Check your credentials.");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Sign in failed.");
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-72 bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
        <form className="flex flex-col gap-4 w-full items-center" onSubmit={handleSignIn}>
          <InputBox
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <InputBox
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button variant="primary" text="Sign In" size="lg" />
        </form>
        {error && <div className="text-red-500 mt-2">{error}</div>}
        {success && <div className="text-green-500 mt-2">Signed in successfully!</div>}
      </div>
    </div>
  );
};

export default SignIn;
