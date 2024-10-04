import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProviders";

const Register = () => {
  const { createUser, setName, setPhoto, user } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Nope",
        text: "Your password should be strong",
        footer: "Must have UpperCase,LowerCase and Not less than 6 character",
      });
    }
    // new User
    const newUser = {
      name,
      email,
      password,
      photo,
    };

    //  create your account
    createUser(email, password, photo, name)
      .then((result) => {
        // new user has been created here we will send it to DB

        // setName(user.displayName);
        // setPhoto(user.photoURL);

        fetch("https://tourism-hub-server.vercel.app/user", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              icon: "success",
              title: "Created",
              text: "New User Created",
            });
            // set the user image and photo
          });
        form.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Something went Wrong ${error.message}`,
        });
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="photo"
                  className="input input-bordered"
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
                <label className="label">
                  <h2>
                    Already Have an Account?{" "}
                    <Link className="btn btn-link btn-sm" to="/login">
                      Login
                    </Link>{" "}
                    here{" "}
                  </h2>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
