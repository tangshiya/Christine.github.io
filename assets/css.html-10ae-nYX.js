import{_ as s,o as n,c as a,a as e}from"./app-C8Xn24jF.js";const l={},i=e(`<h1 id="css-常见问题" tabindex="-1"><a class="header-anchor" href="#css-常见问题"><span>Css 常见问题</span></a></h1><h2 id="less文件引入" tabindex="-1"><a class="header-anchor" href="#less文件引入"><span>less文件引入</span></a></h2><div class="custom-container tip"><p class="custom-container-title">注意</p><p>在less文件中使用@import引用src内的文件时需要这样引入，因为 <code>CSS loader</code> 会把非根路径的url解释为相对路径， 加~前缀才会解释成模块路径。</p></div><p>a.less 文件中引入公共文件 b.less</p><ul><li>使用@import引入文件</li><li>语句末尾要加; 否则会报错</li></ul><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">&#39;../../config&#39;</span><span class="token punctuation">;</span>

<span class="token variable">@import</span> <span class="token string">&quot;~@/assets/style/_mixin&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.ceshi</span><span class="token punctuation">{</span>
  <span class="token comment">//文件引入后可以直接使用公共变量</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@themeColor</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="box-shadow" tabindex="-1"><a class="header-anchor" href="#box-shadow"><span>box-shadow</span></a></h2><blockquote><p><code>box-shadow</code>: h-shadow, v-shadow, blur, spread, color, inset;</p></blockquote><details class="custom-container details"><summary>属性值详细介绍</summary><p>h-shadow：必需的。水平阴影的位置。允许负值 v-shadow：必需的。垂直阴影的位置。允许负值 blur：可选。模糊距离 spread：可选。阴影的大小 color：可选。阴影的颜色。 inset可选。默认外侧阴影，写入inset后默认内侧阴影。</p></details><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>设置左边阴影：
box-shadow：10px 0px 8px -8px darkgrey<span class="token punctuation">;</span>

设置右边阴影
box-shadow：-6px 0px 5px -5px darkgrey<span class="token punctuation">;</span>

设置上方阴影：
box-shadow：0px 6px 5px -5px darkgrey<span class="token punctuation">;</span>

设置下方阴影：
box-shadow：0px -8px 5px -5px darkgrey<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改光标颜色" tabindex="-1"><a class="header-anchor" href="#修改光标颜色"><span>修改光标颜色</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">input</span><span class="token punctuation">{</span>
  <span class="token property">caret-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css文字垂直居中" tabindex="-1"><a class="header-anchor" href="#css文字垂直居中"><span>css文字垂直居中</span></a></h2><ol><li>使用<code>line-height</code>属性使文字垂直居中</li></ol><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>将外部块格式化为表格单元格</li></ol><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>flex布局</li></ol><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="svg" tabindex="-1"><a class="header-anchor" href="#svg"><span>svg</span></a></h2><ol><li><p>修改大小：在 <code>svg</code> 标签中修改<code>width</code>、<code>height</code> 属性（默认单位是px）</p></li><li><p>修改颜色：在 <code>path</code> 标签中修改 <code>fill</code> 属性，值可以是 <code>currentValue</code> 或 <code>颜色值</code></p></li></ol><h2 id="自定义滚动条样式" tabindex="-1"><a class="header-anchor" href="#自定义滚动条样式"><span>自定义滚动条样式</span></a></h2><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token comment">/*定义滚动条样式*/</span>
<span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*定义滑块*/</span>
<span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #d8dfeb<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*定义滚动条轨道*/</span>
<span class="token selector">::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*定义水平方向滚动条样式*/</span>
<span class="token selector">::-webkit-scrollbar:horizontal</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">::-webkit-scrollbar-thumb:hover</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">@text-placeholder-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决滚动条scrollbar出现造成的页面宽度被挤压的问题" tabindex="-1"><a class="header-anchor" href="#解决滚动条scrollbar出现造成的页面宽度被挤压的问题"><span>解决滚动条scrollbar出现造成的页面宽度被挤压的问题</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token property">overflow-y</span><span class="token punctuation">:</span> overlay<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,25),t=[i];function c(p,o){return n(),a("div",null,t)}const r=s(l,[["render",c],["__file","css.html.vue"]]),u=JSON.parse('{"path":"/other/css.html","title":"Css 常见问题","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"less文件引入","slug":"less文件引入","link":"#less文件引入","children":[]},{"level":2,"title":"box-shadow","slug":"box-shadow","link":"#box-shadow","children":[]},{"level":2,"title":"修改光标颜色","slug":"修改光标颜色","link":"#修改光标颜色","children":[]},{"level":2,"title":"css文字垂直居中","slug":"css文字垂直居中","link":"#css文字垂直居中","children":[]},{"level":2,"title":"svg","slug":"svg","link":"#svg","children":[]},{"level":2,"title":"自定义滚动条样式","slug":"自定义滚动条样式","link":"#自定义滚动条样式","children":[]},{"level":2,"title":"解决滚动条scrollbar出现造成的页面宽度被挤压的问题","slug":"解决滚动条scrollbar出现造成的页面宽度被挤压的问题","link":"#解决滚动条scrollbar出现造成的页面宽度被挤压的问题","children":[]}],"git":{"updatedTime":1712924927000,"contributors":[{"name":"Christine-Only","email":"tsy17321289030@163.com","commits":2},{"name":"Christine","email":"tsy17321289030@163.com","commits":1},{"name":"christinesy.tang","email":"christinesy.tang@ap.jll.com","commits":1}]},"filePathRelative":"other/css.md"}');export{r as comp,u as data};
