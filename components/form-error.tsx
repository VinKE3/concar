"use client";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
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
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{displayMessage}</p>
    </div>
  );
};
