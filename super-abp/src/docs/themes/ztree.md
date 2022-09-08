# ZTree
## 安装
1. 安装`SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.ZTree`包
> Install-Package SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.ZTree

2. 添加`SuperAbpAspNetCoreMvcUiZTreeModule`模块依赖
``` csharp
[DependsOn(typeof(SuperAbpAspNetCoreMvcUiZTreeModule))]
public class YourModule : AbpModule
{
}

## resourcemapping.js
``` javascript
"@node_modules/@ztree/ztree_v3/js/jquery.ztree.*.*": "@libs/ztree-v3/js",
"@node_modules/@ztree/ztree_v3/js/jquery.ztree.*.*.*": "@libs/ztree-v3js",
"@node_modules/@ztree/ztree_v3/css/demo.css": "@libs/ztree-v3/css/",
"@node_modules/@ztree/ztree_v3/css/awesomeStyle/*.*": "@libs/ztree-v3css/awesomeStyle/",
"@node_modules/@ztree/ztree_v3/css/awesomeStyle/img/*.*": "@libsztree-v3/css/awesomeStyle/img/",
"@node_modules/@ztree/ztree_v3/css/metroStyle/*.*": "@libs/ztree-v3/cssmetroStyle/",
"@node_modules/@ztree/ztree_v3/css/metroStyle/img/*.*": "@libs/ztree-v3css/metroStyle/img/",
"@node_modules/@ztree/ztree_v3/css/zTreeStyle/*.*": "@libs/ztree-v3/csszTreeStyle/",
"@node_modules/@ztree/ztree_v3/css/zTreeStyle/img/*.*": "@libs/ztree-v3css/zTreeStyle/img/",
```

## 配置
``` csharp
Configure<SuperAbpZTreeOptions>(options =>
{
    // 进行配置
    // Theme：主题
    // EnableEdit：启用编辑
    // EnableCheck：启用Checkbox/Radio
    // EnableHide：启用隐藏
});
```