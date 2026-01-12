'use client'
import Link from "next/link"
import { CircleAlert } from 'lucide-react';
import { useForm, SubmitHandler } from "react-hook-form"


interface FormInterface {
    displayName: string
    email: string
    userName: string
    password: string
    birthMonth: string
    birthDay: string
    birthYear: string
}


export default function SignUpPage() {
    const { register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
    } = useForm<FormInterface>()

    const onSubmit: SubmitHandler<FormInterface> = (data) => {
        console.log(data)
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen bg-linear-to-br from-purple-900 via-indigo-900 to-purple-800 flex items-center justify-center p-6 gap-8" action="">
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
                                {...register("email", { required: "Email is required" })}
                                type="email"
                                className="w-full bg-[#202225] border-none rounded px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            {errors.email && (
                                <span className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                    <CircleAlert className="w-4 h-4" />
                                    {errors.email.message}
                                </span>
                            )}
                        </div>

                        {/* Display Name */}
                        <div>
                            <label className="block text-gray-300 text-xs font-semibold mb-2 uppercase">
                                Display Name
                            </label>
                            <input
                                {...register("displayName", {
                                    maxLength: {
                                        value: 10,
                                        message: "Cannot be more than 10 characters"
                                    },
                                    minLength: {
                                        value: 4,
                                        message: "display name too short"
                                    }
                                })}
                                type="text"
                                className="w-full bg-[#202225] border-none rounded px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            {
                                errors.displayName && (
                                    <span className="text-red-500 text-xs flex items-center gap-1">
                                        <CircleAlert className="text-sm w-4" />
                                        {errors.displayName.message}
                                    </span>

                                )
                            }

                        </div>

                        {/* Username */}
                        <div>
                            <label className="block text-gray-300 text-xs font-semibold mb-2 uppercase">
                                Username <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register('userName', { required: "username is required" })}
                                type="text"
                                className="w-full bg-[#202225] border-none rounded px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            {
                                errors.userName && (
                                    <span className="text-red-500 text-xs flex items-center gap-1">
                                        <CircleAlert className="text-sm w-4" />
                                        {errors.userName.message}
                                    </span>

                                )
                            }

                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-gray-300 text-xs font-semibold mb-2 uppercase">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
                                        message: "Password must contain at least one uppercase letter and one special character"
                                    }
                                })}
                                type="password"
                                className="w-full bg-[#202225] border-none rounded px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            {
                                errors.password && (
                                    <span className="text-red-500 text-xs flex items-center gap-1">
                                        <CircleAlert className="text-sm w-4" />
                                        {errors.password.message}
                                    </span>

                                )
                            }
                        </div>

                        {/* Date of Birth */}
                        <div>
                            <label className="block text-gray-300 text-xs font-semibold mb-2 uppercase">
                                Date of Birth <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                <select
                                    {...register("birthMonth", { required: "Month is required" })}
                                    className="bg-[#202225] border-none rounded px-3 py-2.5 text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="">Month</option>
                                    {[
                                        "January", "February", "March", "April", "May", "June",
                                        "July", "August", "September", "October", "November", "December"
                                    ].map(month => (
                                        <option key={month} value={month}>
                                            {month}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    {...register("birthDay", { required: "Day is required" })}
                                    className="bg-[#202225] border-none rounded px-3 py-2.5 text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="">Day</option>
                                    {[...Array(31)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    {...register("birthYear", { required: "Year is required" })}
                                    className="bg-[#202225] border-none rounded px-3 py-2.5 text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="">Year</option>
                                    {[...Array(100)].map((_, i) => (
                                        <option key={2024 - i} value={2024 - i}>
                                            {2024 - i}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {(errors.birthMonth || errors.birthDay || errors.birthYear) && (
                                <p className="text-red-500 text-xs mt-1">
                                    Please select a valid date
                                </p>
                            )}


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
