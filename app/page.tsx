'use client'
import Image from "next/image";
import AuthForm from "@/app/login/page";
import Button from "@/components/login-register-page-components/Buttons/Button";
import Link from "next/link";

export default function Home() {
  return (

    <div className="flex items-center justify-center h-screen px-6">
       <Link className="px-6" href={"/login"}><Button>Login Page</Button></Link>
       <Link className="px-6" href={"/register"}><Button> Register Page</Button></Link>
    </div>
    
  );
}
