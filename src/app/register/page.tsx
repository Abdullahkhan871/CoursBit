"use client";
import { useState } from 'react';
import { Eye, EyeClosed } from 'phosphor-react';
import Image from 'next/image';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt:', { email, password });
    };

    const handleGoogleSignIn = () => {
        // Handle Google sign in
        console.log('Google sign in');
    };

    const handleFacebookSignIn = () => {
        // Handle Facebook sign in
        console.log('Facebook sign in');
    };

    return (
        <div className="min-h-screen flex">
            {/* Left side - Hero Section (hidden on mobile) */}
            <div className="hidden lg:flex lg:w-1/2 relative">
                <div className="absolute inset-0">
                    <Image
                        src="/loginBackground.jpg"
                        alt="login bg image"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4039FA] to-transparent"></div>
                </div>

                <div className="relative w-full z-10 flex flex-col justify-end px-10 pb-20 text-white">
                    {/* Logo */}
                    <div className="flex items-center gap-4 mb-12">
                        <Image
                            src="/favicon.ico"
                            alt='company logo'
                            width={40}
                            height={40}
                        />
                        <span className="text-2xl font-bold">CoursBit</span>
                    </div>

                    {/* Hero Content */}
                    <div className="max-w-md">
                        <h1 className="text-5xl font-medium leading-tight mb-6">
                            Improve your skill with CoursBit!
                        </h1>
                        <p className="text-base text-white leading-relaxed">
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                            quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right side - Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:py-12 lg:py-16 xl:py-20 py-6 sm:px-12 lg:px-16 xl:px-20">
                <div className="w-full max-w-md mx-auto lg:mx-0">
                    {/* Mobile Logo */}
                    <div className="flex items-center gap-2  mb-4 lg:hidden">
                        <Image
                            src="/favicon.ico"
                            alt='company logo'
                            width={40}
                            height={40}
                        />
                        <span className="text-xl font-bold text-gray-900">CoursBit</span>
                    </div>
                    {/* Header */}
                    <div className="mb-4 text-xs  sm:text-base">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
                        <p className="text-gray-600">
                            New user?{' '}
                            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                                Create an account
                            </a>
                        </p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"
                                    placeholder="Input your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? (
                                        <EyeClosed size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="text-left">
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                                Forgot password?
                            </a>
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-4 sm:my-4 flex items-center">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="px-4 text-sm text-gray-500">or</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="space-y-2 sm:space-y-3">
                        <button
                            onClick={handleGoogleSignIn}
                            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span className="text-gray-700 font-medium">Sign In With Google</span>
                        </button>

                        <button
                            onClick={handleFacebookSignIn}
                            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-3" fill="#1877F2" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            <span className="text-gray-700 font-medium">Sign In With Facebook</span>
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 text-xs text-gray-400 text-center">
                        Protected by reCAPTCHA and subject to the Google{' '}
                        <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                        {' '}and{' '}
                        <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>.
                    </div>
                </div>
            </div>
        </div>
    );
}