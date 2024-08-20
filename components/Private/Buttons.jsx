"use client";

import { Button } from "@/components/ui/button";
import { Loader2, Zap } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton({ text }) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled size="sm" className="w-full flex items-center gap-2 text-white font-semibold">
          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
          Saving...
        </Button>
      ) : (
        <Button type="submit" size="sm" className="w-full flex items-center gap-2 text-white font-semibold">
          <Zap className="h-3.5 w-3.5"/>
          {text}
        </Button>
      )}
    </>
  );
}
