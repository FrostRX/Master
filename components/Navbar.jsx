import Link from "next/link";
import { navbarConfig } from "../config/mainConfig";

export default function Navbar() {
   return (
      <div>
         <nav className="flex justify-center p-5 rounded-2xl items-center">
            <ul className="text-white flex gap-5 md:gap-[180px] text-xl">
               {navbarConfig.map((nav) => (
                  <Link
                     className="border-b-4 border-blue-700"
                     href={nav.link}
                     key={nav._id}
                  >
                     {nav.name}
                  </Link>
               ))}
            </ul>
         </nav>
      </div>
   );
}
