import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import "animate.css";
export default function Home() {
  const [toggleForm, setToggleForm] = useState(true);
  return (
    <main
      className={`flex h-screen w-full flex-col overflow-y-auto overflow-x-hidden bg-secondaryColor transition-all duration-100 lg:flex-row`}
    >
      <section className="animate__animated animate__slideInLeft animate__fast flex w-full flex-col items-center justify-center pt-4 lg:h-screen">
        <section className="flex flex-col items-center sm:flex-row">
          <h1 className="font-bold [font-size:_clamp(2em,4vw,10em)]">
            Welcome to
          </h1>
          <img
            src="/MyTalkLogo.png"
            alt="MytalkLogo"
            className="h-14 transition-all duration-300 ease-linear hover:drop-shadow-[0px_0px_30px_#2363e3b8] md:h-24 lg:block"
          />
        </section>
        <img
          src="/background-hero.png"
          alt="MytalkLogo"
          className="h-20 transition-all ease-linear hover:drop-shadow-[0px_0px_30px_#2363e3b8] md:h-40 lg:block lg:h-auto"
        />
        <h2 className="self-center font-semibold text-black [font-size:_clamp(2em,3vw,8em)]">
          Your{" "}
          <span className="text-primaryColor hover:drop-shadow-[0px_0px_30px_#2363e3b8]">
            Chat
          </span>{" "}
          simplified
        </h2>
      </section>
      <section className="animate__animated animate__slideInRight animate__fast flex h-screen w-full flex-col items-center bg-secondaryColor lg:justify-center">
        {toggleForm ? (
          <Login toggleForm={toggleForm} setToggleForm={setToggleForm} />
        ) : (
          <Signup toggleForm={toggleForm} setToggleForm={setToggleForm} />
        )}
      </section>
    </main>
  );
}
