import React from 'react'
import { SidebarButton } from '@/components/core/sidebar/sidebar-button'
import { cn } from '@/utils/lib/tailwind-merge'

interface SidebarTitleProps {
    href: string
    icon: React.ReactNode
    children: React.ReactNode
    className?: string
}
const SidebarTitle: React.FC<SidebarTitleProps> = ({ href, icon, children, className }) => {
    return (
        <div className={cn('flex flex-col space-y-1', className)}>
            <SidebarButton href={href} icon={icon} variant='title' className='text-nowrap'>
                {children}
            </SidebarButton>
        </div>
    )
}

export { SidebarTitle }
