# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


---
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

## Step 2: create config files
```
# create file: postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

# edit tailwind.config.js


# src: https://tailwindcss.com/docs/installation/using-postcss
```