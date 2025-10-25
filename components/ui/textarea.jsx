import React from "react";
import { cn } from "./utils";

export function Textarea({ className="", ...props }) {
  return <textarea className={cn("w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brandRoyal/30", className)} {...props} />;
}
