import { Link } from "react-router-dom";
import { useState } from "react";
import CommonForm from "@/components/common/Form";
import { loginFormControls } from "@/config";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/auth-slice";

const initialState = {
  username: "",
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch()

  function onSubmit(event) {
    event.preventDefault();
    dispatch(loginUser(formData)).then((data)=>{
      
    })

  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Login to your account
        </h1>
        <p className="mt-2">
          Don&apos;t have an account?{" "}
          <Link
            className="font-medium text-primary hover:underline"
            to="/auth/register"
          >
            SignUp
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Login"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;
