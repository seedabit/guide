import PageIndex from '@/components/core/page-index/page-index'
import PathDisplay from '@/components/core/path-display'
import { Divider } from '@/components/ui/divider'
import { Topic } from '@/types/topic'
import React from 'react'

const topics: Topic[] = [
    { title: 'Estilização: O CSS em JavaScript', href: 'title' },
    { title: 'StyleSheet: O Padrão', href: 'stylesheet' },
    { title: 'Layout com Flexbox', href: 'flexbox' },
    { title: 'Layouts Responsivos', href: 'responsive' },
]

export default function Styling() {
    const styledCardCode = `
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function StyledCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Título do Card</Text>
      <Text style={styles.paragraph}>Este é um texto dentro do card.</Text>
    </View>
  );
}

// 1. Criamos nosso objeto de estilos
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra para Android
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    color: '#333',
  },
});
    `;

    const flexboxCode = `
// Exemplo de um header simples com Flexbox
function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.logo}>Logo</Text>
      <Text style={styles.menu}>Menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row', // Alinha os itens horizontalmente
    justifyContent: 'space-between', // Espaço entre os itens
    alignItems: 'center', // Centraliza verticalmente
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  logo: {
    fontWeight: 'bold',
  },
  menu: {
    color: 'blue',
  },
});
    `;

    const dimensionsCode = `
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// Obtém a largura da tela
const screenWidth = Dimensions.get('window').width;

function ResponsiveComponent() {
  // Ajusta o tamanho da fonte com base na largura da tela
  const fontSize = screenWidth > 400 ? 24 : 18;

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: fontSize }]}>
        Este título é responsivo!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Faz o container ocupar 80% da largura da tela
    width: screenWidth * 0.8,
    margin: screenWidth * 0.1, // Centraliza com 10% de margem de cada lado
    padding: 20,
    backgroundColor: 'lightblue',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
});
    `;


    return (
        <div className='w-full h-full flex items-start justify-start md:space-x-10'>
            <div className='w-full md:w-[75%] lg:w-[80%] mt-5 md:mt-0 flex flex-col justify-center gap-4 px-3 md:px-10'>
                <PathDisplay />
                <section id='title' className='flex flex-col gap-4'>
                    <h1 className='text-4xl'>Estilização: O CSS em JavaScript</h1>
                    <p className='text-secondary'>Você já sabe como dar vida a componentes na web com arquivos CSS ou com a ajuda de frameworks como o Tailwind. No React Native, o conceito de separar a lógica da apresentação continua, mas a forma como escrevemos nossos estilos é um pouco diferente. Diga adeus aos arquivos <code>.css</code> e olá aos objetos JavaScript.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='stylesheet' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>StyleSheet: O Padrão do React Native</h2>
                    <p className='text-secondary'>No React Native, todos os estilos são declarados em JavaScript. Em vez de escrever seletores e propriedades em um arquivo separado, nós criamos objetos onde as chaves são as propriedades de estilo (em <code>camelCase</code>, como <code>backgroundColor</code> em vez de <code>background-color</code>) e os valores são as definições de estilo.</p>
                    <p className='text-secondary'>Para organizar e otimizar esse processo, usamos a API <code>StyleSheet</code> do React Native. A principal função que usamos é a <code>StyleSheet.create()</code>. Ela recebe um objeto contendo todos os nossos "seletores" e retorna um objeto de estilos otimizado.</p>
                    <h3 className='text-2xl'>Por que usar StyleSheet.create()?</h3>
                     <ol className='list-decimal list-inside space-y-2 my-2 text-secondary'>
                        <li><strong>Performance:</strong> O StyleSheet processa seus estilos e os envia pela "ponte" para o lado nativo apenas uma vez, de forma mais eficiente.</li>
                        <li><strong>Validação:</strong> Ele valida suas propriedades de estilo. Se você digitar <code>backgrundColor</code> em vez de <code>backgroundColor</code>, o React Native irá avisá-lo do erro.</li>
                    </ol>
                    <h3 className='text-2xl'>Como usar:</h3>
                    <ol className='list-decimal list-inside space-y-2 my-2 text-secondary'>
                        <li>Importe o <code>StyleSheet</code> de <code>react-native</code>.</li>
                        <li>Crie um objeto de estilos usando <code>StyleSheet.create()</code>.</li>
                        <li>Aplique os estilos ao seu componente através da prop <code>style</code>, passando <code>styles.seuEstilo</code>.</li>
                    </ol>
                    <p className='text-secondary'>Veja um exemplo:</p>
                    <pre className='bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto'><code>{styledCardCode}</code></pre>
                    <p className='text-secondary'>Para aplicar múltiplos estilos, basta passá-los em um array: <code>style=&#123;[styles.base, styles.variante]&#125;</code>.</p>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='flexbox' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Layout com Flexbox por Padrão</h2>
                    <p className='text-secondary'>Aqui vem uma das melhores notícias para quem vem do desenvolvimento web moderno: <strong>React Native usa Flexbox por padrão para layout.</strong></p>
                    <p className='text-secondary'>Tudo que você sabe sobre <code>flex</code>, <code>flexDirection</code>, <code>justifyContent</code>, <code>alignItems</code> e <code>gap</code> funciona aqui. A principal diferença é que o <code>flexDirection</code> padrão no React Native é <code>'column'</code> em vez de <code>'row'</code>. Isso faz sentido, já que os aplicativos são, na maioria das vezes, orientados verticalmente.</p>
                    <pre className='bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto'><code>{flexboxCode}</code></pre>
                </section>
                <Divider variant='horizontal' color='secondary' className='w-full' />
                <section id='responsive' className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>Criando Layouts Responsivos</h2>
                    <p className='text-secondary'>As telas de celular variam muito em tamanho e densidade de pixels. Um layout que fica ótimo em um iPhone 14 Pro Max pode parecer apertado em um iPhone SE. Para lidar com isso, precisamos criar layouts que se adaptem.</p>
                    <p className='text-secondary'>A ferramenta mais simples para isso no React Native é a API <strong><code>Dimensions</code></strong>. Ela nos permite obter a largura (<code>width</code>) e a altura (<code>height</code>) da tela do dispositivo em tempo real.</p>
                    <p className='text-secondary'>Com essa informação, podemos ajustar nossos estilos dinamicamente.</p>
                    <pre className='bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto'><code>{dimensionsCode}</code></pre>
                    <p className='text-secondary'>Dominar o <code>StyleSheet</code>, o <code>Flexbox</code> e o uso do <code>Dimensions</code> é o segredo para criar interfaces bonitas e funcionais para qualquer dispositivo com React Native.</p>
                </section>
            </div>
            <PageIndex topics={topics} className='w-[20%] lg:w-[15%]' />
        </div>
    )
}
