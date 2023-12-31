"use client";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {navbarLinks} from "@/constants/index";
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {HamburgerMenuIcon} from "@radix-ui/react-icons";
import {ModeToggle} from "@/components/shared/ModeToggle";
import {logoUrl} from "@/constants/index";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <nav>
      <div className="hidden max-lg:flex justify-between">
        <div className="flex px-2">
          <Image src={logoUrl} height={50} width={50} alt={"logo"} />
        </div>
        <Popover>
          <PopoverTrigger>
            <HamburgerMenuIcon className="w-8 h-8 w-full" />
          </PopoverTrigger>
          <PopoverContent className="flex justify-center flex-col w-full">
            <div className="flex flex-col gap-2">
              {navbarLinks.map((link) => {
                const isActive =
                  (pathname.includes(link.route) && link.route.length > 1) ||
                  pathname === link.route;
                return (
                  <Link
                    href={link.route}
                    key={link.label}
                    className={`flex justify-start  border hover:bg-secondary gap-4 rounded-lg p-4 ${
                      isActive && `bg-primary`
                    }`}
                  >
                    {link.label}
                    {/* <Image
                      src={link.imgURL}
                      alt={link.label}
                      width={24}
                      height={24}
                    /> */}
                  </Link>
                );
              })}
            </div>
            <div className="self-end mt-8 mr-2">
              <ModeToggle />
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="max-lg:hidden flex items-center p-1 justify-between">
        <Image src={logoUrl} height={50} width={75} alt={"logo"} />
        <div className="flex items-center gap-1">
          {navbarLinks.map((link) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;
            return (
              <Link
                href={link.route}
                key={link.label}
                className={`flex justify-start border hover:bg-secondary gap-2 rounded-lg p-2 ${
                  isActive && `bg-primary`
                }`}
              >
                {/* <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={24}
                  height={24}
                /> */}
                <p className="text-light-1"> {link.label} </p>
              </Link>
            );
          })}
          <div className="px-4">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
