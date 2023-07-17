import React from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex sm:justify-center space-x-4"></div>

      <h1 className="flex place-content-center text-3xl text-maingreen font-bold m-10 ">
        WELCOME TO LIL'BITS
      </h1>

      <div className=" bg-maingreen height-50% mt-10">
        <div className="flex place-content-center">
          <Image src="/img2.jpg" width={500} height={500} alt="logo" />
        </div>
      </div>

      <div className="flex sm: justify-center mt-5 ">
        {" "}
        <label for="email">Enter your email:</label>
        <input
          type="email"
          id="email"
          pattern=".+@globex\.com"
          size="30"
          required
        ></input>
      </div>
      <div className="flex place-content-center">
        <button class="rounded-md bg-maingreen/20 hover:bg-maingreen">
          Confirm
        </button>
      </div>
    </main>
  );
}
