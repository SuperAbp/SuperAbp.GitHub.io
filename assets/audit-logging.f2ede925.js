import{d as s,c as a,f as p,o as t}from"./index.526f0433.js";const o={class:"markdown"},e=p(`<h1 id="auditlogging" tabindex="-1"><a href="https://github.com/SuperAbp/AuditLogging">AuditLogging</a> <a class="header-anchor" href="#auditlogging">#</a></h1><p>\u672C\u9879\u76EE\u4F9D\u8D56<code class="">Volo.Abp.AuditLogging</code>\u6A21\u5757\uFF0C\u6545\u9700\u8981\u5148\u5B8C\u6210\u5BF9 AuditLogging Module \u7684\u76F8\u5173\u914D\u7F6E\u3002\uFF08\u672C\u9879\u76EE\u4F1A\u81EA\u52A8\u5B89\u88C5\u5BF9<code class="">Volo.Abp.AuditLogging</code>\u6A21\u5757\u7684\u4F9D\u8D56\uFF09</p><h2 id="%E4%BE%9D%E8%B5%96%E5%8C%85%E5%AE%89%E8%A3%85" tabindex="-1">\u4F9D\u8D56\u5305\u5B89\u88C5 <a class="header-anchor" href="#%E4%BE%9D%E8%B5%96%E5%8C%85%E5%AE%89%E8%A3%85">#</a></h2><ol><li><p>\u5B89\u88C5<a href="https://github.com/SuperAbp/AuditLogging">SuperAbp.AuditLogging.*</a>\u5305\u5230\u5BF9\u5E94\u7684\u9879\u76EE\u4E2D</p><pre class="language-ps"><code class="language-ps">Install-Package SuperAbp.AuditLogging.Web
Install-Package SuperAbp.AuditLogging.HttpApi
Install-Package SuperAbp.AuditLogging.Application
Install-Package SuperAbp.AuditLogging.Application.Contracts
Install-Package SuperAbp.AuditLogging.Domain
Install-Package SuperAbp.AuditLogging.Domain.Shared
Install-Package SuperAbp.AuditLogging.EntityFrameworkCore
</code></pre></li><li><p>\u6DFB\u52A0 Module \u4F9D\u8D56\u5230\u5BF9\u5E94\u7684\u6A21\u5757\u4E2D\uFF0C\u6CA1\u6709\u7684\u9879\u76EE\u5219\u8DF3\u8FC7</p><pre class="language-csharp"><code class="language-csharp"><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DependsOn</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">SuperAbpAuditLoggingWebModule</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token operator">*</span>WebModule <span class="token punctuation">:</span> AbpModule
<span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DependsOn</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">SuperAbpAuditLoggingHttpApiModule</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token operator">*</span>HttpApiModule <span class="token punctuation">:</span> AbpModule
<span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DependsOn</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">SuperAbpAuditLoggingApplicationModule</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token operator">*</span>ApplicationModule <span class="token punctuation">:</span> AbpModule
<span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DependsOn</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">SuperAbpAuditLoggingApplicationContractsModule</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token operator">*</span>ApplicationContractsModule <span class="token punctuation">:</span> AbpModule
<span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DependsOn</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">SuperAbpAuditLoggingDomainModule</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token operator">*</span>DomainModule <span class="token punctuation">:</span> AbpModule
<span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DependsOn</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">SuperAbpAuditLoggingDomainSharedModule</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token operator">*</span>DomainSharedModule <span class="token punctuation">:</span> AbpModule
<span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DependsOn</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">SuperAbpAuditLoggingEntityFrameworkCoreModule</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token operator">*</span>EntityFrameworkCoreModule <span class="token punctuation">:</span> AbpModule
<span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre></li><li><p>\u914D\u7F6E\u6570\u636E\u5E93</p><p>\u4FEE\u6539<code class="">*.EntityFrameworkCore</code>\u9879\u76EE\u4E0B\u7684<code class="">*DbContext.cs</code>\u6587\u4EF6</p><pre class="language-csharp"><code class="language-csharp"><span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnModelCreating</span><span class="token punctuation">(</span><span class="token class-name">ModelBuilder</span> builder<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    builder<span class="token punctuation">.</span><span class="token function">ConfigureAuditLogging</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// builder.ConfigureSuperAbpAuditLogging(); \u4E5F\u53EF\u4EE5</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre></li><li><p>\u6DFB\u52A0\u6570\u636E\u5E93\u8DEF\u5F84\u5B57\u7B26\u4E32</p><pre class="language-json"><code class="language-json"><span class="token property">&quot;ConnectionStrings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;AbpAuditLogging&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YourConnectionStrings&quot;</span>
<span class="token punctuation">}</span>
</code></pre></li><li><p>\u8FDB\u884C EfCore \u6570\u636E\u8FC1\u79FB</p></li></ol><h2 id="ui" tabindex="-1">UI <a class="header-anchor" href="#ui">#</a></h2><h3 id="mvc-ui" tabindex="-1">MVC UI <a class="header-anchor" href="#mvc-ui">#</a></h3><p>\u8FD9\u4E2A\u6A21\u5757\u5728<code class="">Administration</code>\u83DC\u5355\u4E0B\u6DFB\u52A0\u4E86\u4E00\u4E2A<code class="">\u5BA1\u8BA1\u65E5\u5FD7</code>\u83DC\u5355\u9879 \u7528\u6237\u9ED8\u8BA4\u662F\u6CA1\u6709\u6743\u9650\u7684\uFF0C \u5982\u679C\u9700\u8981\u67E5\u770B\u8BF7\u6253\u5F00\u7528\u6237\u6216\u89D2\u8272\u7684\u6743\u9650\u5BF9\u8BDD\u6846\u8D4B\u4E88\u5176\u6743\u9650</p><h3 id="ng-alain" tabindex="-1">Ng-alain <a class="header-anchor" href="#ng-alain">#</a></h3><ol><li><p>\u5B89\u88C5</p><pre class="language-bash"><code class="language-bash">$ <span class="token function">npm</span> i @super-abp/ng.audit-logging
</code></pre><pre class="language-bash"><code class="language-bash">$ <span class="token function">yarn</span> <span class="token function">add</span> @super-abp/ng.audit-logging
</code></pre></li><li><p>\u914D\u7F6E\u8DEF\u7531</p><p>\u4FEE\u6539<code class="">routes-routing.module.ts</code>\u6587\u4EF6</p><pre class="language-typescript"><code class="language-typescript"><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;menu-management&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">loadChildren</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@super-abp/ng.menu-management&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> m<span class="token punctuation">.</span>MenuManagementModule
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></li></ol>`,9),u=[e],r={},d="",g=s({__name:"audit-logging",setup(c,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(l,i)=>(t(),a("div",o,u))}});export{g as default,d as excerpt,r as frontmatter};
