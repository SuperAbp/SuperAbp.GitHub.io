# BootstrapIcons

## 安装

1. 安装`bootstrap-icons`
   ```bash
   $ npm i bootstrap-icons
   ```

   ```bash
   $ yarn add bootstrap-icons
   ```

2. 安装`SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.BootstrapIcons`包

   ```ps
   Install-Package SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.BootstrapIcons
   ```

3. 添加`SuperAbpAspNetCoreMvcUiBootstrapIconModule`模块依赖

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

## 导入Bundle文件

``` html
<abp-style-bundle name="@BootstrapIconBundles.Styles.Global"/>
```
具体可参考[abp bundle](https://docs.abp.io/en/abp/latest/UI/AspNetCore/Bundling-Minification#bundle-contributors)文档

