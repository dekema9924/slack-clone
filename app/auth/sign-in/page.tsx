

import Link from 'next/link'

function SignInpage() {
    return (
        <>

            <form className="min-h-screen bg-linear-to-br from-purple-900 via-indigo-900 to-purple-800 flex items-center justify-center p-6 gap-8" action="">
                <div className="bg-[#36393F] rounded-lg p-8 w-full max-w-md shadow-2xl">
                    <div className="text-center mb-6">
                        <h1 className="text-white text-2xl font-bold mb-2">Welcome back!</h1>
                        <p className="text-gray-400 text-sm">We're so excited to see you again!</p>
                    </div>

                    <div className="space-y-4">
                        {/* Email or Phone */}
                        <div>
                            <label className="block text-gray-300 text-xs font-semibold mb-2 uppercase">
                                Email or Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                className="w-full bg-[#202225] border-none rounded px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-gray-300 text-xs font-semibold mb-2 uppercase">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                className="w-full bg-[#202225] border-none rounded px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button className="text-blue-400 text-sm hover:underline mt-1">
                                Forgot your password?
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded transition-colors">
                            Log In
                        </button>

                        {/* Register Link */}
                        <p className="text-gray-400 text-sm">
                            Need an account?{' '}
                            <Link href={'/auth/sign-up'} className="text-blue-400 hover:underline">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </form>


        </>
    )
}

export default SignInpage