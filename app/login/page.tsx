'use client'
import { useCallback, useState } from "react"
import Input from "../../components/login-register-page-components/inputs/Input"
import Button from "../../components/login-register-page-components/Buttons/Button"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import CommonLayout from "../../components/login-register-page-components/common-component-login-register"
import Link from "next/link"

type Variant = 'LOGIN' | 'REGISTER'
export default function AuthForm() {

    const [variant, setVariant] = useState<Variant>('LOGIN')
    const passwordPattern: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (variant == "REGISTER") {
            console.log("Register")
        }
        if (variant == "LOGIN") {
            console.log("Login")
        }
    }
    const toggleVariant = useCallback(() => {
        if (variant == 'LOGIN') {
            setVariant('REGISTER')
        } else {
            setVariant('LOGIN')
        }
        console.log(variant)
    }, [variant])

    return (
        <CommonLayout>
            <h2 className="mt-6 text-center text-4xl font-bold">
                Sign in your account
            </h2>
            <div className="mt-10 mx-auto w-full max-w-md">
                <div className="bg-slate-100  shadow-xl rounded-xl px-10 py-6">
                    <form className="space-y-5">
                        <div className="space-y-5">
                            <Input id="name" label="User Name"
                                errors={errors} message="" register={register}
                                required={true} type="text" />
                            <Input id="password" label="Password"
                                errors={errors} register={register}
                                required={true} message="" type="password" />

                            <div className="flex justify-center pb-5 border-b border-gray-500">
                                <Button fullWidth={true} type="submit">
                                    Log in
                                </Button>
                            </div>
                        </div>

                        <div className="flex gap-3 justify-around text-sm mt-8">
                            <div>
                                {variant == 'LOGIN' ? 'New to Messanger? ' : ''}
                            </div>
                            <div className='cursor-point underline' >
                                <Link href={"/register"}>
                                    Create an Account
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </CommonLayout>
    )
}