import{d as s,c as a,f as t,o as p}from"./index.c28129e1.js";const e={class:"markdown"},o=t(`<h1 id="identity" tabindex="-1"><a href="https://github.com/SuperAbp/npm">Identity</a> <a class="header-anchor" href="#identity">#</a></h1><h2 id="%E5%AE%89%E8%A3%85" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#%E5%AE%89%E8%A3%85">#</a></h2><ol><li><p>\u5B89\u88C5<code class="">ZTree</code></p><pre class="language-bash"><code class="language-bash">$ <span class="token function">npm</span> i @super-abp/ng.identity
</code></pre><pre class="language-bash"><code class="language-bash">$ <span class="token function">yarn</span> <span class="token function">add</span> @super-abp/ng.identity
</code></pre></li><li><p>\u914D\u7F6E\u8DEF\u7531</p><p>\u4FEE\u6539<code class="">routes-routing.module.ts</code>\u6587\u4EF6</p><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> routes<span class="token operator">:</span> Routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;identity&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">loadChildren</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@super-abp/ng.identity&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> m<span class="token punctuation">.</span>SettingManagementModule
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></li><li><p>\u914D\u7F6E\u83DC\u5355</p><p>\u914D\u7F6E\u4F60\u7684<a href="https://ng-alain.com/theme/menu">\u83DC\u5355</a></p><pre class="language-typescript"><code class="language-typescript"><span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&#39;Your Text&#39;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&#39;/identity/user&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&#39;Your Text&#39;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&#39;/identity/role&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></li></ol>`,3),c=[o],k={},d="",g=s({__name:"identity",setup(u,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(l,i)=>(p(),a("div",e,c))}});export{g as default,d as excerpt,k as frontmatter};
