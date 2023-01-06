import{d as n,c as s,f as e,o as t}from"./index.1897f2a8.js";const p={class:"markdown"},o=e(`<h1 id="media" tabindex="-1"><a href="https://github.com/SuperAbp/Media">Media</a> <a class="header-anchor" href="#media">#</a></h1><h2 id="%E5%AE%89%E8%A3%85" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#%E5%AE%89%E8%A3%85">#</a></h2><ol><li><p>\u5B89\u88C5<a href="https://github.com/SuperAbp/Media">SuperAbp.Media.*</a>\u5305</p><pre class="language-ps"><code class="language-ps">Install-Package SuperAbp.Media.HttpApi
Install-Package SuperAbp.Media.Application
Install-Package SuperAbp.Media.Application.Contracts
Install-Package SuperAbp.Media.Domain
Install-Package SuperAbp.Media.Domain.Shared
Install-Package SuperAbp.Media.EntityFrameworkCore
</code></pre></li><li><p>\u914D\u7F6E\u6570\u636E\u5E93</p><p>\u4FEE\u6539<code class="">YourCompany.YourModule.EntityFrameworkCore</code>\u4E0B\u7684<code class="">*DbContext.cs</code>\u6587\u4EF6</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnModelCreating</span><span class="token punctuation">(</span><span class="token class-name">ModelBuilder</span> builder<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    builder<span class="token punctuation">.</span><span class="token function">ConfigureMedia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//... other code</span>
<span class="token punctuation">}</span>
</code></pre></li><li><p>\u6DFB\u52A0\u6570\u636E\u5E93\u8DEF\u5F84\u5B57\u7B26\u4E32</p><pre class="language-json"><code class="language-json"><span class="token property">&quot;ConnectionStrings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;SuperAbpMedia&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YourConnectionStrings&quot;</span>
<span class="token punctuation">}</span>
</code></pre></li><li><p>\u8FDB\u884CEfCore\u6570\u636E\u8FC1\u79FB</p></li></ol><h2 id="%E4%BD%BF%E7%94%A8" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#%E4%BD%BF%E7%94%A8">#</a></h2><p>\u4F7F\u7528http post\u65B9\u5F0F\u4E0A\u4F20\u6587\u4EF6</p>`,5),u=[o],d={},k="",h=n({__name:"media",setup(c,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(r,l)=>(t(),s("div",p,u))}});export{h as default,k as excerpt,d as frontmatter};
