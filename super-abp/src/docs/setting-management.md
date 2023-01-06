# [SettingManagement](https://github.com/SuperAbp/npm)

## 安装

1. 安装包

   ```bash
   $ npm i @super-abp/ng.setting-management
   ```

   ```bash
   $ yarn add @super-abp/ng.setting-management
   ```

2. 修改 Ng-Alain 项目

   修改`app.module.ts`文件

   ```typescript
   import { SettingManagementConfigModule } from '@super-abp/ng.setting-management/config';
   @NgModule({
    imports: [
        ...
        SettingManagementConfigModule.forRoot(),
    ]
   })
   ```

3. 配置路由

   修改`routes-routing.module.ts`文件

   ```typescript
   const routes: Routes = [
     {
       path: "setting-management",
       loadChildren: () =>
         import("@super-abp/ng.setting-management").then(
           (m) => m.SettingManagementModule
         ),
     },
   ];
   ```

4. 配置菜单

   配置你的[菜单](https://ng-alain.com/theme/menu)

   ```typescript
   {
       key: 'AbpSettingManagement::Settings', // 这个是必须的
       text: 'Your Text',
       link: '/setting-management/setting',
   },
   ```
