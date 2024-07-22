'use client'
import React from "react";
import { Meteors } from "@/components/ui/meteors";
//import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea"
import {cn} from "@/utils/cn"
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

function Page() {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="relative w-full h-full z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full w-full overflow-hidden rounded-2xl flex flex-col justify-end items-start min-h-screen">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
          
 
          
<div className="absolute top-[120px] z-10 w-full text-center p-4">
            <h1
            className="mt-4 md:mt-0 text-4xl md:text-5xl font-bold bg-clip-text text-transparent 
            bg-gradient-to-b from-neutral-50
             to-neutral-400"
            >Contact Us</h1>
            <p
            className="mt-4 font-normal text-base md:text-sm text-neutral-400 max-w-lg mx-auto"
            >We are here to help with any questions about our courses, programs, or
            events. Reach out and let us know how we can assist you in your musical
            journey.</p>
     
            <form className="my-8">
        <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-2 mb-4 ml-[20rem]">
          
          <LabelInputContainer className="w-full max-w-2xl mb-4" >
          
          <Input id="email" placeholder="Your Email Address" type="email" />
        </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4 w-full max-w-2xl  ml-[20rem]">
          
          <Textarea id="text" placeholder="Your message" />
          
        </LabelInputContainer>
        
        
        </form>


<button className="   border px-4 py-1 rounded-lg bg-sky-400 text-white border-sky-400">
   
            Send Message
          </button>
</div>
          {/* Meaty part - Meteor effect */}
          <Meteors number={200} />
        </div>
      </div>
    </div>
  );
}

export default Page;
