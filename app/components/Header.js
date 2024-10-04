// app/components/Header.js

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Image src="/images/Logo.png" alt="Academy Logo" width={150} height={50} />
      </div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/admissions">Admissions</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;