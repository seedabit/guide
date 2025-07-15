import type { SidebarEntry } from '@/types/sidebar'
import { Ecosystem } from '@/components/ui/icons/ecosystem'
import { ReactJS } from '@/components/ui/icons/reactjs'
import { NextJS } from '@/components/ui/icons/nextjs'
import { Github } from '@/components/ui/icons/github'
import { Archive } from 'lucide-react'
import { FaLaptopCode } from 'react-icons/fa'
import { SeedaBit } from '@/components/ui/icons/seedabit'

const sidebar: SidebarEntry[] = [
    {
        id: 0,
        title: 'Ecossistema',
        href: '/introduction',
        icon: <Ecosystem />,
        items: [
            {
                id: 0,
                title: 'Introdução e Instalação',
                href: '/introduction',
            },
            {
                id: 1,
                title: 'Configurações e Diretórios',
                href: '/settings',
            },
            {
                id: 2,
                title: 'Node',
                href: '/node',
            },
            {
                id: 3,
                title: 'Typescript',
                href: '/typescript',
            },
            {
                id: 4,
                title: 'Tailwind',
                href: '/tailwind',
            },
            {
                id: 5,
                title: 'ESLint',
                href: '/eslint',
            },
            {
                id: 6,
                title: 'Husky',
                href: '/husky',
            }
        ],
    },
    {
        id: 1,
        title: 'React',
        href: '/react/introduction',
        icon: <ReactJS />,
        items: [
            {
                id: 7,
                title: 'Introdução ao React',
                href: '/react/introduction',
            },
            {
                id: 8,
                title: 'Componentes',
                href: '/react/components',
            },
            {
                id: 9,
                title: 'Props',
                href: '/react/props',
            },
            {
                id: 10,
                title: 'Hooks',
                href: '/react/hooks',
            },
        ],
    },
    {
        id: 2,
        title: 'React Native',
        href: '/react-native/introduction',
        icon: <ReactJS />,
        items: [
            {
                id: 11,
                title: 'Introdução ao React Native',
                href: '/react-native/introduction',
            },
            {
                id: 12,
                title: 'Componentes',
                href: '/react-native/components'
            },
            {
                id: 13,
                title: 'Estilização',
                href: '/react-native/styling'
            },
            {
                id: 14,
                title: 'Props e Hooks',
                href: '/react-native/props-and-hooks'
            },
            {
                id: 15,
                title: 'Navegação com Native',
                href: '/react-native/navigation'
            },
            {
                id: 16,
                title: 'APIs do Expo',
                href: '/react-native/expo-apis'
            },
            {
                id: 17,
                title: 'Publicando',
                href: '/react-native/publishing'
            },
        ],
    },
    {
        id: 3,
        title: 'Next',
        href: '/next/introduction',
        icon: <NextJS />,
        items: [
            {
                id: 18,
                title: 'Introdução',
                href: '/next/introduction',
            },
            {
                id: 19,
                title: 'Instalação e Configuração',
                href: '/next/installation-and-settings',
            },
            {
                id: 20,
                title: 'Roteamento',
                href: '/next/routing',
            }
        ],
    },
    {
        id: 4,
        title: 'Git e GitHub',
        href: '/git/introduction',
        icon: <Github size={16} />,
        items: [
            {
                id: 21,
                title: 'Introdução',
                href: '/git/introduction',
            },
            {
                id: 22,
                title: 'Repositórios, Commits e Branches',
                href: '/git/repositories-commits-and-branches',
            },
            {
                id: 23,
                title: 'Commits Semânticos',
                href: '/git/semantic-commits',
            }
        ],

    },
    {
        id: 5,
        title: 'Seed a Bit - CLI',
        href: '/cli/learn',
        icon: <SeedaBit size={16} />,
        items: [
            {
                id: 24,
                title: 'Aprenda',
                href: '/cli/learn',
            },
            {
                id: 25,
                title: 'Projetos',
                href: '/cli/projects',
            },
            {
                id: 26,
                title: 'Componentes',
                href: '/cli/components',
            }
        ]
    },
    {
        id: 6,
        title: 'Desafio',
        href: '/desafio/introduction',
        icon: <FaLaptopCode />,
        items: [
            {
                id: 27,
                title: 'Introdução',
                href: '/desafio/introduction',
            },
            // {
            //     id: 25,
            //     title: 'Monitorias',
            //     href: '/desafio/steps',
            // },
        ],
    },
    {
        id: 7,
        title: 'Recomendações',
        href: '/recommendations/introduction',
        icon: <Archive size={16} />,
        items: [
            {
                id: 28,
                title: 'Introdução',
                href: '/recommendations/introduction'
            },
            {
                id: 29,
                title: 'Jest',
                href: '/recommendations/jest',
            },
            {
                id: 30,
                title: 'Axios',
                href: '/recommendations/axios',
            }
        ]
    }
]

export { sidebar }
