import Link from "next/link";
import { Config } from "../config/config";
export default function commands() {
   return (
      <>
         <div className="w-full min-h-screen absolute inset-0 -z-10 ">
            <div className="absolute left-0 right-0 top-[160px] flex justify-center items-center flex-col gap-5">
               <div className="flex flex-col gap-5 w-[1400px]">
                  {Config.examplesCommands.map((cmd) => (
                     <div
                        className="bg-[#141516] p-5 rounded-xl text-white"
                        key={cmd._id}
                     >
                        <h1 className="uppercase">
                           {cmd.name} - {cmd.description}
                        </h1>
                        <span className="text-gray-500">Usage: {cmd.use}</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}
