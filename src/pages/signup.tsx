
import { InputBox } from "../components/InputBox";
import { Button } from "../components/button";
import { useRef } from "react";
const SignUp = () => {
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const usernameref = useRef<HTMLInputElement>();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const passwordref = useRef<HTMLInputElement>();
function SignUp() {
    const username = usernameref.current?.value;
    const password = passwordref.current?.value;
}

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-72 bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center border-2 border-black">
        <InputBox placeholder="Username" reference={usernameref}/>
        <InputBox  placeholder="Password" reference={passwordref}/>
        <Button variant="primary" text="Sign Up" />
      </div>
    </div>
  );
};

export default SignUp;
