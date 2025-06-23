import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Activity,
  FileQuestionMark,
  Home,
  Menu,
  Mic,
  Phone,
  User,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const isDesktop = useIsMobile();
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home />,
    },
    {
      name: "About Us",
      link: "/about",
      icon: <User />,
    },
    {
      name: "Features",
      link: "/features",
      icon: <Activity />,
    },
    {
      name: "Testimonials",
      link: "/testimonials",
      icon: <Mic />,
    },
    {
      name: "FAQ",
      link: "/faq",
      icon: <FileQuestionMark />,
    },
    {
      name: "Contact Us",
      link: "/contact-us",
      icon: <Phone />,
    },
  ];

  const CustomHeader = ({ children }: { children: React.ReactNode }) => {
    return (
      <header className="sticky top-0 z-50 bg-hero backdrop-blur-lg border-b border-gray-100">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between ">
          <div className="flex items-center space-x-2">
            <Image
              width={100}
              height={100}
              src="/assets/logo.svg"
              alt="Billia logo"
            />
          </div>
          <>{children}</>
        </nav>
      </header>
    );
  };
  if (!isDesktop) {
    return (
      <>
        <CustomHeader>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={cn(
                  "text-brown-b hover:text-brown-b transition-colors font-medium",
                  pathname === item.link && "text-pumpkin-b font-bold "
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </CustomHeader>
      </>
    );
  }

  return (
    <>
      <CustomHeader>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-hero">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/assets/logo.svg"
                  width={132}
                  height={132}
                  alt="Billia logo"
                />
              </SheetTitle>
              <SheetDescription className="sr-only">
                One App. Every Payment. Zero Stress
              </SheetDescription>
            </SheetHeader>
            <div className="">
              <div className="flex flex-col px-4 space-y-4">
                {navItems.map(({ icon, name, link }: any, index) => (
                  <Link
                    key={index}
                    href={link}
                    // className="flex gap-2 bg-white/90 p-4 rounded-xl transition-colors font-medium"
                    className={cn(
                      "flex gap-2 bg-white/90 p-4 rounded-xl text-brown-b hover:text-brown-b transition-colors font-medium",
                      pathname === link && "text-pumpkin-b font-bold "
                    )}
                  >
                    {icon}
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </CustomHeader>
    </>
  );
}
