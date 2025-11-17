# 基于html开发的在线网址导航

[English Doc](./Readme-en.md)

## 部署步骤

### 传统部署方式
将全部文件复制到服务器，入口文件是index.html

### GitHub自动部署
项目已配置GitHub Actions自动部署：
1. 将代码推送到GitHub仓库
2. GitHub Actions会自动构建并部署到GitHub Pages
3. 访问 `https://<your-username>.github.io/<repository-name>/` 查看部署结果

#### 部署流程说明
- 当推送到main分支时自动触发部署
- 使用GitHub Pages进行静态网站托管
- 部署分支：gh-pages
- 构建过程包括文件验证和.nojekyll文件创建

## 在线预览

项目已成功部署到GitHub Pages，可通过仓库设置中的GitHub Pages链接访问。


## 二次开发

1. 如需修改网址，可修改index.html

2. 如需修改关于页面，可修改about里面的index页面


## 参考资料

- https://web-tool-omega.vercel.app/

- https://web-a55.pages.dev/


