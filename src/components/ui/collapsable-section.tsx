import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { cn } from "@/utils/lib/tailwind-merge";

export const CollapsableSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleVisibility = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                className="w-full flex items-center justify-between text-sidebar-title hover:text-accent-foreground focus:outline-none"
                onClick={toggleVisibility}>

                <span className="text-sm font-semibold">{title}</span>
                <ChevronDownIcon
                    className={cn(
                        'h-4 w-4 text-sidebar-title transform transition-transform duration-300',
                        { 'rotate-180': isOpen }
                    )}
                />
            </button>
            <div className={cn(
                'overflow-hidden transition-all duration-300 ease-in-out',
                { 'max-h-screen': isOpen, 'max-h-0': !isOpen }
            )}>
                <div className="pt-2">
                    {children}
                </div>
            </div>
        </div>
    )
}