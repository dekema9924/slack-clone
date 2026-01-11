import Link from "next/link"


export default function SignUpPage() {
    return (
        <>
            <form className="min-h-screen bg-linear-to-br from-purple-900 via-indigo-900 to-purple-800 flex items-center justify-center p-6 gap-8" action="">
                <div className="bg-[#36393F] rounded-lg p-8 w-full max-w-md shadow-2xl">
                    <div className="text-center mb-6">
                        <h1 className="text-white text-2xl font-bold">Create an account</h1>
                    </div>

                    <div className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="block text-gray-300 text-xs font-semibold mb-2 uppercase">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                className="w-full bg-[#202225] border-none rounded px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Display Name */}
                        <div>
                            <label className="block text-gray-300 text-xs font-semibold mb-2 uppercase">
                                Display Name
                            </label>
                            <input
                                type="text"
                                className="w-full bg-[#202225] border-none rounded px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Username */}
                        <div>
                            <label className="block text-gray-300 text-xs font-semibold mb-2 uppercase">
                                Username <span className="text-red-500">*</span>
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
                        </div>

                        {/* Date of Birth */}
                        <div>
                            <label className="block text-gray-300 text-xs font-semibold mb-2 uppercase">
                                Date of Birth <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                <select className="bg-[#202225] border-none rounded px-3 py-2.5 text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
                                    <option>Month</option>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                                <select className="bg-[#202225] border-none rounded px-3 py-2.5 text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
                                    <option>Day</option>
                                    {[...Array(31)].map((_, i) => (
                                        <option key={i + 1}>{i + 1}</option>
                                    ))}
                                </select>
                                <select className="bg-[#202225] border-none rounded px-3 py-2.5 text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
                                    <option>Year</option>
                                    {[...Array(100)].map((_, i) => (
                                        <option key={2024 - i}>{2024 - i}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Terms */}
                        <p className="text-gray-400 text-xs leading-relaxed">
                            By clicking "Create Account," you agree to Discord's{' '}
                            <button className="text-blue-400 hover:underline">
                                Terms of Service
                            </button>{' '}
                            and have read the{' '}
                            <button className="text-blue-400 hover:underline">
                                Privacy Policy
                            </button>
                        </p>

                        {/* Submit Button */}
                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded transition-colors">
                            Create Account
                        </button>

                        {/* Login Link */}
                        <Link href={'/auth/sign-in'} className="text-blue-400 text-sm hover:underline w-full text-left">
                            Already have an account? Log in
                        </Link>
                    </div>
                </div>
            </form>

        </>
    )
}
