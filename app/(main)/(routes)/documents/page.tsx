"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const DocumentPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = async () => {
    const toastId = toast.loading("Creating a new note...");

    try {
      await create({ title: "Untitled" });

      toast.dismiss(toastId);
      toast.success("New Note created!");
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Failed to create a new note.");
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="empty"
        className="dark:hidden"
      ></Image>
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="empty"
        className="hidden dark:block"
      ></Image>
      <h2 className="text-large font-medium">
        Welcome to {user?.username}&apos;s Jotion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2"></PlusCircle>
        Create a Note
      </Button>
    </div>
  );
};

export default DocumentPage;
