'use client'
import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"




function Header() {
  const activeLink = usePathname()

  return (
    <main className="flex flex-col overflow-x-hidden" >
      <section className="h-11 w-full bg-[#474747] gap-1 text-white flex justify-between px-8 items-center">
        <div className="mr-1 flex flex-col md:flex-row md:gap-2  text-[12px] md:text-sm lg:text-sm">
          <p>(414) 857 - 0107</p>
          <p>tehreemmeo818@gmail.com</p>
        </div>
        <div className="flex gap-1">
          <div className="rounded-full p-1 bg-[#5f5e5e]"><FaTwitter /> </div>
          <div className="rounded-full p-1 bg-[#5f5e5e]"> <FaFacebookF /></div>
          <div className="rounded-full p-1 bg-[#5f5e5e]" > <MdOutlineEmail /></div>
          <div className="rounded-full p-1 bg-[#5f5e5e]"> <FaGithub /></div>
        </div>
      </section>
      <section className="h-14 w-full flex justify-between text-[#474747]  items-center px-10" >
        <div className="flex items-center gap-2">
          <Image src={'/logo.png'} width={32} height={32} alt="logo" className="h-8 w-10" /><p className='text-2xl font-serif font-semibold mt-2'><i> Bistro Bliss </i></p>
        </div>

        <nav className="sm:hidden hidden lg:block md:block">
          <Link href={'/'} className={`mr-4 ${activeLink == "/" ? "bg-[#DBDFD0] py-1 px-3 rounded-full text-sm" : ""}`}>Home</Link>
          <Link href={'/about'} className={`mr-4 ${activeLink == "/about" ? "bg-[#DBDFD0] py-1 px-3  rounded-full text-sm" : ""}`} > About</Link>
          <Link href={'/menue'} className={`mr-4 ${activeLink == "/menue" ? "bg-[#DBDFD0] py-1 px-3  rounded-full text-sm" : ""}`} >Menue</Link>
          <Link href={'/pages'} className={`mr-4 ${activeLink == "/pages" ? "bg-[#DBDFD0] py-1 px-3  rounded-full text-sm" : ""}`}>Pages</Link>
          <Link href={'/contact'} className={`mr-4 ${activeLink == "/contact" ? "bg-[#DBDFD0] py-1 px-3  rounded-full text-sm" : ""}`} >Contact</Link>
        </nav>
        <Button asChild variant="outline" className="rounded-full hidden sm:hidden   md:block  hover:bg-[#DBDFD0] h-10">
          <Link href="/book">Book a Table</Link>
        </Button>
        <Sheet   >
          <SheetTrigger asChild>
            <Button variant="outline" className='sm:block  md:hidden lg:hidden ' ><IoMdMenu /></Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader >
              <SheetTitle className="flex justify-center gap-2 mt-8" >  <Image src={'/logo.png'} width={32} height={32} alt="logo" className="h-8 w-10" /> <p className="text-3xl"> Bistro Bliss </p></SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-5 text-2xl mt-16 ">
              <Link href={'/'} className={`mr-4 self-center`}>Home</Link>
              <Link href={'/about'} className={`mr-4 self-center`} >About</Link>
              <Link href={'/menue'} className={`mr-4  self-center`} >Menue</Link>
              <Link href={'/pages'} className={`mr-4  self-center`}>Pages</Link>
              <Link href={'/contact'} className={`mr-4  self-center`} >Contact</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </section>
    </main>
  );
}

export default Header;
