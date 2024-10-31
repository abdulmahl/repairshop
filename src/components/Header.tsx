import NavButton from "@/components/NavButton";
import { HomeIcon, File, UsersRound } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

export default function Header() {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex h-8 items-center justify-between w-full">
        <div className="flex items-center">
          <NavButton href="/home" label="Home" icon={HomeIcon} />
          <Link
            href={"/home"}
            className="flex items-center justify-center ml-0"
            title="Home"
          >
            <h2 className="hidden sm:block text-xl font-semibold m-0">
              Computer Repair Shop
            </h2>
          </Link>
        </div>

        <div className="flex items-center">
          <NavButton href="/customers" label="Customers" icon={UsersRound} />
          <NavButton href="/tickets" label="Tickets" icon={File} />

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
