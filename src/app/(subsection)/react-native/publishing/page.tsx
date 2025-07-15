import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import { Topic } from '@/types/topic'
import { CodeArea } from '@/components/ui/code-area'

const topics: Topic[] = [
    { title: 'Publicando seu App com EAS', href: 'title' },
    { title: 'O que é o EAS?', href: 'what-is-eas' },
    { title: 'Configurando o EAS', href: 'configuring-eas' },
    { title: 'Development vs. Production', href: 'dev-vs-prod' },
    { title: 'Gerando seu Primeiro Build', href: 'first-build' },
]

export default function Publishing() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='title' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Publicando seu App com EAS</h1>
                    <p>Até agora, nosso aplicativo só existe no nosso ambiente de desenvolvimento. Para que ele se torne um aplicativo de verdade — um arquivo <code>.apk</code> para Android ou <code>.ipa</code> para iOS — que pode ser publicado nas lojas, precisamos passar por um processo chamado "build". É aqui que entra o EAS.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='what-is-eas' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>O que é o EAS (Expo Application Services)?</h2>
                    <p>O EAS é um conjunto de serviços de nuvem do Expo projetado para simplificar todo o ciclo de vida de um aplicativo. A parte que nos interessa agora é o <strong>EAS Build</strong>, o serviço que pega nosso código JavaScript e o transforma em um aplicativo nativo pronto para distribuição.</p>
                    <p>Ele funciona como um "robô" na nuvem que tem o ambiente de desenvolvimento Android e iOS todo configurado. Você envia seu código para ele, e ele faz todo o trabalho pesado de compilação, sem que você precise ter um Mac para compilar para iOS, por exemplo.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='configuring-eas' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Configurando o EAS no seu Projeto</h2>
                    <p>Antes de podermos compilar, precisamos conectar nosso projeto ao EAS.</p>
                    <ol className='list-decimal list-inside space-y-4 my-2'>
                        <li><strong>Instale o EAS CLI (se ainda não o fez):</strong><br />Esta é a ferramenta de linha de comando para interagir com os serviços do EAS.
                            <CodeArea code={`npm install -g eas-cli`} language='bash' />
                        </li>
                        <li><strong>Faça login na sua conta Expo:</strong><br />Seu projeto precisa estar associado a uma conta Expo.
                            <CodeArea code={`eas login`} language='bash' />
                        </li>
                        <li><strong>Configure o projeto:</strong><br />Este passo cria o arquivo <code>eas.json</code>, que contém as instruções de como o EAS deve compilar seu app.
                            <CodeArea code={`eas configure`} language='bash' />
                            <p>O arquivo <code>eas.json</code> gerado será parecido com isto:</p>
                            <CodeArea link='react-native/publishing/eas-example.json' />
                        </li>
                    </ol>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='dev-vs-prod' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Development Build vs. Production Build</h2>
                    <p>O EAS nos permite criar diferentes tipos de builds. Os dois principais são:</p>
                    <ul className='list-disc list-inside space-y-4 my-4'>
                        <li><strong>Development Build (Build de Desenvolvimento):</strong><br />Pense nele como um <strong>"Expo Go personalizado"</strong> para o seu projeto. Ele inclui todas as bibliotecas nativas que você instalou, mas ainda permite carregar seu código JavaScript a partir do servidor de desenvolvimento. É ideal para testar bibliotecas que não funcionam no Expo Go.</li>
                        <li><strong>Production Build (Build de Produção):</strong><br />Esta é a <strong>versão final</strong> do seu aplicativo. O código JavaScript é otimizado e "empacotado" diretamente dentro do app. É este build que você envia para as lojas.</li>
                    </ul>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='first-build' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Gerando seu Primeiro Build</h2>
                    <p>Com tudo configurado, o processo para criar um build é um único comando:</p>
                    <CodeArea code={`eas build`} language='bash' />
                    <p>O EAS CLI fará algumas perguntas, como a plataforma (iOS/Android) e o perfil de build (development/production). Após responder, ele enviará seu projeto para os servidores do Expo e iniciará a compilação.</p>
                    <p>Quando o build estiver concluído, a página de progresso fornecerá um QR Code ou um link para você baixar e instalar o arquivo <code>.apk</code> ou <code>.ipa</code> diretamente no seu dispositivo. Parabéns, você acabou de transformar seu código em um aplicativo de verdade!</p>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
