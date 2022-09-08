# Select2

## 安装
1. 安装`Select2`
    > npm i select2
2. 安装`SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.Select2.Theme`包
    > Install-Package SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.Select2.Theme

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

