import { ReactNode } from "react";

interface ContactLinkProps {
    content: string
    link: string
    style?: string
    children: ReactNode;
}

export default function ContactLink({ content, link, style = "", children }: ContactLinkProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                flex items-center gap-2 p-1 rounded-md hover:bg-theme-600 text-md font-medium
                ${style}
            `}>
            {children}
            <span>{content}</span>
        </a>
    )
}