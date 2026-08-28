"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

const ROWS = 12;
const CLOSE_DUR = 0.13;
const OPEN_DUR = 0.11;
const STAGGER = 0.028;
const HOLD_DUR = 0.07;

type PageTransitionContextValue = {
  navigate: (href: string) => void;
};

const PageTransitionContext = createContext<PageTransitionContextValue | null>(null);

export function usePageTransition() {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) {
    throw new Error("usePageTransition must be used within PageTransitionProvider");
  }
  return ctx;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const isFirstRef = useRef(true);
  const pendingNavRef = useRef(false);

  const getRows = useCallback(() => {
    const overlay = overlayRef.current;
    if (!overlay) return null;
    return overlay.querySelectorAll<HTMLElement>(".route-transition-row");
  }, []);

  const playOpen = useCallback(() => {
    const rows = getRows();
    if (!rows?.length || prefersReducedMotion()) {
      isAnimatingRef.current = false;
      return;
    }

    gsap.to(rows, {
      scaleY: 0,
      duration: OPEN_DUR,
      stagger: { each: STAGGER, from: "start" },
      ease: "power3.out",
      transformOrigin: "top center",
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });
  }, [getRows]);

  const playClose = useCallback(
    (onCovered: () => void) => {
      const rows = getRows();
      if (!rows?.length || prefersReducedMotion()) {
        onCovered();
        return;
      }

      isAnimatingRef.current = true;
      gsap.set(rows, { scaleY: 0, transformOrigin: "bottom center" });
      const tl = gsap.timeline({ onComplete: onCovered });
      tl.to(rows, {
        scaleY: 1,
        duration: CLOSE_DUR,
        stagger: { each: STAGGER, from: "end" },
        ease: "power4.in",
      });
      tl.to({}, { duration: HOLD_DUR });
    },
    [getRows]
  );

  const navigate = useCallback(
    (href: string) => {
      if (href === pathname || isAnimatingRef.current) return;
      pendingNavRef.current = true;
      playClose(() => router.push(href));
    },
    [pathname, router, playClose]
  );

  useEffect(() => {
    if (isFirstRef.current) {
      isFirstRef.current = false;
      return;
    }
    if (pendingNavRef.current) {
      pendingNavRef.current = false;
      playOpen();
    }
  }, [pathname, playOpen]);

  useLayoutEffect(() => {
    const rows = getRows();
    if (rows) gsap.set(rows, { scaleY: 0, transformOrigin: "bottom center" });
  }, [getRows]);

  return (
    <PageTransitionContext.Provider value={{ navigate }}>
      {children}
      <div className="route-transition" ref={overlayRef} aria-hidden="true">
        {Array.from({ length: ROWS }, (_, i) => (
          <div className="route-transition-row" key={i} />
        ))}
      </div>
    </PageTransitionContext.Provider>
  );
}
