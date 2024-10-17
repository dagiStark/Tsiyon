import { Link } from "react-router-dom";
import { useState } from "react";
import CommonForm from "@/components/common/Form";
import { registerFormControls } from "@/config";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);

  function onSubmit () {
    // Here you can call your API to register the user
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create account
        </h1>
        <p className="mt-2">
          Already have an account?{" "}
          <Link
            className="font-medium text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"SignUp"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthRegister;