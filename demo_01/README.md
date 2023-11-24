<!--
 * @Author: shenjilin-home
 * @Date: 2023-11-16 21:09:25
 * @LastEditors: shenjilin-home
 * @LastEditTime: 2023-11-16 22:18:33
 * @Description: 
-->
# webpack-base
webpack 基础学习

## 一、安装依赖
    webpack、webpack-cli
    npm install webpack webpack-cli -D 
    添加 -D 的意思是项目开发依赖
## 二、运行
    开发代码，使用pnpm webpack打包代码

## 三、入口和出口
    1. 创建 webpack.config.js 配置文件
    2. entry 打包的入口文件
        一个入口文件，entry: './src/xx.js', 默认是 ./src/inde.js
        多个入口文件，entry: ['./src/a.js', './src/b.js']
        打包生成多个文件 entry: {
                        a: './src/a.js',
                        b: './src/b.js'
                     }
                    此时打包结果会出现两个文件（a.js, b.js)
    3. output 打包的出口文件
        output: {
            filename: 'bundle-[name]-[id]-[hash].js' // 打包后的输出的文件名
            path: path.resolve(__dirname, 'dist'), // 指定输出的文件目录。必须是绝对的路径（使用 node path）
            clean: true, // 自动清理打包目录
        }
    