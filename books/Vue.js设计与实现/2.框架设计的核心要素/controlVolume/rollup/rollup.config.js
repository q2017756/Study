import replace from '@rollup/plugin-replace';
console.log(111, process.env.NODE_ENV)
export default {
    input: 'index.js',
    output: {
        file: './dist/index.js',
        format: 'cjs'
    },
    plugins: [
        replace({
            __DEV__: (process.env.NODE_ENV || 'production')!== 'production'
        })
    ]
};