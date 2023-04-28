# Select2

## 安装

1. 安装`select2-theme`

   ```bash
   $ npm i @super-abp/select2-theme
   ```

   ```bash
   $ yarn add @super-abp/select2-theme
   ```

2. 安装`SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.Select2.Theme`包

   ```ps
   Install-Package SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.Select2.Theme
   ```

3. 添加`SuperAbpAspNetCoreMvcUiSelect2ThemeModule`模块依赖
   ```csharp
   [DependsOn(typeof(SuperAbpAspNetCoreMvcUiSelect2ThemeModule))]
   public class YourModule : AbpModule
   {
   }
   ```

## 导入 Bundle 文件

```html
<abp-style-bundle name="@Select2Bundles.Styles.Global" />
```

具体可参考[abp bundle](https://docs.abp.io/en/abp/latest/UI/AspNetCore/Bundling-Minification#bundle-contributors)文档

## 注意事项

因为 abp 官方引用的是`select2.min.js`，在使用过程中可能会出现异常。可以使用如下方法解决：

1. 自建一个 ScriptContributor 用以替换官方的 select2.js

```csharp
public class *ScriptContributor : BundleContributor
{
    public override void ConfigureBundle(BundleConfigurationContext context)
    {
        var selectScript = context.Files.Find(t => t.Contains("/libs/select2/js/select2.min.js"));
        context.Files.InsertBefore(selectScript, "/libs/select2/js/select2.full.min.js");
        context.Files.InsertBefore(selectScript, "/libs/select2/js/i18n/zh-CN.js");
        context.Files.Remove(selectScript);
    }
}
```

2. 在 Module 中使用自建的 ScriptContributor

```csharp
Configure<AbpBundlingOptions>(options =>
{
    options.ScriptBundles.Configure(
      BasicThemeBundles.Scripts.Global,
      // LeptonXLiteThemeBundles.Styles.Global 根据你使用的主题选择
        bundle =>
        {
            bundle.AddContributors(typeof(*ScriptContributor));
        });
});
```
