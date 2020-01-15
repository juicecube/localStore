# npm库模版
使用npm模版来使得开发库更简单，不用自己搭建开发环境的配置库的打包。

### 特性
- 零配置, 在`npm install`之后使用`postinstall`钩子运行`init`脚本设置库的名字用于发布和打包
- 使用`rollup`来打包为`umd`和`commonjs`两种形式
- 集成`jest`来做单元测试
- 使用`@mlz/lint`来规范代码风格
- 使用`standard-version`自动发布生成版本号和生成changelog
- 配置了`github actions`来在代码push到master时候自动发布npm包

### 使用
```
yuumi init npm-test
// 选择npm-template
```

### 普通调试
```
git clone git@github.com:cmao-cli/Npm-template.git
```

### 开发
`npm run start: rollup -c rollup.config.js -w & npm run example`
使用rollup来打包库的源文件到dist文件夹下，运行`npm run example`启动一个`react`项目来调试。

## 测试
1. `test`: jest跑项目中的所有测试文件，并输出测试覆盖率
2. `test:watch`: watch模式
3. `test:prod`: 推到远程仓库前执行test


## 打包和输出
`npm run build`
```
dist
├── lib //commonjs版本，webpack等打包工具使用
│   └── pkgName.js
├── types //类型定义
│   └── index.d.ts
└── umd //umd版本，可直接使用script标签引入
    └── pkgName.js
```

## 发布
1. 本地运行`npm run release`更新版本号和自动生成CHANGELOG.md
2. `git push`推送代码到`master`分支。触发`npmpublish`action，会自动运行`build test:prod`然后执行`npm publish`
所以开发流程应该是在特性分支进行开发，合并到`master`分支的触发`github action`进行自动发版。

**注意** 需要配置自己的仓库的`secrets.npm_token`到`.github/workflows/npmpublish.yml`中，配置路径为settings中的secrets。




