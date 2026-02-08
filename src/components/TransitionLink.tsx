"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

// Event to trigger the loader
export const triggerTransition = () => {
    const event = new CustomEvent("route-transition-start");
    window.dispatchEvent(event);
};

interface TransitionLinkProps extends LinkProps {
    children: ReactNode;
    className?: string;
    href: string;
}

export default function TransitionLink({ children, href, ...props }: TransitionLinkProps) {
    const router = useRouter();

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        // 1. Trigger the curtain to slide DOWN (enter)
        triggerTransition();

        // 2. Wait for animation to cover screen (approx 800ms)
        await new Promise((resolve) => setTimeout(resolve, 800));

        // 3. Navigate
        router.push(href);
    };

    return (
        <Link {...props} href={href} onClick={handleTransition}>
            {children}
        </Link>
    );
}
