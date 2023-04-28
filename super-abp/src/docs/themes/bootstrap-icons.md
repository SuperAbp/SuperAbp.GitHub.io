# BootstrapIcons

## 安装

1. 安装`bootstrap-icons`

   ```bash
   $ npm i @super-abp/bootstrap-icons
   ```

   ```bash
   $ yarn add @super-abp/bootstrap-icons
   ```

2. 安装`SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.BootstrapIcons`包

   ```ps
   Install-Package SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.BootstrapIcons
   ```

3. 添加`SuperAbpAspNetCoreMvcUiBootstrapIconModule`模块依赖

   ```csharp
   [DependsOn(typeof(SuperAbpAspNetCoreMvcUiBootstrapIconModule))]
   public class YourModule : AbpModule
   {
   }
   ```

## 导入 Bundle 文件

```html
<abp-style-bundle name="@BootstrapIconBundles.Styles.Global" />
```

具体可参考[abp bundle](https://docs.abp.io/en/abp/latest/UI/AspNetCore/Bundling-Minification#bundle-contributors)文档
