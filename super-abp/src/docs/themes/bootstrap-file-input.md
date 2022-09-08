# BootstrapFileInput

## 安装

1. 安装`SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.BootstrapFileInput`包
    > Install-Package SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.BootstrapFileInput
2. 添加`SuperAbpAspNetCoreMvcUiBootstrapFileInputModule`模块依赖
    ``` csharp
    [DependsOn(typeof(SuperAbpAspNetCoreMvcUiBootstrapFileInputModule))]
    public class YourModule : AbpModule
    {
    }

## resourcemapping.js
``` javascript
"@node_modules/bootstrap-fileinput/css/*.*": "@libs/bootstrap-fileinput/css/",
"@node_modules/bootstrap-fileinput/css/*.*.*": "@libsbootstrap-fileinput/css/",
"@node_modules/bootstrap-fileinput/img/*.*": "@libs/bootstrap-fileinputimg/",
"@node_modules/bootstrap-fileinput/js/*.*": "@libs/bootstrap-fileinputjs/",
"@node_modules/bootstrap-fileinput/js/*.*.*": "@libs/bootstrap-fileinputjs/",
"@node_modules/bootstrap-fileinput/js/locales/*.*": "@libsbootstrap-fileinput/js/locales/",
"@node_modules/bootstrap-fileinput/js/plugins/*.*": "@libsbootstrap-fileinput/js/plugins/",
"@node_modules/bootstrap-fileinput/js/plugins/*.*.*": "@libsbootstrap-fileinput/js/plugins/",
"@node_modules/bootstrap-fileinput/themes/bs5/*.*": "@libsbootstrap-fileinput/themes/bs5/",
"@node_modules/bootstrap-fileinput/themes/bs5/*.*.*": "@libsbootstrap-fileinput/themes/bs5/",
"@node_modules/bootstrap-fileinput/themes/explorer/*.*": "@libsbootstrap-fileinput/themes/explorer/",
"@node_modules/bootstrap-fileinput/themes/explorer/*.*.*": "@libsbootstrap-fileinput/themes/explorer/",
"@node_modules/bootstrap-fileinput/themes/explorer-fa/*.*": "@libsbootstrap-fileinput/themes/explorer-fa/",
"@node_modules/bootstrap-fileinput/themes/explorer-fa/*.*.*": "@libsbootstrap-fileinput/themes/explorer-fa/",
"@node_modules/bootstrap-fileinput/themes/explorer-fas/*.*": "@libsbootstrap-fileinput/themes/explorer-fas/",
"@node_modules/bootstrap-fileinput/themes/explorer-fas/*.*.*": "@libsbootstrap-fileinput/themes/explorer-fas/",
"@node_modules/bootstrap-fileinput/themes/fa/*.*": "@libsbootstrap-fileinput/themes/fa/",
"@node_modules/bootstrap-fileinput/themes/fa/*.*.*": "@libsbootstrap-fileinput/themes/fa/",
"@node_modules/bootstrap-fileinput/themes/fas/*.*": "@libsbootstrap-fileinput/themes/fas/",
"@node_modules/bootstrap-fileinput/themes/fas/*.*.*": "@libsbootstrap-fileinput/themes/fas/",
"@node_modules/bootstrap-fileinput/themes/gly/*.*": "@libsbootstrap-fileinput/themes/gly/",
"@node_modules/bootstrap-fileinput/themes/gly/*.*.*": "@libsbootstrap-fileinput/themes/gly/",
```