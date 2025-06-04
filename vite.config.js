import {defineConfig} from "vite";
import {dirname, resolve} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    assetsInclude: ['**/*.hbs', '**/*.svg'],
    assetsInlineLimit: 0,
    base: '/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html')
            }
        }
    }
})
