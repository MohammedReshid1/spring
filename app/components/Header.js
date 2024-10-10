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
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-2 px-4 bg-white shadow-sm">
      <div className="logo">
        <Image src="/images/Logo.png" alt="Academy Logo" width={120} height={60} className="object-contain" />
      </div>
      <nav className="hidden lg:block">
        <ul className="flex space-x-4">
          <li><Link href="/" className={buttonVariants({ variant: "link", className: "text-base font-light" })}>Home</Link></li>
          <li><Link href="/about" className={buttonVariants({ variant: "link", className: "text-base font-light" })}>About Us</Link></li>
          <li><Link href="/upcomingEvents" className={buttonVariants({ variant: "link", className: "text-base font-light" })}>Events</Link></li>
          <li><Link href="/success" className={buttonVariants({ variant: "link", className: "text-base font-light" })}>Success Stories</Link></li>
          <li><Link href="/admissions" className={buttonVariants({ variant: "link", className: "text-base font-light" })}>Admissions</Link></li>
          <li>
            <Link 
              href="/contact" 
              className={cn(
                buttonVariants({ variant: "outline" }),
                "text-sm font-light bg-[#b18aa7] text-white hover:bg-[#9a7691] hover:text-white border-[#b18aa7]"
              )}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="lg:hidden">
        <Sheet>
          <SheetTrigger className={buttonVariants({ variant: "outline", size: "icon" })}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-lg">Menu</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <ul className="space-y-4 mt-6">
              <li><Link href="/" className={buttonVariants({ variant: "link", className: "text-sm font-light" })}>Home</Link></li>
              <li><Link href="/about" className={buttonVariants({ variant: "link", className: "text-sm font-light" })}>About Us</Link></li>
              <li><Link href="/upcomingEvents" className={buttonVariants({ variant: "link", className: "text-sm font-light" })}>Events</Link></li>
              <li><Link href="/success" className={buttonVariants({ variant: "link", className: "text-sm font-light" })}>Success Stories</Link></li>
              <li><Link href="/admissions" className={buttonVariants({ variant: "link", className: "text-sm font-light" })}>Admissions</Link></li>
              <li>
                <Link 
                  href="/contact" 
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "text-sm font-light bg-[#b18aa7] text-white hover:bg-[#9a7691] hover:text-white border-[#b18aa7] rounded-full"
                  )}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}