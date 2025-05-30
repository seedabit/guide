import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { CodeArea } from '@/components/ui/code-area'
import { Divider } from '@/components/ui/divider'
import { Topic } from '@/types/topic'

const topics: Topic[] = [
    { title: 'Props', href: 'props' },
    { title: 'Como utilizar Props?', href: 'how-to-use-props' },
    { title: 'Tipos nas Props', href: 'types-on-props' },
    { title: 'Propriedade Children', href: 'children-props' },
]

export default function Props() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='props' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Props</h1>
                    <p className='text-secondary'>No React, componentes podem ser customizados de diversas formas. Uma delas são as Props. O termo vem de <i>propriedades</i> e são pequenas configurações que passamos para um componente para alterar seu comportamento. Se componentes são funções, Props são como os parâmetros dessas funções.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='how-to-use-props' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Como utilizar Props?</h2>
                    <p>Props são declaradas como parâmetros para as funções que criam os componentes. Simples e fáceis de executar!</p>
                    <CodeArea link='/react/props/saudacao.tsx' />
                    <p>Daqui, podemos tirar algumas observações a respeito da sintaxe:</p>
                    <ul className='list-disc list-inside space-y-2 my-4'>
                        <li>Props são passadas para o componente como um objeto, com chaves e valores. Por isso utilizamos <code>{"{ }"}</code> ao redor da Prop name.</li>
                        <li>Você passa a Prop como passaria um atributo do HTML normal ao componente.</li>
                        <li>Para adicionar uma Prop para o HTML, também é necessário colocar entre <code>{"{ }"}</code>.</li>
                    </ul>
                    <p>Aqui vai mais um exemplo de como podemos usar Props para alterar o funcionamento de um componente!</p>
                    <CodeArea link='/react/props/typed-button.tsx' />
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='types-on-props' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Tipos nas Props</h2>
                    <p>Como estamos utilizando Typescript, podemos utilizar tipos nas Props! Isso permite que quem use seu componente futuramente saiba quais atributos são obrigatórios e os tipos desses atributos. Num geral, é sempre uma boa ideia adicionar tipos as suas Props. Há várias maneiras de fazer isso, a mostrada abaixo é apenas uma delas.</p>
                    <CodeArea link='/react/props/typed-caixa.tsx' />
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='children-props' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Propriedade Children</h2>
                    <p>Dentro do HTML, somos logo de cara ensinados que um elemento {"<div></div>"} pode ter vários elementos dentro dele. Componentes não são diferentes, e quando queremos passar elementos ou texto para dentro de um componente, podemos fazer isso através da propriedade especial Children!</p>
                    <CodeArea link='/react/props/children-button.tsx' />
                    <p>Agora, você está pronto para aprender sobre hooks!</p>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
