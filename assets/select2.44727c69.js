import{d as a,c as e,f as n,o as t}from"./index.1897f2a8.js";const p={class:"markdown"},o=n(`<h1 id="select2" tabindex="-1">Select2 <a class="header-anchor" href="#select2">#</a></h1><h2 id="%E5%AE%89%E8%A3%85" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#%E5%AE%89%E8%A3%85">#</a></h2><ol><li><p>\u5B89\u88C5<code class="">select2-bootstrap-5-theme</code></p><pre class="language-bash"><code class="language-bash">$ <span class="token function">npm</span> i select2-bootstrap-5-theme
</code></pre><pre class="language-bash"><code class="language-bash">$ <span class="token function">yarn</span> <span class="token function">add</span> select2-bootstrap-5-theme
</code></pre></li><li><p>\u5B89\u88C5<code class="">SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.Select2.Theme</code>\u5305</p><pre class="language-ps"><code class="language-ps">Install-Package SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.Select2.Theme
</code></pre></li><li><p>\u6DFB\u52A0<code class="">SuperAbpAspNetCoreMvcUiSelect2ThemeModule</code>\u6A21\u5757\u4F9D\u8D56</p><pre class="language-csharp"><code class="language-csharp"><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DependsOn</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">SuperAbpAspNetCoreMvcUiSelect2ThemeModule</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">YourModule</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AbpModule</span></span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></li></ol><h2 id="resourcemapping.js" tabindex="-1">resourcemapping.js <a class="header-anchor" href="#resourcemapping.js">#</a></h2><pre class="language-javascript"><code class="language-javascript"><span class="token string-property property">&quot;@node_modules/select2-bootstrap-5-theme/dist/*.*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@libsselect2-bootstrap5-theme/&quot;</span><span class="token punctuation">,</span>
<span class="token string-property property">&quot;@node_modules/select2-bootstrap-5-theme/dist/*.*.*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@libsselect2-bootstrap5-theme/&quot;</span><span class="token punctuation">,</span>
<span class="token string-property property">&quot;@node_modules/select2-bootstrap-5-theme/dist/*.*.*.*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@libsselect2-bootstrap5-theme/&quot;</span>
</code></pre><h2 id="%E5%AF%BC%E5%85%A5bundle%E6%96%87%E4%BB%B6" tabindex="-1">\u5BFC\u5165Bundle\u6587\u4EF6 <a class="header-anchor" href="#%E5%AF%BC%E5%85%A5bundle%E6%96%87%E4%BB%B6">#</a></h2><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>abp-style-bundle</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@Select2Bundles.Styles.Global<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><p>\u5177\u4F53\u53EF\u53C2\u8003<a href="https://docs.abp.io/en/abp/latest/UI/AspNetCore/Bundling-Minification#bundle-contributors">abp bundle</a>\u6587\u6863</p>`,8),c=[o],d={},k="",h=a({__name:"select2",setup(l,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(u,r)=>(t(),e("div",p,c))}});export{h as default,k as excerpt,d as frontmatter};
