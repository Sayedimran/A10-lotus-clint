import { useContext,} from "react";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
 
  const navigate = useNavigate();
  const { setUser, userLogin, googleSignIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    userLogin(email, password)
      .then((result) => {
        // Signed in
        
        const user = result.user;
        navigate('/')
        setUser(user)
       
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
      });
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className=" text-center text-2xl font-bold mb-4">Login Now</h2>
          <form onSubmit={handleLogin}>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered rounded-xl "
                autoComplete="password"
              />
            </div>
            <div className=" flex justify-center form-control mt-6">
              <button className="btn btn-primary rounded-xl bg-fuchsia-600 text-black w-full">
                Login
              </button>
            </div>
            {/* Google Sign-In Button */}
            <div className="form-control">
              <a
                onClick={googleSignIn}
                className="btn my-2 rounded-xl w-full flex items-center justify-center"
              >
                <img
                  src="https://i.imghippo.com/files/kM5218vFM.png"
                  alt="Google Logo"
                  className="w-5 h-5 mr-2"
                />
                Continue with Google
              </a>
            </div>
          </form>
          <div className="mt-4 text-center">
            <a className="link text-fuchsia-700 font-semibold">
              Forgot password?
            </a>
          </div>
          <div className="mt-2 text-center">
            <span>Don't have an account? </span>
            <Link to="/register" className=" text-red-600 font-semibold">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
