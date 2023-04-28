# ZTree

## 安装

1. 安装`ZTree`

   ```bash
   $ npm i @super-abp/ztree
   ```

   ```bash
   $ yarn add @super-abp/ztree
   ```

2. 安装`SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.ZTree`包

   ```ps
   Install-Package SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.ZTree
   ```

3. 添加`SuperAbpAspNetCoreMvcUiZTreeModule`模块依赖
   ```csharp
   [DependsOn(typeof(SuperAbpAspNetCoreMvcUiZTreeModule))]
   public class YourModule : AbpModule
   {
   }
   ```

## 导入 Bundle 文件

```html
<abp-style-bundle name="@ZTreeBundles.Styles.Global" />

<abp-script-bundle name="@ZTreeBundles.Scripts.Global" />
```

具体可参考[abp bundle](https://docs.abp.io/en/abp/latest/UI/AspNetCore/Bundling-Minification#bundle-contributors)文档

## 配置

```csharp
Configure<SuperAbpZTreeOptions>(options =>
{
    // 进行配置
    // Theme：主题
    // EnableEdit：启用编辑
    // EnableCheck：启用Checkbox/Radio
    // EnableHide：启用隐藏
});
```
