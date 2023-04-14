# webpack 面试题

### 1.webpack 的 4 大核心理念，编译原理

##### webpack 的四大核心理念是：入口（entry）、出口（output）、加载气（loader）和插件（plugin）

- **入口（entry）：** webpack 会从指定的入口文件开始，递归的解析出所有依赖关系，最终生成一颗完成的依赖关系树
- **出口（output）：** webpack 会将所有依赖关系打包成一个或多个输出文件，通过指定输出文件名和路径来控制打包结果
- **加载器（loader）：** webpack 通过加载器来处理各种类型的文件，将其转换为可以被打包的模块
- **插件（plugin）：** webpack 通过插件来扩展其功能，例如优化打包结果，提取公共代码、压缩代码等

**注：一切皆为模块，由于 webpack 只支持 js 文件，所以需要用 loader 转换为 webpack 支持的模块，其中 plugin 用于扩张 webpack 的功能，在 webpack 构建生命周期的过程中， 在合适的时机做了合适的事情。**

##### webpack 的编译原理可以分为以下几个步骤：

- **读取配置文件：** webpack 会读取指定的配置文件，并解析其中的各种配置项
- **解析依赖关系：** webpack 会根据入口文件递归的解析出所有的依赖关系，生成依赖关系树
- **加载模块：** webpack 会根据依赖关系，通过加载器加载各个模块，并将其转换为可以被打包的模块
- **打包模块：** webpack 会根据依赖关系树，将所有的模块打包成一个或多个输出文件
- **优化打包结果：** webpack 会根据配置项和插件的设置，对打包结果进行优化，例如提取公共代码、压缩代码等
- **输出打包结果：** webpack 会将打包结果输出到指定的文件夹中，供浏览器或服务器加载

### 2.webpack 构建优化

- **提取公共库，避免重复引用：** 使用 DLLPlugin，把第三方库文件分离出来单独编译，并且缓存；极大的减少业务页面的编译时间。dll 方式也就是通过配置，告诉 webpoack 指定库在项目中的位置，从而直接引入，不将其打包在内
- **happypack：** 多线程解析文件，如 babel-loader 等耗时较长的
- **缓存：** cache-loader
- **include/exclude：** loaders 应尽可能配置解析路径 include 参数，排除路径 exclude 参数， 减少解析时查询范围
- **devtool：** dev 阶段 adevtool 设置成 cheap-module-eval-source-map，已经能满足调试需求，编译能更快
- **product 阶段去掉 source-map**
