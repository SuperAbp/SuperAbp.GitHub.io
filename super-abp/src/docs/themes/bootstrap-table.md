# BootstrapTable

## 安装
1. 安装`SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.BootstrapTable`包
    > Install-Package SuperAbp.Abp.AspNetCore.Mvc.UI.Packages.BootstrapTable
2. 添加`SuperAbpAspNetCoreMvcUiBootstrapTableModule`模块依赖
    ``` csharp
    [DependsOn(typeof(SuperAbpAspNetCoreMvcUiBootstrapTableModule))]
    public class YourModule : AbpModule
    {
    }
    ```

## 配置（可选）
``` csharp
Configure<SuperAbpBootstrapTableOptions>(options =>
{
    // 进行配置
    // Theme：主题
    // Extensions：扩展集合
});
```