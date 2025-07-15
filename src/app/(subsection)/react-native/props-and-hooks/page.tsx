import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import { Topic } from '@/types/topic'
import { CodeArea } from '@/components/ui/code-area'

const topics: Topic[] = [
    { title: 'Props e Hooks', href: 'title' },
    { title: 'Você Já Sabe Isso!', href: 'you-know-this' },
    { title: 'Colocando em Prática', href: 'in-practice' },
]

export default function PropsAndHooks() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='title' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Props e Hooks: Seu Conhecimento em Ação</h1>
                    <p>Se você estava esperando por conceitos complexos e novos, temos uma ótima notícia. Esta é a seção mais fácil do guia, pois não há nada de novo para aprender aqui. A lógica para gerenciar o estado, o ciclo de vida e o fluxo de dados dos seus componentes é exatamente a mesma que você já domina no React para a web.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='you-know-this' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>A Melhor Parte: Você Já Sabe Isso!</h2>
                    <p>É isso mesmo. A forma como você declara e usa <strong>Props</strong>, e o funcionamento dos hooks <strong><code>useState</code></strong>, <strong><code>useEffect</code></strong> e <strong><code>useContext</code></strong> são idênticos no React Native.</p>
                    <ul className='list-disc list-inside space-y-2 my-2'>
                        <li><strong>Props</strong> continuam sendo a forma de passar dados de um componente pai para um filho, customizando seu comportamento e aparência.</li>
                        <li><strong><code>useState</code></strong> ainda é o hook fundamental para adicionar estado a um componente funcional, fazendo com que ele re-renderize quando o estado muda.</li>
                        <li><strong><code>useEffect</code></strong> continua sendo a ferramenta para lidar com "efeitos colaterais" (side effects), como buscar dados de uma API quando a tela carrega ou executar uma ação sempre que um estado específico é alterado.</li>
                        <li><strong><code>useContext</code></strong> segue como a solução para evitar "prop drilling" e compartilhar dados globais, como informações de um usuário logado ou um tema de cores.</li>
                    </ul>
                    <p>O nosso único trabalho nesta seção é aplicar esse conhecimento aos componentes nativos que aprendemos nos tópicos anteriores.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='in-practice' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Colocando em Prática</h2>
                    <p>Vamos criar um exemplo clássico, um contador, para ver como esses conceitos se unem de forma natural no ambiente nativo. Neste exemplo, vamos:</p>
                    <ol className='list-decimal list-inside space-y-2 my-2'>
                        <li>Usar <code>useState</code> para controlar o número do contador.</li>
                        <li>Usar <code>TouchableOpacity</code> para criar os botões de incrementar e decrementar.</li>
                        <li>Usar <code>Text</code> para exibir o valor atual do contador.</li>
                        <li>Usar <code>useEffect</code> para exibir uma mensagem no console sempre que o contador for alterado.</li>
                    </ol>
                    <CodeArea link='/react-native/props-and-hooks/props-and-hooks-example.tsx' />
                    <p>Como você pode ver, a lógica dentro da função do componente é puro React. A única diferença real é que, no final, retornamos componentes como <code>&lt;View&gt;</code> e <code>&lt;Text&gt;</code> em vez de <code>&lt;div&gt;</code> e <code>&lt;p&gt;</code>.</p>
                    <p>Com essa base sólida, estamos prontos para avançar para um tópico que é verdadeiramente específico do mundo mobile: a navegação entre telas.</p>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
