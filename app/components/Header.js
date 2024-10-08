import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-0 px-4 bg-white shadow-sm">
      <div className="logo">
        <Image src="/images/Logo.png" alt="Academy Logo" width={150} height={80} />
      </div>
      <nav className="hidden lg:block">
        <ul className="flex space-x-6">
        <li><Link href="/" className={buttonVariants({ variant: "link", className: "text-[1.25rem] font-light" })}>Home</Link></li>
              <li><Link href="/about" className={buttonVariants({ variant: "link", className: "text-[1.25rem] font-light" })}>About Us</Link></li>
              <li><Link href="/upcomingEvents" className={buttonVariants({ variant: "link", className: "text-[1.25rem] font-light" })}>Events</Link></li>
              <li><Link href="/success" className={buttonVariants({ variant: "link", className: "text-[1.25rem] font-light" })}>Success Stories</Link></li>
              <li><Link href="/admissions" className={buttonVariants({ variant: "link", className: "text-[1.25rem] font-light" })}>Admissions</Link></li>
              <li><Link href="/contact" className={buttonVariants({ variant: "outline", className: "text-[1.25rem] font-light" })}>Contact Us</Link></li>
        </ul>
      </nav>

      {/* Mobile Navigation - Sheet */}
      <nav className="lg:hidden">
        <Sheet>
          <SheetTrigger className={buttonVariants({ variant: "outline" })}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-3xl">Menu</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <ul className="space-y-6 mt-10">
              <li><Link href="/" className={buttonVariants({ variant: "link", className: "text-xl font-light" })}>Home</Link></li>
              <li><Link href="/about" className={buttonVariants({ variant: "link", className: "text-xl font-light" })}>About Us</Link></li>
              <li><Link href="/upcomingEvents" className={buttonVariants({ variant: "link", className: "text-xl font-light" })}>Events</Link></li>
              <li><Link href="/success" className={buttonVariants({ variant: "link", className: "text-xl font-light" })}>Success Stories</Link></li>
              <li><Link href="/admissions" className={buttonVariants({ variant: "link", className: "text-xl font-light" })}>Admissions</Link></li>
              <li><Link href="/contact" className={buttonVariants({ variant: "outline", className: "text-xl font-light" })}>Contact Us</Link></li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;