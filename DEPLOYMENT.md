# GitHub Actions 部署说明

## 部署流程

本项目已配置GitHub Actions自动部署到GitHub Pages。

### 工作原理

1. 当代码推送到main分支时触发部署
2. GitHub Actions运行构建脚本验证文件结构
3. 自动推送到gh-pages分支进行部署
4. GitHub Pages从gh-pages分支提供静态网站服务

## 常见错误及解决方案

### 错误："The process '/usr/bin/git' failed with exit code 128"

这个错误通常表示Git操作权限问题。

#### 解决方案：

1. **检查GitHub仓库设置**
   - 进入仓库Settings → Actions → General
   - 确保"Workflow permissions"设置为"Read and write permissions"

2. **检查GitHub Pages设置**
   - 进入仓库Settings → Pages
   - 确保Source设置为"Deploy from a branch"
   - 选择gh-pages分支作为部署分支

3. **检查Actions权限**
   - 确保GitHub Actions有权限推送到gh-pages分支
   - 可能需要手动创建gh-pages分支（空分支即可）

4. **重新触发部署**
   - 手动运行GitHub Actions工作流
   - 或推送新的commit到main分支

## 手动部署步骤

如果自动部署失败，可以手动部署：

1. 创建gh-pages分支：
```bash
git checkout --orphan gh-pages
git rm -rf .
git add .
git commit -m "Initial gh-pages branch"
git push origin gh-pages
```

2. 在GitHub仓库设置中启用GitHub Pages

## 故障排除

- 查看GitHub Actions日志了解详细错误信息
- 确保.nojekyll文件存在（禁用Jekyll处理）
- 检查index.html文件路径是否正确
- 验证assets目录结构是否完整

## 技术支持

如果问题持续存在，请检查：
- GitHub Actions工作流文件语法是否正确
- 仓库权限设置是否允许自动部署
- 网络连接是否正常