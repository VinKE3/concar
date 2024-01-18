"use client";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  const [displayMessage, setDisplayMessage] = useState<
    string | null | undefined
  >(message);

  useEffect(() => {
    setDisplayMessage(message);

    const timer = setTimeout(() => {
      setDisplayMessage(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [message]);

  if (!displayMessage) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{displayMessage}</p>
    </div>
  );
};
