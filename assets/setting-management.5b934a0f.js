import{d as a,c as s,f as t,o as p}from"./index.a1b1cf49.js";const e={class:"markdown"},o=t(`<h1 id="settingmanagement" tabindex="-1"><a href="https://github.com/SuperAbp/npm">SettingManagement</a> <a class="header-anchor" href="#settingmanagement">#</a></h1><h2 id="%E5%AE%89%E8%A3%85" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#%E5%AE%89%E8%A3%85">#</a></h2><ol><li><p>\u5B89\u88C5\u5305</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">npm</span> i @super-abp/ng.setting-management
</code></pre><pre class="language-bash"><code class="language-bash">$ <span class="token function">yarn</span> <span class="token function">add</span> @super-abp/ng.setting-management
</code></pre></li><li><p>\u4FEE\u6539 Ng-Alain \u9879\u76EE</p><p>\u4FEE\u6539<code class="">app.module.ts</code>\u6587\u4EF6</p><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> SettingManagementConfigModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@super-abp/ng.setting-management/config&#39;</span><span class="token punctuation">;</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">NgModule</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 imports<span class="token operator">:</span> <span class="token punctuation">[</span>
     <span class="token operator">...</span>
     SettingManagementConfigModule<span class="token punctuation">.</span><span class="token function">forRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></li><li><p>\u914D\u7F6E\u8DEF\u7531</p><p>\u4FEE\u6539<code class="">routes-routing.module.ts</code>\u6587\u4EF6</p><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> routes<span class="token operator">:</span> Routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;setting-management&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">loadChildren</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@super-abp/ng.setting-management&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> m<span class="token punctuation">.</span>SettingManagementModule
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></li><li><p>\u914D\u7F6E\u83DC\u5355</p><p>\u914D\u7F6E\u4F60\u7684<a href="https://ng-alain.com/theme/menu">\u83DC\u5355</a></p><pre class="language-typescript"><code class="language-typescript"><span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">&#39;AbpSettingManagement::Settings&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8FD9\u4E2A\u662F\u5FC5\u987B\u7684</span>
    text<span class="token operator">:</span> <span class="token string">&#39;Your Text&#39;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&#39;/setting-management/setting&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></li></ol>`,3),c=[o],k={},g="",m=a({__name:"setting-management",setup(u,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(l,i)=>(p(),s("div",e,c))}});export{m as default,g as excerpt,k as frontmatter};
