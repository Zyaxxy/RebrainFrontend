
import { InputBox } from "../components/InputBox";
import { Button } from "../components/button";

const SignIn = () => {

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-72 bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
        <InputBox placeholder="Username" />
        <InputBox  placeholder="Password" />
        <Button variant="primary" text="Sign In" size="lg"/>
      </div>
    </div>
  );
};

export default SignIn;
