import React, { useState } from "react";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";


const SignIn = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)






    return (
        <div className="flex-1 flex items-center justify-center bg-white">
            <div className="w-full max-w-md p-8 space-y-6">
                {/* Title */}
                <h2 className="text-3xl font-bold">Sign In</h2>
                <p className="text-sm">
                    New user?{" "}
                    <Link to="/sign-up" className="text-blue-600 underline">
                        Create an account
                    </Link>
                </p>

                {/* Form */}
                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium">Email Address</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 "
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <div className="relative mb-2">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Input your password"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 "
                            />
                            <span className="absolute inset-y-0 top-1 right-3 flex items-center cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <BiHide size={20} /> : <BiShow size={20} />}
                            </span>
                        </div>
                        <Link to="/forget-password" className="text-sm text-blue-600 underline">
                            Forgot password?
                        </Link>
                    </div>


                    <button
                        type="submit"
                        className=" w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold cursor-pointer"
                    >
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-2">
                    <hr className="flex-1 border-gray-300" />
                    <span className="text-sm text-gray-500">or</span>
                    <hr className="flex-1 border-gray-300" />
                </div>

                {/* Social Buttons */}
                <div className="space-y-3">
                    <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-full hover:bg-gray-50 cursor-pointer">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Sign In With Google
                    </button>

                    <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-full hover:bg-gray-50 cursor-pointer">
                        <img
                            src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                            alt="Facebook"
                            className="w-5 h-5"
                        />
                        Sign In With Facebook
                    </button>
                </div>

                {/* Footer */}
                <p className="text-xs text-gray-500">
                    Protected by reCAPTCHA and subject to the Google{" "}
                    <Link to="privacy-policy" className="text-blue-600 cursor-pointer hover:underline">
                        Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link to="terms-service" className="text-blue-600 cursor-pointer hover:underline">
                        Terms of Service
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default SignIn;