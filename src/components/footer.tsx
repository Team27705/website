import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 py-6 pt-12 text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="flex flex-col items-center justify-center gap-2 text-sm">
          &copy; {new Date().getFullYear()} The ByteKnights - FTC Team 27705.
          All rights reserved.
          <a href="https://instagram.com/team27705">
            <Image
              src="/instagram.svg"
              width={32}
              height={32}
              alt="Instagram"
              className="ml-2 inline-block"
            />
          </a>
          Built by Issac Liu
        </p>
      </div>
    </footer>
  );
}
