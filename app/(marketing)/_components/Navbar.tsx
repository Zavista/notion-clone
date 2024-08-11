"use client";

import useScrollTop from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6 dark:bg-[#1F1F1F]",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo></Logo>
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <p>Loading...</p>}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get Jotion Free</Button>
            </SignInButton>
          </>
        )}
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};

export default Navbar;
