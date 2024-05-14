import{_ as n,o as s,c as a,a as t}from"./app-C8Xn24jF.js";const e="/blog/sourceMap.jpg",p={},c=t(`<h1 id="react-常见问题" tabindex="-1"><a class="header-anchor" href="#react-常见问题"><span>React 常见问题</span></a></h1><h2 id="usestate" tabindex="-1"><a class="header-anchor" href="#usestate"><span>useState</span></a></h2><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">IObject</span> <span class="token punctuation">{</span>
  num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

第一种写法
<span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>IObject <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

第二种写法
<span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>IObject<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> IObject<span class="token punctuation">)</span><span class="token punctuation">;</span>

第三种写法
<span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>IObject<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>num<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如果没有初始值,那么可以使用联合属性将初始值设置为null，例如<code>&lt;number | null&gt;</code>，但是在这里需要注意，后续使用state的时候需要进行空值判断,通常使用可选链来进行访问 a?.b -&gt; a &amp;&amp; a.b</p></div><h2 id="useref" tabindex="-1"><a class="header-anchor" href="#useref"><span>useRef</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> inputEl <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onButtonClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>inputEl<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      inputEl<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// Works!</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ref?.current?.focus()</span>
    <span class="token comment">// inputEl.current!.focus() 或者用这种写法也可以解决编译报错的问题</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置source-map后在chrome中仍无法显示webpack-的问题" tabindex="-1"><a class="header-anchor" href="#设置source-map后在chrome中仍无法显示webpack-的问题"><span>设置source-map后在chrome中仍无法显示webpack://的问题</span></a></h2><p>需要勾选下图圈起来的选项</p><p><img src="`+e+`" alt="alt"></p><h2 id="控制台警告" tabindex="-1"><a class="header-anchor" href="#控制台警告"><span>控制台警告</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Warning: Can&#39;t perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>项目中的写法类似下面这样</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  type <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> <span class="token function">getMembershipPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setMembershipPrice</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原因分析" tabindex="-1"><a class="header-anchor" href="#原因分析"><span>原因分析</span></a></h3><p>报错告诉我们无法对已卸载的组件执行状态更新，它表示应用程序中存在内存泄漏。 因为在请求还没返回之前，用户进行了页面跳转，跳转之后当前组件被卸载。而在卸载之后，请求返回，执行await之后的代码，对组件执行状态更新，可是此时组件已经被卸载，所以才会导致报错。</p>`,15),o=[c];function l(i,u){return s(),a("div",null,o)}const d=n(p,[["render",l],["__file","react.html.vue"]]),k=JSON.parse('{"path":"/other/react.html","title":"React 常见问题","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"useState","slug":"usestate","link":"#usestate","children":[]},{"level":2,"title":"useRef","slug":"useref","link":"#useref","children":[]},{"level":2,"title":"设置source-map后在chrome中仍无法显示webpack://的问题","slug":"设置source-map后在chrome中仍无法显示webpack-的问题","link":"#设置source-map后在chrome中仍无法显示webpack-的问题","children":[]},{"level":2,"title":"控制台警告","slug":"控制台警告","link":"#控制台警告","children":[{"level":3,"title":"原因分析","slug":"原因分析","link":"#原因分析","children":[]}]}],"git":{"updatedTime":1712924927000,"contributors":[{"name":"Christine","email":"tsy17321289030@163.com","commits":2},{"name":"christinesy.tang","email":"christinesy.tang@ap.jll.com","commits":2},{"name":"Christine-Only","email":"tsy17321289030@163.com","commits":1}]},"filePathRelative":"other/react.md"}');export{d as comp,k as data};
