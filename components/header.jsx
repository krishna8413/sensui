import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";


const Header = () => {
    return (

        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/">
                <Image src="/logo.png" alt="logo" width={200}height={60} className="h-12 py-1 w-auto object-contain" />
                </Link>
                <div className="flex items-center space-x-2 md :space-x-4 ">
                  <SignedIn>
                    <Link href={"/dashboard"}>
                    <Button variant={"outline"} >
                      <LayoutDashboard className="h-4 w-4" />
                      <span className="hiddenmd:block">
                        Industry Insights
                      </span>
                    </Button>
                    </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button>
                      <StarsIcon className="h-4 w-4" />
                      <span className="hiddenmd:block">
                        Growth Tools
                      </span>
                      <ChevronDown className="=h-4 w-4" />
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Link href={"/resume"} className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            <span>
                            Build Resume
                            </span>
                            <ChevronDown className="=h-4 w-4" />
                        </Link>
                        </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={"/ai-cover-letter"} className="flex items-center gap-2">
                            <PenBox className="h-4 w-4" />
                            <span>
                            Cover Letter
                            </span>
                            <ChevronDown className="=h-4 w-4" />
                        </Link>
                        </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={"/interview"} className="flex items-center gap-2">
                            <GraduationCap className="h-4 w-4" />
                            <span>
                            Interview Prep
                            </span>
                            <ChevronDown className="=h-4 w-4" />
                        </Link>
                        </DropdownMenuItem>  
                    </DropdownMenuContent>
                </DropdownMenu>
                </SignedIn>
                
            <SignedOut>
              <SignInButton>
                <Button variant={"outline"}>
                    Sign In
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
              appearance={{ 
                elements: {
                    avatarBox: "w-10 h-10",
                    userButtonPopoverCard: "font-semibold",
                },
              }}
              afterSignOutUrl=""
              />
            </SignedIn>
            </div>
            </nav>
            </header>
        );
}
export default Header;