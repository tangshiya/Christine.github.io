import comp from "/Users/Berry/Downloads/blog/docs/.vuepress/.temp/pages/interview/webpack.html.vue"
const data = JSON.parse("{\"path\":\"/interview/webpack.html\",\"title\":\"Webpack\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"减少 Webpack 打包时间\",\"slug\":\"减少-webpack-打包时间\",\"link\":\"#减少-webpack-打包时间\",\"children\":[{\"level\":3,\"title\":\"优化 Loader\",\"slug\":\"优化-loader\",\"link\":\"#优化-loader\",\"children\":[]},{\"level\":3,\"title\":\"HappyPack\",\"slug\":\"happypack\",\"link\":\"#happypack\",\"children\":[]},{\"level\":3,\"title\":\"DllPlugin\",\"slug\":\"dllplugin\",\"link\":\"#dllplugin\",\"children\":[]},{\"level\":3,\"title\":\"一些小的优化点\",\"slug\":\"一些小的优化点\",\"link\":\"#一些小的优化点\",\"children\":[]}]},{\"level\":2,\"title\":\"减少 Webpack 打包后的文件体积\",\"slug\":\"减少-webpack-打包后的文件体积\",\"link\":\"#减少-webpack-打包后的文件体积\",\"children\":[{\"level\":3,\"title\":\"按需加载\",\"slug\":\"按需加载\",\"link\":\"#按需加载\",\"children\":[]},{\"level\":3,\"title\":\"Scope Hoisting\",\"slug\":\"scope-hoisting\",\"link\":\"#scope-hoisting\",\"children\":[]},{\"level\":3,\"title\":\"Tree Shaking\",\"slug\":\"tree-shaking\",\"link\":\"#tree-shaking\",\"children\":[]},{\"level\":3,\"title\":\"代码压缩\",\"slug\":\"代码压缩\",\"link\":\"#代码压缩\",\"children\":[]},{\"level\":3,\"title\":\"懒加载\",\"slug\":\"懒加载\",\"link\":\"#懒加载\",\"children\":[]}]},{\"level\":2,\"title\":\"HMR 实现原理\",\"slug\":\"hmr-实现原理\",\"link\":\"#hmr-实现原理\",\"children\":[]},{\"level\":2,\"title\":\"Vite 和 Webpack对比\",\"slug\":\"vite-和-webpack对比\",\"link\":\"#vite-和-webpack对比\",\"children\":[{\"level\":3,\"title\":\"Vite 优点\",\"slug\":\"vite-优点\",\"link\":\"#vite-优点\",\"children\":[]},{\"level\":3,\"title\":\"Vite 缺点\",\"slug\":\"vite-缺点\",\"link\":\"#vite-缺点\",\"children\":[]}]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"interview/webpack.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
