# [Media](https://github.com/SuperAbp/Media)

本项目属于对`Volo.Abp.BlobStoring`的简单封装，故需要先完成对 Blob 提供程序的安装

## 安装

1. 参考[Abp 文档](https://docs.abp.io/en/abp/latest/Blob-Storing#blob-storage-providers)安装 Blob Storage Providers

2. 安装[SuperAbp.Media.\*](https://github.com/SuperAbp/Media)包到对应的项目中

   ```ps
   Install-Package SuperAbp.Media.HttpApi
   Install-Package SuperAbp.Media.Application
   Install-Package SuperAbp.Media.Application.Contracts
   Install-Package SuperAbp.Media.Domain
   Install-Package SuperAbp.Media.Domain.Shared
   Install-Package SuperAbp.Media.EntityFrameworkCore
   ```

3. 添加 Module 依赖到对应的模块中

   ```csharp
   [DependsOn(typeof(SuperAbpMediaHttpApiModule))]
   public class *HttpApiModule : AbpModule
   {
       //...
   }
   [DependsOn(typeof(SuperAbpMediaApplicationModule))]
   public class *ApplicationModule : AbpModule
   {
       //...
   }
   [DependsOn(typeof(SuperAbpMediaApplicationContractsModule))]
   public class *ApplicationContractsModule : AbpModule
   {
       //...
   }
   [DependsOn(typeof(SuperAbpMediaDomainModule))]
   public class *DomainModule : AbpModule
   {
       //...
   }
   [DependsOn(typeof(SuperAbpMediaDomainSharedModule))]
   public class *DomainSharedModule : AbpModule
   {
       //...
   }
   [DependsOn(typeof(SuperAbpMediaEntityFrameworkCoreModule))]
   public class *EntityFrameworkCoreModule : AbpModule
   {
       //...
   }
   ```

4. 配置数据库

   修改`*.EntityFrameworkCore`项目下的`*DbContext.cs`文件

   ```csharp
   protected override void OnModelCreating(ModelBuilder builder)
   {
       builder.ConfigureMedia();
       //...
   }
   ```

5. 添加数据库路径字符串

   ```json
   "ConnectionStrings": {
       "SuperAbpMedia": "YourConnectionStrings"
   }
   ```

6. 进行 EfCore 数据迁移

## 使用

使用 http post 方式上传文件
`/api/super-abp/media`
