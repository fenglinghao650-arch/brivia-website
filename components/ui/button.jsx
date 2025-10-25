"use client";
import React from "react";
import { cn } from "./utils";

const variants = {
  default: "bg-brandRoyal text-white hover:bg-brandBlue",
  outline: "border border-brandRoyal text-brandRoyal bg-transparent hover:bg-brandRoyal/10",
  ghost: "bg-transparent hover:bg-black/5 text-slate-800",
};

export function Button({ className = "", variant = "default", asChild = false, children, ...props }) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant] || variants.default,
    className
  );

  // If asChild is true, we style the child element (e.g., an <a>)
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(children.props.className, classes),
      ...props,
    });
  }

  // Default: render a <button>
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
