import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        console.log(form.get('password'))

        signIn(email, password)
            .then(() => {
                console.log("Singgggged In");

                navigate(location?.state ? location.state : '/')
            })
            .catch(() => {
                console.log("Something Error Happend");
            })
    }


    return ( 
                <div>
                    <Navbar></Navbar>
                    <h2 className="text-4xl text-center mt-24">Login Now</h2>
                    <div className="hero">
                        <form className="lg:w-1/2 md:3/4" onSubmit={handleLogin}>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                    <p className="text-center mt-5">Don't have an Account? <Link className="font-bold text-blue-600" to='/register'>Register Now</Link></p>
                </div>
     );
}
 
export default Login;