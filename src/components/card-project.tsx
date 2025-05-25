import Image from "next/image";

interface CardProjectProps {
    name: string
    description: string
    imageUrl: string
    projectUrl: string
}

export default function CardProject({ name, description, imageUrl, projectUrl }: CardProjectProps) {
    return (
        <div className="flex gap-4 bg-theme-600 rounded-lg px-4 pt-4 pb-2 not-dark:shadow-sm">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
                <Image
                    src={imageUrl}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="w-10 h-10"
                />
            </div>
            <div className="flex-1 h-full flex flex-col">
                <h2 className="text-md font-medium">{name}</h2>
                <p className={`
                text-theme-400 text-sm
              `}>{description}</p>
                <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-[0.5px] rounded-md px-4 my-2 border-theme-500 w-min hover:bg-theme-500"
                >
                    ver
                </a>
            </div>
        </div>
    )
}