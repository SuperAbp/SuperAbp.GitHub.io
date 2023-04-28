# [AuditLogging](https://github.com/SuperAbp/AuditLogging)

本项目依赖`Volo.Abp.AuditLogging`模块，故需要先完成对 AuditLogging Module 的相关配置。（本项目会自动安装对`Volo.Abp.AuditLogging`模块的依赖）

## 依赖包安装

1. 安装[SuperAbp.AuditLogging.\*](https://github.com/SuperAbp/AuditLogging)包到对应的项目中

   ```ps
   Install-Package SuperAbp.AuditLogging.Web
   Install-Package SuperAbp.AuditLogging.HttpApi
   Install-Package SuperAbp.AuditLogging.Application
   Install-Package SuperAbp.AuditLogging.Application.Contracts
   Install-Package SuperAbp.AuditLogging.Domain
   Install-Package SuperAbp.AuditLogging.Domain.Shared
   Install-Package SuperAbp.AuditLogging.EntityFrameworkCore
   ```

2. 添加 Module 依赖到对应的模块中，没有的项目则跳过

   ```csharp
   [DependsOn(typeof(SuperAbpAuditLoggingWebModule))]
   public class *WebModule : AbpModule
   {
       //...
   }
   [DependsOn(typeof(SuperAbpAuditLoggingHttpApiModule))]
   public class *HttpApiModule : AbpModule
   {
       //...
   }
   [DependsOn(typeof(SuperAbpAuditLoggingApplicationModule))]
   public class *ApplicationModule : AbpModule
   {
       //...
   }
   [DependsOn(typeof(SuperAbpAuditLoggingApplicationContractsModule))]
   public class *ApplicationContractsModule : AbpModule
   {
       //...
   }
   [DependsOn(typeof(SuperAbpAuditLoggingDomainModule))]
   public class *DomainModule : AbpModule
   {
       //...
   }
   [DependsOn(typeof(SuperAbpAuditLoggingDomainSharedModule))]
   public class *DomainSharedModule : AbpModule
   {
       //...
   }
   [DependsOn(typeof(SuperAbpAuditLoggingEntityFrameworkCoreModule))]
   public class *EntityFrameworkCoreModule : AbpModule
   {
       //...
   }
   ```

3. 配置数据库

   修改`*.EntityFrameworkCore`项目下的`*DbContext.cs`文件

   ```csharp
   protected override void OnModelCreating(ModelBuilder builder)
   {
       builder.ConfigureAuditLogging();
       // builder.ConfigureSuperAbpAuditLogging(); 也可以
       //...
   }
   ```

4. 添加数据库路径字符串

   ```json
   "ConnectionStrings": {
       "AbpAuditLogging": "YourConnectionStrings"
   }
   ```

5. 进行 EfCore 数据迁移

## UI

### MVC UI

这个模块在`Administration`菜单下添加了一个`审计日志`菜单项
用户默认是没有权限的， 如果需要查看请打开用户或角色的权限对话框赋予其权限

### Ng-alain

1. 安装

   ```bash
   $ npm i @super-abp/ng.audit-logging
   ```

   ```bash
   $ yarn add @super-abp/ng.audit-logging
   ```

2. 配置路由

   修改`routes-routing.module.ts`文件

   ```typescript
   {
     path: 'menu-management',
     loadChildren: () =>
       import('@super-abp/ng.menu-management').then(
         (m) => m.MenuManagementModule
       ),
   }
   ```
