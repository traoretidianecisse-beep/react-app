"use client";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, SyntheticEvent, useState } from "react";


export default function form() {
 const [user, setUser] = useState({
  email: "",
  password: "",
  remember: false,
  
});

const [isTrue, setIsTrue] = useState(false);



const handleSubmit =(e: any) =>{
console.log(user)
  e.preventDefault();  
   localStorage.setItem('formData',  JSON.stringify(user))
setIsTrue(true) 
 setTimeout(() => {
      setIsTrue(false)
    }, 5000); 
    
    setUser({
  email: "",
  password: "",
  remember: false,
  
});
  } 

const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  const { name, value, type, checked } = event.target;

  setUser((prevalue) => {
    return {
      ...prevalue,
      [name]: type === "checkbox" ? checked : value,
    };
  });
};

    return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
  <div className="flex flex-row">
        <Link href="/" type="button" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none mr-2">dashboard</Link>
      <Link href="/about" type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none  mr-2">about</Link>
      <Link href="/form" type="button" className="text-white  bg-success box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none mr-2 ">form</Link>
      <Link href="/table" type="button" className="text-white bg-danger box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none mr-2">table</Link>
      <Link href="/about" type="button" className="text-white bg-warning box-border border border-transparent hover:bg-warning-strong focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none  mr-2">about</Link>
      </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          
          
<form className="max-w-sm mx-auto">
  <div className="mb-5">
    <label  className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
    <input type="email" id="email" onChange={handleChange} name="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label  className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
    <input type="password" id="password" onChange={handleChange} name="password"  className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
  </div>
  <label  className="flex items-center mb-5">
    <input id="remember" type="checkbox" name="remember"  onChange={handleChange}
     className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />
    <p className="ms-2 text-sm font-medium text-heading select-none">I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.</p>
  </label>
  <button type="submit"  className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={handleSubmit}>Submit</button>

  
</form>
{isTrue  && <div id="toast-top-left" className="fixed flex items-center w-full max-w-xs p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default top-5 start-5" role="alert">
    <div className="text-sm font-normal">Top left positioning.</div>
</div>}

         
        </div>
        
      </main>
    </div>
  );
}
