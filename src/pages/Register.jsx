import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
  const navigate = useNavigate();
  const [errors, setError] = useState("");
  const { creatNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const handleRegister = e => {
    e.preventDefault();
    
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

     if (password.length < 6) {
       setError("Password must be at least 6 characters!");
     } else if (!/[A-Z]/.test(password)) {
       setError("Must have at least one uppercase letter!");
       return;
     } else if (!/[a-z]/.test(password)) {
       setError("Must have at least one lowercase letter!");
       return;
     }

    console.log(name ,email ,photo ,password);
    creatNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
        // save new user info to the database 
        const createdAt = result?.user?.metadata?.creationTime;
        const newUser = { name, email ,createdAt }
        fetch("http://localhost:5000/users", {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("User created to db", data);
          });

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
             Swal.fire({
               position: "center",
               icon: "success",
               title: "Register Sucsessfully",
               showConfirmButton: false,
               timer: 700,
             }).then(() => {
               navigate("/"); // Navigate only after the alert disappears
             });
          })
          .catch(err => {
           console.log(err);
           
        })
        console.log(user);
      })
      .catch((error) => {
        
        Swal.fire({
                  position: "center",
                  icon: "error",
                  title: error.code,
                  showConfirmButton: false,
                  timer: 1000,
                });
        
        setError(...errors, error.code,);
        
        // ..
      });

     
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold mb-4">Register Now!</h2>
          {errors && <p className="text-center text-red-500">{errors}</p> }
          <form onSubmit={handleRegister}>
            {/* Full Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered rounded-xl"
                required
                autoComplete="name"
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered rounded-xl"
                
                autoComplete="email"
              />
            </div>

            {/* Photo URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Enter your photo URL"
                className="input input-bordered rounded-xl"
                autoComplete="off"
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered rounded-xl"
                required
                autoComplete="new-password"
              />
            </div>

            {/* Register Button */}
            <div className="flex justify-center form-control mt-6">
              <button className="btn btn-primary rounded-xl bg-amber-500 text-black w-full">
                Register
              </button>
            </div>
          </form>

          {/* Already have an account? */}
          <div className="text-center mt-4">
            <p className="text-sm">
              Already have an account?{" "}
              <NavLink to="/login" className="link text-red-600 font-semibold">
                Login here
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
