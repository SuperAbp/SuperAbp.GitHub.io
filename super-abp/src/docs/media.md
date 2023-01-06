# [Media](https://github.com/SuperAbp/Media)

## 安装

1. 安装[SuperAbp.Media.*](https://github.com/SuperAbp/Media)包

    ```ps
    Install-Package SuperAbp.Media.HttpApi
    Install-Package SuperAbp.Media.Application
    Install-Package SuperAbp.Media.Application.Contracts
    Install-Package SuperAbp.Media.Domain
    Install-Package SuperAbp.Media.Domain.Shared
    Install-Package SuperAbp.Media.EntityFrameworkCore
    ```

2. 配置数据库

    修改`YourCompany.YourModule.EntityFrameworkCore`下的`*DbContext.cs`文件
    ```csharp
    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ConfigureMedia();
        //... other code
    }
    ```

3. 添加数据库路径字符串

    ```json
    "ConnectionStrings": {
        "SuperAbpMedia": "YourConnectionStrings"
    }
    ```

4. 进行EfCore数据迁移


## 使用
使用http post方式上传文件