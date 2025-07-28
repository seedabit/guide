import React from 'react'
import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import { Topic } from '@/types/topic'
import { CodeArea } from '@/components/ui/code-area'

const topics: Topic[] = [
    { title: 'APIs do Expo', href: 'title' },
    { title: 'O que são as APIs do Expo?', href: 'what-are-expo-apis' },
    { title: 'Exemplo 1: Câmera', href: 'example-camera' },
    { title: 'Exemplo 2: Localização', href: 'example-location' },
    { title: 'Exemplo 3: Armazenamento Local', href: 'example-storage' },
]

export default function ExpoApis() {
    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='title' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>APIs do Expo: Interagindo com o Dispositivo</h1>
                    <p>Um aplicativo é muito mais do que apenas uma interface bonita; ele vive em um dispositivo com dezenas de sensores e recursos. Acessar esses recursos nativos é o que torna um aplicativo verdadeiramente poderoso. Aqui entra o grande superpoder do Expo.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='what-are-expo-apis' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>O que são as APIs do Expo?</h2>
                    <p>O ecossistema Expo nos fornece um vasto conjunto de bibliotecas (APIs) que servem como uma "ponte" em JavaScript para os recursos nativos do celular. Com elas, podemos pedir permissão para usar a câmera ou obter a localização do usuário, tudo isso sem sair do nosso código JavaScript.</p>
                    <p>Para usar uma API do Expo, o processo é sempre o mesmo:</p>
                    <ol className='list-decimal list-inside space-y-2 my-2'>
                        <li>Instale a biblioteca desejada usando <code>npx expo install</code>.</li>
                        <li>Importe as funções necessárias no seu componente.</li>
                        <li>Peça a permissão do usuário para usar o recurso (um passo crucial no mobile).</li>
                        <li>Use as funções da biblioteca.</li>
                    </ol>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='example-camera' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Exemplo 1: Usando a Câmera (`expo-camera`)</h2>
                    <p>Vamos criar um componente que pede permissão e exibe a visualização da câmera do celular.</p>
                    <p><strong>1. Instalação:</strong></p>
                    <CodeArea code={`npx expo install expo-camera`} language='bash' />
                    <p><strong>2. Código:</strong></p>
                    <CodeArea link='react-native/expo-apis/camera-example.tsx' />
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='example-location' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Exemplo 2: Acessando a Localização (`expo-location`)</h2>
                    <p>Agora, um exemplo que pede permissão e obtém as coordenadas geográficas atuais do usuário.</p>
                    <p><strong>1. Instalação:</strong></p>
                    <CodeArea code={`npx expo install expo-location`} language='bash' />
                    <p><strong>2. Código:</strong></p>
                    <CodeArea link='react-native/expo-apis/location-example.tsx' />
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='example-storage' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Exemplo 3: Armazenamento Local (`expo-secure-store`)</h2>
                    <p>Quando precisamos salvar informações sensíveis no dispositivo (como tokens de autenticação), não podemos simplesmente usar algo como o <code>localStorage</code> da web. O <code>expo-secure-store</code> salva dados de forma criptografada no dispositivo.</p>
                    <p><strong>1. Instalação:</strong></p>
                    <CodeArea code={`npx expo install expo-secure-store`} language='bash' />
                    <p><strong>2. Código:</strong></p>
                    <CodeArea link='react-native/expo-apis/secure-store-example.tsx' />
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
