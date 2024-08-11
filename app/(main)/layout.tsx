"use client";

import { Spinner } from "@/components/ui/Spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg"></Spinner>
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }
  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <main className="flex-1 h-full overflow-y-auto">{children} </main>
    </div>
  );
};

export default MainLayout;
