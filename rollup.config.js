import {nodeResolve} from '@rollup/plugin-node-resolve';
import {terser} from "rollup-plugin-terser";

export default {
    input: './index.js',
    output: [{
        file: './dist/xeokit-bim-viewer.min.es.js',
        format: 'es',
        name: 'BIM'
    },
    {
        file: './dist/xeokit-bim-viewer.min.umd.js',
        format: 'umd',
        name: 'BIM'
    }],
    plugins: [
        nodeResolve(),
         terser()
    ]
}