# BootstrapTable

## 安装

1. 安装`BootstrapTable`

   ```bash
   $ npm i @super-abp/bootstrap-table
   ```

   ```bash
   $ yarn add @super-abp/bootstrap-table
   ```

2. 安装`SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.BootstrapTable`包

   ```ps
   Install-Package SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.BootstrapTable
   ```

3. 添加`SuperAbpAspNetCoreMvcUiBootstrapTableModule`模块依赖
   ```csharp
   [DependsOn(typeof(SuperAbpAspNetCoreMvcUiBootstrapTableModule))]
   public class YourModule : AbpModule
   {
   }
   ```

## 导入 Bundle 文件

```html
<abp-style-bundle name="@BootstrapTableBundles.Styles.Global" />

<abp-script-bundle name="@BootstrapTableBundles.Scripts.Global" />
```

具体可参考[abp bundle](https://docs.abp.io/en/abp/latest/UI/AspNetCore/Bundling-Minification#bundle-contributors)文档

## 配置（可选）

```csharp
Configure<SuperAbpBootstrapTableOptions>(options =>
{
    // 进行配置
    // Theme：主题
    // Extensions：扩展集合
});
```
