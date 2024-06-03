# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


---
## Running 
```
npm run dev

# localhost link
```

## Step 1: command line
```
npm create vite@latest
>> project_name
>> React
>> JavaScript

cd simple-portfolio
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwind init

cd ..
code .
```

## Step 2: create config files/setup fonts
```
# src: https://tailwindcss.com/docs/installation/using-postcss
# create file: postcss.config.cjs

# edit tailwind.config.cjs

# [index.html] select fonts (300-700)
https://fonts.google.com/?query=inter

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

# delete /src/App.css
# edit/rename index.css into /styles/tailwind.css
```