import{d as s,c as a,f as p,o as t}from"./index.c28129e1.js";const e={class:"markdown"},o=p(`<h1 id="media" tabindex="-1"><a href="https://github.com/SuperAbp/Media">Media</a> <a class="header-anchor" href="#media">#</a></h1><p>\u672C\u9879\u76EE\u5C5E\u4E8E\u5BF9<code class="">Volo.Abp.BlobStoring</code>\u7684\u7B80\u5355\u5C01\u88C5\uFF0C\u6545\u9700\u8981\u5148\u5B8C\u6210\u5BF9 Blob \u63D0\u4F9B\u7A0B\u5E8F\u7684\u5B89\u88C5</p><h2 id="%E5%AE%89%E8%A3%85" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#%E5%AE%89%E8%A3%85">#</a></h2><ol><li><p>\u53C2\u8003<a href="https://docs.abp.io/en/abp/latest/Blob-Storing#blob-storage-providers">Abp \u6587\u6863</a>\u5B89\u88C5 Blob Storage Providers</p></li><li><p>\u5B89\u88C5<a href="https://github.com/SuperAbp/Media">SuperAbp.Media.*</a>\u5305\u5230\u5BF9\u5E94\u7684\u9879\u76EE\u4E2D</p><pre class="language-ps"><code class="language-ps">Install-Package SuperAbp.Media.HttpApi
Install-Package SuperAbp.Media.Application
Install-Package SuperAbp.Media.Application.Contracts
Install-Package SuperAbp.Media.Domain
Install-Package SuperAbp.Media.Domain.Shared
Install-Package SuperAbp.Media.EntityFrameworkCore
</code></pre></li><li><p>\u6DFB\u52A0 Module \u4F9D\u8D56\u5230\u5BF9\u5E94\u7684\u6A21\u5757\u4E2D</p><pre class="language-csharp"><code class="language-csharp"><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DependsOn</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">SuperAbpMediaHttpApiModule</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token operator">*</span>HttpApiModule <span class="token punctuation">:</span> AbpModule
<span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DependsOn</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">SuperAbpMediaApplicationModule</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token operator">*</span>ApplicationModule <span class="token punctuation">:</span> AbpModule
<span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DependsOn</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">SuperAbpMediaApplicationContractsModule</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token operator">*</span>ApplicationContractsModule <span class="token punctuation">:</span> AbpModule
<span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DependsOn</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">SuperAbpMediaDomainModule</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token operator">*</span>DomainModule <span class="token punctuation">:</span> AbpModule
<span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DependsOn</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">SuperAbpMediaDomainSharedModule</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token operator">*</span>DomainSharedModule <span class="token punctuation">:</span> AbpModule
<span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DependsOn</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">SuperAbpMediaEntityFrameworkCoreModule</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token operator">*</span>EntityFrameworkCoreModule <span class="token punctuation">:</span> AbpModule
<span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre></li><li><p>\u914D\u7F6E\u6570\u636E\u5E93</p><p>\u4FEE\u6539<code class="">*.EntityFrameworkCore</code>\u9879\u76EE\u4E0B\u7684<code class="">*DbContext.cs</code>\u6587\u4EF6</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnModelCreating</span><span class="token punctuation">(</span><span class="token class-name">ModelBuilder</span> builder<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    builder<span class="token punctuation">.</span><span class="token function">ConfigureMedia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre></li><li><p>\u6DFB\u52A0\u6570\u636E\u5E93\u8DEF\u5F84\u5B57\u7B26\u4E32</p><pre class="language-json"><code class="language-json"><span class="token property">&quot;ConnectionStrings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;SuperAbpMedia&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YourConnectionStrings&quot;</span>
<span class="token punctuation">}</span>
</code></pre></li><li><p>\u8FDB\u884C EfCore \u6570\u636E\u8FC1\u79FB</p></li></ol><h2 id="%E4%BD%BF%E7%94%A8" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#%E4%BD%BF%E7%94%A8">#</a></h2><p>\u4F7F\u7528 http post \u65B9\u5F0F\u4E0A\u4F20\u6587\u4EF6 <code class="">/api/super-abp/media</code></p>`,6),u=[o],r={},d="",b=s({__name:"media",setup(c,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(l,i)=>(t(),a("div",e,u))}});export{b as default,d as excerpt,r as frontmatter};
