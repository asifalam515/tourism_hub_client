import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Swal from "sweetalert2";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { loggedInUser, setPhoto, user, setName } = useContext(AuthContext);
  console.log("user is ", user);

  const navigate = useNavigate();
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // logged in success

        Swal.fire({
          icon: "success",
          title: "Logged In using Google",
          text: "Logged In Successfully",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Something went Wrong",
          text: `${error.message}`,
        });
      });
  };
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log("data from github", result);

        // logge in success
        Swal.fire({
          icon: "success",
          title: "Logged In using Github",
          text: "Logged In Successfully",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Something went Wrong",
          text: `${error.message}`,
        });
      });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // log in
    loggedInUser(email, password).then((result) => {
      console.log(result);
      // form.reset();
      // logged in
      Swal.fire({
        icon: "success",
        title: "Logged In",
        text: "Logged In Successfully",
      });
      navigate("/");
    });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content grid grid-rows-2">
          {/* text div */}
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          {/* form div */}
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <h1>
                  Do not have Account?Sign UP here{" "}
                  <Link className="btn btn-link" to="/register">
                    Register
                  </Link>{" "}
                </h1>
              </div>
            </form>
            {/* 
            login Using github and google
            */}
            <div className="flex justify-center items-center gap-10">
              <button onClick={handleGoogleLogin} className="btn ">
                <FaGoogle />
              </button>
              <button onClick={handleGithubLogin} className="btn ">
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
