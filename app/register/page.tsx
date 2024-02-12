'use client'
import React, { useState } from 'react'
import Input from "../../components/login-register-page-components/inputs/Input"
import Button from "../../components/login-register-page-components/Buttons/Button"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import CommonLayout from '@/components/login-register-page-components/common-component-login-register'
import Link from 'next/link'
// import {eMailPattern,passwordPattern} from '../../public/validation/validationValues'

function Register() {
    const name: RegExp = new RegExp('');
    const passwordConfirm: RegExp = new RegExp('');
    const eMailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordPattern: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
    const phoneNumberPattern = /^(\+\d{1,2}\s?)?(\(\d{1,4}\)|\d{1,4})[-.\s]?\d{1,4}[-.\s]?\d{1,7}$/;
    const [isLoading, setIsLoading] = useState(false);
    const [validationOn, setValidationOn] = useState(false)
    const handleClick = () => {
        setValidationOn(true)
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>()
    interface IFormInputs {
        name: string
        email: string
        phone: number
        password: string
        passwordConfirm: string
    }
    const onSubmit: SubmitHandler<FieldValues> = data => console.log(data);

    return (
        <CommonLayout>
            <h2 className="mt-6 text-center text-4xl font-bold">
                Sign up
            </h2>
            <div className="mt-10 mx-auto w-full max-w-md">
                <div className="bg-slate-100  shadow-xl rounded-xl px-10 py-6">
                    <form className="" onSubmit={handleSubmit(onSubmit)} >
                        <div className="space-y-5 border-b border-gray-500">
                            <Input id="name" label="User Name"
                                errors={errors} register={register}
                                required={true} pattern={name} message="Please enter a valid Username" disabled={isLoading} type="text" />
                            <Input id="email" label="E-Mail"
                                errors={errors} register={register}
                                required={true} pattern={eMailPattern} message="Please Enter a Valid E-mail" disabled={isLoading} type="text" />
                            <Input id="phone" label="Phone Number"
                                errors={errors} register={register}
                                required={true} pattern={phoneNumberPattern} message="Please enter a phone number " disabled={isLoading} type="number" />
                            <Input id="password" label="Password"
                                errors={errors} register={register}
                                required={true} pattern={passwordPattern} message="Password should contain at least 1 capital letter, 1 number and 1 lower letter." disabled={isLoading} type="password" />
                            
                            <div className="flex justify-center pb-5">
                                <Button disabled={isLoading} onClick={handleClick} type={"submit"} fullWidth={true}>
                                    Register
                                </Button>
                            </div>
                        </div >
                        <div className="flex gap-3 justify-around text-sm mt-8">
                            <Link href={"/login"} className='cursor-point underline'>
                                Already have an Account?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </CommonLayout>
    )
}

export default Register