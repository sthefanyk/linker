import { ReactNode } from "react";

interface SocialMidiaProps {
    username: string
    link: string
    style?: string
    children: ReactNode;
}

export default function SocialMidia({ username, link, style = "", children }: SocialMidiaProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              p-2 rounded-full bg-theme-600
              flex justify-center items-center gap-2
              hover:bg-theme-500
              ${style}
            `}>
                {children}
                <span>{username}</span>
        </a>
    )
}