# BootstrapIcons

## 安装
1. 安装`SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.BootstrapIcons`包
    > Install-Package SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.BootstrapIcons
2. 添加`SuperAbpAspNetCoreMvcUiBootstrapIconModule`模块依赖
    ``` csharp
    [DependsOn(typeof(SuperAbpAspNetCoreMvcUiBootstrapIconModule))]
    public class YourModule : AbpModule
    {
    }
    ```

## resourcemapping.js
``` javascript
"@node_modules/bootstrap-icons/font/*.*": "@libs/bootstrap-icons/font/",
"@node_modules/bootstrap-icons/font/fonts/*.*": "@libs/bootstrap-iconsfont/fonts/",
"@node_modules/bootstrap-icons/icons/*.*": "@libs/bootstrap-icons/icons",
```
