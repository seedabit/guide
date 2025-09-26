'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { SidebarGroup } from '@/components/core/sidebar/sidebar-group'
import { Divider } from '@/components/ui/divider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { sidebar } from '@/data/sidebar'
import { cn } from '@/utils/lib/tailwind-merge'
import { CollapsableSection } from '@/components/ui/collapsable-section'

interface SidebarProps {
    className?: string
}
const Sidebar: React.FC<SidebarProps> = ({ className }) => { // sidebar class for the sidebar scroll style
    const pathname = usePathname()
    const mainTitleHighlight: string = pathname === '/' ? 'text-sidebar-button-active' : ''

    return (
        <section className={cn('h-full w-full bg-sidebar overflow-y-scroll sidebar pt-9', className)}>
            <div className='px-8 w-full h-full flex flex-col space-y-7'>
                <div className='flex flex-col md:gap-1'>
                    <Link passHref href='/'>
                        <Button
                            variant='link'
                            className={cn('w-fit px-2 text-base text-wrap font-bold text-accent-foreground hover:no-underline', mainTitleHighlight)}
                        >
                            Code Guide
                        </Button>
                    </Link>
                    <Divider variant='horizontal' color={pathname === '/' ? 'highlight' : 'secondary'} className='my-0' />
                </div>
                <div className='flex flex-col space-y-3'>
                    {sidebar.map((group, index) => (
                        <CollapsableSection key={index} title={group.title}>
                            <SidebarGroup {...group} />
                        </CollapsableSection>
                    ))}
                </div>
                <div className='pb-0.5'></div>
            </div>
        </section>
    )
}

export default Sidebar
