
'use client'
import { signIn } from '@/lib/server/actions/authAction'
import { CircleAlert } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'



type UserInputs = {
    email: string
    password: string
}


function SignInpage() {
    const [err, setErr] = useState("")
    const router = useRouter()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<UserInputs>()

    const onSubmit: SubmitHandler<UserInputs> = async (data) => {
        try {
            const res = await signIn(data.email, data.password)
            if (res.token && res.url) {
                router.push(res.url)
                toast.success("sign in successful")
            }

        } catch (err: any) {
            console.error(err.message)
            toast.error(err.message)
            setErr(err.message)
        }
    }


    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen bg-linear-to-br from-purple-900 via-indigo-900 to-purple-800 flex items-center justify-center p-6 gap-8" action="">
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
                                required
                                {...register("email", { required: "email is required" })}
                                type="text"
                                className="w-full bg-[#202225] border-none rounded px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            {
                                err && (
                                    <span className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                        <CircleAlert className="w-4 h-4" />
                                        {err}
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
                                required
                                {...register("password", { required: "password is required" })}
                                type="password"
                                className="w-full bg-[#202225] border-none rounded px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <div className='flex items-center justify-between'>

                                <button className="text-blue-400 text-sm hover:underline mt-1">
                                    Forgot your password?
                                </button>

                            </div>
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