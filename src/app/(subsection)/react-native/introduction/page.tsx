import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import { Topic } from '@/types/topic'
import { CodeArea } from '@/components/ui/code-area'

const topics: Topic[] = [
    { title: 'Introdução', href: 'introduction' },
    { title: 'O que é React Native?', href: 'what-is-react-native' },
    { title: 'Por que usar Expo?', href: 'why-use-expo' },
    { title: 'Ambiente de Desenvolvimento', href: 'dev-environment' },
]

export default function IntroductionReactNative() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='introduction' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Introdução: Do Navegador para o Celular</h1>
                    <p className='text-secondary'>Se você chegou até aqui, já entende como o React domina a web, transformando a maneira como construímos interfaces. Agora, vamos levar todo esse poder para o bolso dos usuários. Nesta seção, vamos entender como usar a mesma lógica de componentes, estado e props para criar aplicativos que rodam em iOS e Android, partindo do zero até ter o famoso "Hello, World" na tela do seu celular.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='what-is-react-native' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>O que é React Native?</h2>
                    <p className='font-semibold'>A resposta curta: é o React, mas para aplicativos.</p>
                    <p>A resposta longa: o React Native é um framework que permite usar JavaScript e React para criar aplicativos para celular. A grande mágica acontece por baixo dos panos: em vez de gerar tags HTML como &lt;div&gt; e &lt;p&gt;, seu código React comanda os componentes de interface <strong>nativos</strong> do sistema operacional. Isso significa que quando você escreve &lt;View&gt;, o React Native a transforma em uma UIView no iOS e em uma View no Android. O resultado é um aplicativo com performance e aparência nativas, sem que você precise escrever uma linha sequer de Swift/Objective-C (para iOS) ou Java/Kotlin (para Android).</p>
                    <p className='text-secondary'>É a mesma filosofia do React que você já conhece — criar interfaces a partir de pequenos blocos reutilizáveis — aplicada a um novo ambiente.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='why-use-expo' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Por que usar Expo?</h2>
                    <p>Se o React Native é o motor do carro, o <strong>Expo</strong> é todo o resto: o chassi, o painel, o GPS e o ar-condicionado. Expo é um conjunto de ferramentas e serviços construído em cima do React Native que simplifica drasticamente o desenvolvimento.</p>
                    <p className='text-secondary'>Pense no Expo como o "Next.js" do mundo mobile. Ele resolve os principais pontos de dor:</p>
                    <ul className='list-disc list-inside space-y-2 my-4'>
                        <li><strong>Configuração Zero:</strong> Você não precisa instalar Xcode (para iOS) ou Android Studio (para Android) para começar. O Expo cuida de toda a complexidade.</li>
                        <li><strong>Desenvolvimento Rápido:</strong> Com o aplicativo <strong>Expo Go</strong>, você pode rodar seu projeto no seu próprio celular em segundos, apenas escaneando um QR Code.</li>
                        <li><strong>APIs Nativas Simplificadas:</strong> Quer usar a câmera, o GPS, os contatos ou o acelerômetro? O Expo oferece bibliotecas JavaScript fáceis de usar que dão acesso a esses recursos, sem que você precise se preocupar com o código nativo por trás delas.</li>
                    </ul>
                    <p className='text-secondary'>Para quem está começando (e até para muitos projetos em produção), usar o Expo é a forma mais rápida e produtiva de construir um app com React Native.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='dev-environment' className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-3xl'>Ambiente de Desenvolvimento: Primeiros Passos</h2>
                        <p>Aqui a prática é um pouco diferente da web. Vamos deixar o ambiente pronto para rodar nosso primeiro app. Siga os passos com atenção.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-2xl'>Passo 1: Instalar as ferramentas (se necessário)</h3>
                        <p>O EAS CLI é a ferramenta de linha de comando do Expo para fazer o "build" do seu aplicativo (o passo final para enviá-lo para as lojas). É bom já deixá-lo instalado. Abra seu terminal e rode:</p>
                        <CodeArea code={`npm install -g eas-cli`} language='bash'></CodeArea>
                        <p className='text-sm text-secondary italic'>Este comando instala o EAS CLI globalmente no seu computador. Você só precisa fazer isso uma vez.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-2xl'>Passo 2: Criar o projeto</h3>
                        <p>Agora, vamos criar a pasta e os arquivos iniciais do nosso app. É o equivalente ao `create-react-app`.</p>
                        <CodeArea code={`npx expo init meu-primeiro-app`} language='bash'></CodeArea>
                        <p className='text-sm text-secondary italic'>O `npx` garante que estamos usando a versão mais recente do `expo`. O comando vai perguntar qual template você quer usar. Para começar, escolha o template <strong>"blank"</strong>, que é o mais limpo.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-2xl'>Passo 3: Entrar na pasta do projeto</h3>
                        <p>Um passo simples, mas que muitos esquecem! O terminal não entra na pasta nova sozinho.</p>
                        <CodeArea code={`cd meu-primeiro-app`} language='bash'></CodeArea>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-2xl'>Passo 4: Iniciar o servidor de desenvolvimento</h3>
                        <p>Este é o comando que você mais vai usar. Ele inicia o "Metro Bundler", um servidor que compila seu código JavaScript e o disponibiliza para o aplicativo.</p>
                        <CodeArea code={`npx expo start`} language='bash'></CodeArea>
                        <p className='text-sm text-secondary italic'>Ao rodar esse comando, seu terminal vai mudar e exibir um grande <strong>QR Code</strong>. É aqui que a mágica acontece.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-2xl'>Passo 5: Ver o app no seu celular</h3>
                        <ol className='list-decimal list-inside space-y-2 my-2'>
                            <li>Pegue seu celular (Android ou iPhone).</li>
                            <li>Baixe o aplicativo <strong>"Expo Go"</strong> na Play Store ou na App Store.</li>
                            <li>Abra o Expo Go e use a opção de escanear o QR Code que apareceu no seu terminal.</li>
                        </ol>
                        <p>Em segundos, o aplicativo que você acabou de criar será carregado no seu celular. Qualquer alteração que você fizer no código será refletida quase que instantaneamente. Bem-vindo ao desenvolvimento mobile com React Native e Expo!</p>
                    </div>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
