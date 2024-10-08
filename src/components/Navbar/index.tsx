import Image from "next/image";
import * as React from "react";
import {  buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../theme/button";

function NavBar() {
  return (
    <div className="flex gap-5 h-[3.5rem] justify-between items-center px-7 py-1 font-bold border-b border-solid border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5 sticky top-0 left-0 right-0 backdrop-blur-lg">
      <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
        <Image
          src="/images/logo.png"
          alt="LOGO"
          sizes="100vw"
          style={{
            width: "100px",
            height: "auto",
          }}
          width={0}
          height={0}
        />
      </div>
      <ul className="gap-5 justify-between self-stretch my-auto text-sm leading-5  max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
        <li className="cursor-pointer hover:text-orange">Home</li>
        <li className="cursor-pointer hover:text-orange">Pricing</li>
        <li className="cursor-pointer hover:text-orange">News Room</li>
        <li className="cursor-pointer hover:text-orange">Features</li>
        <li className="cursor-pointer hover:text-orange">Contact us</li>
      </ul>
      <Link
        href="/dashboard"
        className={cn(
          buttonVariants(),
          "bg-orange px-4 py-2 rounded-sm text-white border hover:bg-white hover:text-orange hover:border-zinc-900 transition-all"
        )}
      >
        Free Trial
      </Link>
      <ModeToggle/>
    </div>
  );
}

export default NavBar;
