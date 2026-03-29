# Project 1a / 1b 新闻展示原型

这是一个可直接部署的前端原型项目，包含：

- Project 1a：新闻展示手机程序
- Project 1b：新闻小程序及后台管理系统
- 启动页、登录页、页面切换动效
- 后台图表统计
- 1a 与 1b 分开展示

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm install
npm run build
```

## 部署到 Vercel

1. 把整个项目上传到 GitHub 仓库
2. 打开 Vercel，导入该仓库
3. Framework Preset 选择 `Vite`
4. Build Command 保持 `npm run build`
5. Output Directory 保持 `dist`
6. 部署完成后，Vercel 会自动生成在线链接

## 部署到 Netlify

1. 上传到 GitHub
2. 在 Netlify 中选择该仓库
3. Build command: `npm run build`
4. Publish directory: `dist`
5. 部署完成后会自动生成公开访问地址

## 部署到 GitHub Pages

这个项目基于 Vite，推荐优先部署到 Vercel 或 Netlify，更简单。
