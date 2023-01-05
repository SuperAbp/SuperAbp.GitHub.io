# [Identity](https://github.com/SuperAbp/npm)

## 安装

1. 安装`ZTree`

   ```bash
   $ npm i @super-abp/ng.identity
   ```

   ```bash
   $ yarn add @super-abp/ng.identity
   ```

2. 配置路由

   修改`routes-routing.module.ts`文件

   ```typescript
   const routes: Routes = [
     {
       path: "identity",
       loadChildren: () =>
         import("@super-abp/ng.identity").then(
           (m) => m.SettingManagementModule
         ),
     },
   ];
   ```

3. 配置菜单

   配置你的[菜单](https://ng-alain.com/theme/menu)

   ```typescript
   {
       text: 'Your Text',
       link: '/identity/user',
   },
   {
       text: 'Your Text',
       link: '/identity/role',
   },
   ```
