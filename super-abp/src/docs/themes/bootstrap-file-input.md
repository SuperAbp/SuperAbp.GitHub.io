# BootstrapFileInput

## 安装

1. 安装`bootstrap-fileinput`

   ```bash
   $ npm i @super-abp/bootstrap-fileinput
   ```

   ```bash
   $ yarn add @super-abp/bootstrap-fileinput
   ```

1. 安装`SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.BootstrapFileInput`包

   ```ps
   Install-Package SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.BootstrapFileInput
   ```

1. 添加`SuperAbpAspNetCoreMvcUiBootstrapFileInputModule`模块依赖
   ```csharp
   [DependsOn(typeof(SuperAbpAspNetCoreMvcUiBootstrapFileInputModule))]
   public class YourModule : AbpModule
   {
   }
   ```

## 导入 Bundle 文件

```html
<abp-style-bundle name="@BootstrapFileInputBundles.Styles.Global" />

<abp-script-bundle name="@BootstrapFileInputBundles.Scripts.Global" />
```

具体可参考[abp bundle](https://docs.abp.io/en/abp/latest/UI/AspNetCore/Bundling-Minification#bundle-contributors)文档

## 配置

```csharp
Configure<SuperAbpBootstrapFileInputOptions>(options =>
{
    // 进行配置
    // Theme：主题
    // EnablePiexif：请查看BootstrapFileInput官网的描述
    // EnableSortable：启用排序
});
```
