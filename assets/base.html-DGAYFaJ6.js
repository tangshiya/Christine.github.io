import{_ as e,o as a,c as s,a as t}from"./app-C8Xn24jF.js";const n={},i=t(`<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h1><h2 id="为什么要使用typescript" tabindex="-1"><a class="header-anchor" href="#为什么要使用typescript"><span>为什么要使用TypeScript?</span></a></h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>简单来说就是因为JavaScript是动态类型，很多错误只有在运行时才会被发现，而TypeScript提供了一套静态检测机制，可以帮助我们在编译时发现错误。</p></div><h2 id="搭建typescript学习环境" tabindex="-1"><a class="header-anchor" href="#搭建typescript学习环境"><span>搭建TypeScript学习环境</span></a></h2><div class="custom-container tip"><p class="custom-container-title">注意</p><p>TypeScript版本：V4.5.3</p><p>JavaScript版本：ES2020</p></div><h3 id="安装最新版typescript" tabindex="-1"><a class="header-anchor" href="#安装最新版typescript"><span>安装最新版TypeScript</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="验证安装" tabindex="-1"><a class="header-anchor" href="#验证安装"><span>验证安装</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>tsc <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装成功会显示版本号</p><h3 id="安装-ts-node" tabindex="-1"><a class="header-anchor" href="#安装-ts-node"><span>安装 ts-node</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> ts-node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建一个-tsconfig-json-文件" tabindex="-1"><a class="header-anchor" href="#创建一个-tsconfig-json-文件"><span>创建一个 tsconfig.json 文件</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>tsc <span class="token parameter variable">--init</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后新建index.ts，输入相关练习代码后，执行<code>ts-node index.ts</code>即可。</p>`,15),c=[i];function r(l,p){return a(),s("div",null,c)}const o=e(n,[["render",r],["__file","base.html.vue"]]),h=JSON.parse('{"path":"/typescript/base.html","title":"介绍","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"为什么要使用TypeScript?","slug":"为什么要使用typescript","link":"#为什么要使用typescript","children":[]},{"level":2,"title":"搭建TypeScript学习环境","slug":"搭建typescript学习环境","link":"#搭建typescript学习环境","children":[{"level":3,"title":"安装最新版TypeScript","slug":"安装最新版typescript","link":"#安装最新版typescript","children":[]},{"level":3,"title":"验证安装","slug":"验证安装","link":"#验证安装","children":[]},{"level":3,"title":"安装 ts-node","slug":"安装-ts-node","link":"#安装-ts-node","children":[]},{"level":3,"title":"创建一个 tsconfig.json 文件","slug":"创建一个-tsconfig-json-文件","link":"#创建一个-tsconfig-json-文件","children":[]}]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"typescript/base.md"}');export{o as comp,h as data};