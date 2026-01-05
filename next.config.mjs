import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const nextConfig = {
    reactStrictMode: true, // if false, causes double render on component mount (dev)
    outputFileTracingRoot: resolve(__dirname),
}

export default nextConfig
