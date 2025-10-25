import React from "react";
import { cn } from "./utils";

export function Card({ className="", children, ...props }) {
  return <div className={cn("bg-white border border-black/5 rounded-2xl", className)} {...props}>{children}</div>;
}
export function CardHeader({ className="", children, ...props }) {
  return <div className={cn("p-6 pb-0", className)} {...props}>{children}</div>;
}
export function CardContent({ className="", children, ...props }) {
  return <div className={cn("p-6", className)} {...props}>{children}</div>;
}
export function CardTitle({ className="", children, ...props }) {
  return <h3 className={cn("text-xl font-semibold", className)} {...props}>{children}</h3>;
}
export function CardDescription({ className="", children, ...props }) {
  return <p className={cn("text-sm text-slate-600", className)} {...props}>{children}</p>;
}
