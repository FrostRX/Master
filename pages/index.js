import Head from "next/head";
import Link from "next/link";
import { Config } from "../config/config";

export default function Home() {
   return (
      <>
         <Head>
            <title>Master +</title>
            <meta
               name="description"
               content="Master Plus is a moderation bot for discord"
            />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main>
            <div className="hero w-full h-screen absolute inset-0 -z-10 ">
               <div className="absolute inset-0  flex justify-center items-center flex-col gap-5">
                  <img
                     className="rounded-full w-[180px]"
                     src="https://disforge.com/assets/img/bot_icons/914978756077187153.png?t=0fc17b82068c66f11f06527d8b54c4a0"
                     alt="MasterPlus Logo"
                  />
                  <h1 className="text-5xl text-white uppercase font-bold flex flex-col gap-2 items-center justify-center">
                     Master +{" "}
                     <p className="text-2xl font-normal">
                        {Config.botDescription}
                     </p>
                     <Link
                        className="text-2xl font-normal bg-[#404EED] px-5 py-2 rounded-full mt-5"
                        href={Config.inviteBot}
                     >
                        INVITE MASTER+
                     </Link>
                  </h1>
               </div>
            </div>
         </main>
      </>
   );
}
