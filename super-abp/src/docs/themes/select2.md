# Select2

## 安装
1. 安装`select2-bootstrap-5-theme`

   ```bash
   $ npm i select2-bootstrap-5-theme
   ```

   ```bash
   $ yarn add select2-bootstrap-5-theme
   ```

2. 安装`SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.Select2.Theme`包

   ```ps
   Install-Package SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.Select2.Theme
   ```

3. 添加`SuperAbpAspNetCoreMvcUiSelect2ThemeModule`模块依赖
    ``` csharp
    [DependsOn(typeof(SuperAbpAspNetCoreMvcUiSelect2ThemeModule))]
    public class YourModule : AbpModule
    {
    }
    ```

## resourcemapping.js
``` javascript
"@node_modules/select2-bootstrap-5-theme/dist/*.*": "@libsselect2-bootstrap5-theme/",
"@node_modules/select2-bootstrap-5-theme/dist/*.*.*": "@libsselect2-bootstrap5-theme/",
"@node_modules/select2-bootstrap-5-theme/dist/*.*.*.*": "@libsselect2-bootstrap5-theme/"
```

## 导入Bundle文件

``` html
<abp-style-bundle name="@Select2Bundles.Styles.Global"/>
```
具体可参考[abp bundle](https://docs.abp.io/en/abp/latest/UI/AspNetCore/Bundling-Minification#bundle-contributors)文档

