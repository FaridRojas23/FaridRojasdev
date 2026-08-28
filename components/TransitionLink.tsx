"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { usePageTransition } from "@/components/PageTransitionProvider";

type TransitionLinkProps = ComponentProps<typeof Link>;

export default function TransitionLink({ href, onClick, ...props }: TransitionLinkProps) {
  const { navigate } = usePageTransition();
  const hrefValue = typeof href === "string" ? href : (href.pathname ?? "/");

  return (
    <Link
      href={href}
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        if (hrefValue.startsWith("http") || hrefValue.startsWith("mailto:") || hrefValue.startsWith("tel:")) {
          return;
        }
        event.preventDefault();
        navigate(hrefValue);
      }}
    />
  );
}
