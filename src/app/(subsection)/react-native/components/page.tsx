import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import { Topic } from '@/types/topic'
import { CodeArea } from '@/components/ui/code-area'

const topics: Topic[] = [
    { title: 'Componentes: De <div> a <View>', href: 'title' },
    { title: 'A Mentalidade é a Mesma', href: 'mindset' },
    { title: 'Traduzindo o HTML para o Nativo', href: 'translating-html' },
    { title: 'Renderizando Listas com FlatList', href: 'flatlist' },
]

export default function NativeComponents() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='title' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Componentes: De &lt;div&gt; a &lt;View&gt;</h1>
                    <p className='text-secondary'>No React para a web, o coração de tudo é a componentização de elementos HTML. No React Native, a filosofia é idêntica, mas as peças do nosso quebra-cabeça são outras. Nesta seção, vamos aprender quais são os blocos de construção fundamentais de um aplicativo e como eles se comparam ao que já conhecemos do mundo web.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='mindset' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>A Mentalidade é a Mesma, as Ferramentas Mudam</h2>
                    <p>A boa notícia é que você não precisa reaprender a pensar. A ideia de criar componentes pequenos, reutilizáveis e com responsabilidade única continua sendo o pilar do desenvolvimento. Um componente de <code>Card</code> continuará sendo um <code>Card</code>, e um <code>Button</code> continuará sendo um <code>Button</code>. O que muda são os elementos que usamos <i>dentro</i> desses componentes para dar-lhes forma e função.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='translating-html' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Traduzindo o HTML para o Nativo</h2>
                    <p>No React Native, não temos acesso a tags HTML como <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code> ou <code>&lt;span&gt;</code>. Em vez disso, importamos um conjunto de componentes essenciais da biblioteca <code>react-native</code> que são traduzidos para os elementos de interface nativos do iOS e do Android.</p>
                    <p>Os mais importantes são:</p>
                    <ul className='list-disc list-inside space-y-4 my-4'>
                        <li><strong><code>&lt;View&gt;</code>: O novo <code>&lt;div&gt;</code></strong><br />O <code>&lt;View&gt;</code> é o contêiner mais fundamental para layout. Pense nele como uma <code>&lt;div&gt;</code> sem nenhuma estilização. Ele serve para agrupar outros componentes e organizar a estrutura da sua tela.</li>
                        <li><strong><code>&lt;Text&gt;</code>: O único lugar para textos</strong><br />Esta é uma regra de ouro: <strong>qualquer texto que você queira exibir na tela precisa, obrigatoriamente, estar dentro de um componente <code>&lt;Text&gt;</code></strong>. Diferente da web, onde textos podem viver soltos, no React Native isso causará um erro.</li>
                        <li><strong>Outros Essenciais:</strong>
                            <ul className='list-disc list-inside space-y-2 my-2 ml-4'>
                                <li><strong><code>&lt;Image&gt;</code>:</strong> Para exibir imagens locais ou remotas.</li>
                                <li><strong><code>&lt;TextInput&gt;</code>:</strong> O equivalente ao <code>&lt;input type="text"&gt;</code>.</li>
                                <li><strong><code>&lt;TouchableOpacity&gt;</code>:</strong> A forma mais comum de se criar botões e áreas clicáveis, dando um feedback visual de opacidade ao toque.</li>
                            </ul>
                        </li>
                    </ul>
                    <p>Veja um exemplo simples que combina esses componentes:</p>
                    <CodeArea link='/react-native/components/profile-card.tsx' />
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='flatlist' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Renderizando Listas com FlatList</h2>
                    <p>No React para a web, é muito comum usarmos a função <code>.map()</code> para renderizar uma lista. Embora isso funcione no React Native para listas pequenas, pode causar sérios problemas de performance em listas longas. O motivo é que o <code>.map()</code> renderiza <strong>todos</strong> os itens de uma só vez, consumindo muita memória.</p>
                    <p>A solução nativa para isso é o componente <strong><code>&lt;FlatList&gt;</code></strong>.</p>
                    <p>A <code>&lt;FlatList&gt;</code> é inteligente. Ela renderiza apenas os itens que estão visíveis na tela e "recicla" os componentes à medida que o usuário rola a lista. Para usá-la, precisamos passar três props principais:</p>
                    <ol className='list-decimal list-inside space-y-2 my-2'>
                        <li><code>data</code>: O array de dados que você quer renderizar.</li>
                        <li><code>renderItem</code>: Uma função que recebe um item do seu array e retorna o componente JSX que deve ser exibido para aquele item.</li>
                        <li><code>keyExtractor</code>: Uma função que recebe um item e retorna uma string única para ser usada como a <code>key</code> do React.</li>
                    </ol>
                    <p>Vamos ver um exemplo de uma lista de tarefas:</p>
                    <CodeArea link='/react-native/components/task-list.tsx' />
                    <p>Com esses componentes básicos em mãos, você já tem o necessário para construir a estrutura de praticamente qualquer tela de um aplicativo.</p>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
