import{_ as s,o as n,c as a,a as t}from"./app-C8Xn24jF.js";const o={},p=t(`<h1 id="tsconfig-json介绍" tabindex="-1"><a class="header-anchor" href="#tsconfig-json介绍"><span>tsconfig.json介绍</span></a></h1><p>tsconfig.json 是 TypeScript 项目的配置文件。如果一个目录下存在一个 tsconfig.json 文件，那么往往意味着这个目录就是 TypeScript 项目的根目录。</p><p>tsconfig.json 包含 TypeScript 编译的相关配置，通过更改编译配置项，我们可以让 TypeScript 编译出 ES6、ES5、node 的代码。</p><h2 id="tsconfig-json-重要字段" tabindex="-1"><a class="header-anchor" href="#tsconfig-json-重要字段"><span>tsconfig.json 重要字段</span></a></h2><ul><li>files - 设置要编译的文件的名称；</li><li>include - 设置需要进行编译的文件，支持路径模式匹配；</li><li>exclude - 设置无需进行编译的文件，支持路径模式匹配；</li><li>compilerOptions - 设置与编译流程相关的选项。</li></ul><h2 id="compileroptions-选项" tabindex="-1"><a class="header-anchor" href="#compileroptions-选项"><span>compilerOptions 选项</span></a></h2><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 基本选项 */</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// 指定 ECMAScript 目标版本: &#39;ES3&#39; (default), &#39;ES5&#39;, &#39;ES6&#39;/&#39;ES2015&#39;, &#39;ES2016&#39;, &#39;ES2017&#39;, or &#39;ESNEXT&#39;</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>                  <span class="token comment">// 指定使用模块: &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39; or &#39;es2015&#39;</span>
    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                             <span class="token comment">// 指定要包含在编译中的库文件</span>
    <span class="token property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                       <span class="token comment">// 允许编译 javascript 文件</span>
    <span class="token property">&quot;checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                       <span class="token comment">// 报告 javascript 文件中的错误</span>
    <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>                     <span class="token comment">// 指定 jsx 代码的生成: &#39;preserve&#39;, &#39;react-native&#39;, or &#39;react&#39;</span>
    <span class="token property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                   <span class="token comment">// 生成相应的 &#39;.d.ts&#39; 文件</span>
    <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                     <span class="token comment">// 生成相应的 &#39;.map&#39; 文件</span>
    <span class="token property">&quot;outFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// 将输出文件合并为一个文件</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                        <span class="token comment">// 指定输出目录</span>
    <span class="token property">&quot;rootDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// 用来控制输出目录结构 --outDir.</span>
    <span class="token property">&quot;removeComments&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// 删除编译后的所有的注释</span>
    <span class="token property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                        <span class="token comment">// 不生成输出文件</span>
    <span class="token property">&quot;importHelpers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// 从 tslib 导入辅助工具函数</span>
    <span class="token property">&quot;isolatedModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>               <span class="token comment">// 将每个文件做为单独的模块 （与 &#39;ts.transpileModule&#39; 类似）.</span>

    <span class="token comment">/* 严格的类型检查选项 */</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                        <span class="token comment">// 启用所有严格类型检查选项</span>
    <span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// 在表达式和声明上有隐含的 any类型时报错</span>
    <span class="token property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>              <span class="token comment">// 启用严格的 null 检查</span>
    <span class="token property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// 当 this 表达式值为 any 类型的时候，生成一个错误</span>
    <span class="token property">&quot;alwaysStrict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                  <span class="token comment">// 以严格模式检查每个模块，并在每个文件里加入 &#39;use strict&#39;</span>

    <span class="token comment">/* 额外的检查 */</span>
    <span class="token property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// 有未使用的变量时，抛出错误</span>
    <span class="token property">&quot;noUnusedParameters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>            <span class="token comment">// 有未使用的参数时，抛出错误</span>
    <span class="token property">&quot;noImplicitReturns&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>             <span class="token comment">// 并不是所有函数里的代码都有返回值时，抛出错误</span>
    <span class="token property">&quot;noFallthroughCasesInSwitch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>    <span class="token comment">// 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）</span>

    <span class="token comment">/* 模块解析选项 */</span>
    <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>            <span class="token comment">// 选择模块解析策略： &#39;node&#39; (Node.js) or &#39;classic&#39; (TypeScript pre-1.6)</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// 用于解析非相对模块名称的基目录</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>                           <span class="token comment">// 模块名到基于 baseUrl 的路径映射的列表</span>
    <span class="token property">&quot;rootDirs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                        <span class="token comment">// 根文件夹列表，其组合内容表示项目运行时的结构内容</span>
    <span class="token property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                       <span class="token comment">// 包含类型声明的文件列表</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                           <span class="token comment">// 需要包含的类型声明文件名列表</span>
    <span class="token property">&quot;allowSyntheticDefaultImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 允许从没有设置默认导出的模块中默认导入。</span>

    <span class="token comment">/* Source Map Options */</span>
    <span class="token property">&quot;sourceRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                    <span class="token comment">// 指定调试器应该找到 TypeScript 文件而不是源文件的位置</span>
    <span class="token property">&quot;mapRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// 指定调试器应该找到映射文件而不是生成文件的位置</span>
    <span class="token property">&quot;inlineSourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>               <span class="token comment">// 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件</span>
    <span class="token property">&quot;inlineSources&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性</span>

    <span class="token comment">/* 其他选项 */</span>
    <span class="token property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 启用装饰器</span>
    <span class="token property">&quot;emitDecoratorMetadata&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>          <span class="token comment">// 为装饰器提供元数据的支持</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>typeRoots: 用来指定默认的类型声明文件查找路径，默认为node_modules/@types, 指定typeRoots后，TypeScript 编译器会从指定的路径去引入声明文件，而不是node_modules/@types, 比如以下配置会从typings路径下去搜索声明</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./typings&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结</strong></p><ul><li>typeRoots 是 tsconfig 中 compilerOptions 的一个配置项，typeRoots 下面的包会被 ts 编译器自动包含进来，typeRoots 默认指向 node_modules/@types。</li><li>@types 是 scoped packages，和@babel 类似。@types 下的所有包会默认被引入，你可以通过修改 compilerOptions 来修改默认策略。</li><li>types 和 typeRoots 一样也是 compilerOptions 的配置，指定 types 后，typeRoots 下只有被指定的包才会被引入。</li></ul>`,11),e=[p];function c(l,i){return n(),a("div",null,e)}const u=s(o,[["render",c],["__file","tsconfig.html.vue"]]),k=JSON.parse('{"path":"/typescript/tsconfig.html","title":"tsconfig.json介绍","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"tsconfig.json 重要字段","slug":"tsconfig-json-重要字段","link":"#tsconfig-json-重要字段","children":[]},{"level":2,"title":"compilerOptions 选项","slug":"compileroptions-选项","link":"#compileroptions-选项","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"typescript/tsconfig.md"}');export{u as comp,k as data};