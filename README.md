# TBC Technical Assignment

In this project I have build "TBC x USAID" page of the [TBCAcademy](https://www.tbcacademy.ge/usaid) website

## Navigation

- [TBC Technical Assignment](#tbc-technical-assignment)
  - [Navigation](#navigation)
  - [Project Start Guide](#project-start-guide)
    - [Installation](#installation)
    - [Start](#start)
    - [\*note](#note)
  - [Project Structure](#project-structure)
  - [Technologies](#technologies)
    - [1. Webpack:](#1-webpack)
    - [2. Sass:](#2-sass)
    - [3. Auxiliary Enhancements:](#3-auxiliary-enhancements)
  - [Production](#production)

## Project Start Guide

#### Installation

```bash
npm install
```

#### Start

```bash
npm start
```

#### \*note

Make sure to have NodeJS installed on your device

## Project Structure

My project follows a well-organized structure commonly seen in modern web development, promoting a clear separation of concerns and ease of maintenance.

In the root of my project, you'll find crucial configuration files like package.json and webpack.config.js. These files are essential for managing dependencies and configuring the build process. I've also set up a .gitignore file to keep my version control clean by excluding unnecessary files.

The heart of my project resides in the src folder. I use index.js as the main entry point for my JavaScript code, orchestrating the logic of my application. Correspondingly, index.html serves as the primary HTML file, linking to my JavaScript and other assets.

Within the src folder, I've adopted the widely-used "7-1 pattern" to organize my styles in the sass directory. This pattern ensures a modular and scalable stylesheet architecture by categorizing styles into seven distinct areas.

The javascript folder contains my JavaScript files, where I've structured my application logic.

For assets, I've dedicated an assets directory, housing images in the images folder and fonts in the fonts folder. This separation keeps my assets distinct from my code for easier management.

This project structure is designed to promote clarity, making it simpler for me to locate and understand different aspects of my project. It aligns with best practices in web development, utilizing tools like npm and Webpack for dependency management and build processes. Overall, my project structure reflects a thoughtful and organized approach to web development.

## Technologies

### 1. Webpack:

- Overview: Webpack serves as the backbone of your project, functioning as a powerful and flexible module bundler. Its primary role is to take your diverse assets, such as JavaScript, CSS, and images, and transform them into a format optimized for deployment.
- Key Features:

  - Module Bundling: Webpack allows you to structure your code in a modular fashion, improving maintainability and organization.

  - Asset Optimization: It optimizes and bundles assets, reducing file sizes for improved performance.

  - Development Server: With webpack-dev-server, you benefit from a local development server that supports hot module replacement, speeding up the development process.

- Why Webpack: Webpack simplifies the complexities of modern web development by providing a centralized and efficient way to manage dependencies, handle assets, and prepare a project for production.

### 2. Sass:

- Overview: Sass, or Syntactically Awesome Stylesheets, is a preprocessor scripting language that is interpreted or compiled into CSS. It extends CSS with features like partials, nested rules, and mixins, enhancing the maintainability and readability of your stylesheets.
- Key Features:

  - Partials: Supports modularization of styles, making it easier to manage and organize code in larger projects.

  - Nested Rules: Enhances readability by allowing nested CSS rules.

  - Mixins: Facilitates code reuse by defining and including sets of styles.

- Why Sass: Sass streamlines the process of writing and maintaining stylesheets, offering a more robust and maintainable solution compared to raw CSS.

### 3. Auxiliary Enhancements:

- webpack-cli: This command-line interface simplifies the execution of Webpack commands, making it convenient to manage your project through the terminal.

- webpack-dev-server: This package enhances the development experience by providing a local server with hot-reloading capabilities, allowing you to see changes in real-time without manual refresh.

- webpack-merge: Useful for maintaining clean and organized Webpack configurations, especially when dealing with different environments such as development and production.

- html-webpack-plugin: This package automates the creation of HTML files, injecting necessary script and link tags based on the Webpack build. It reduces manual configuration efforts and ensures consistency in your HTML output.

- css-loader, style-loader, sass-loader, node-sass: These loaders collectively handle the processing of styles and Sass in your Webpack workflow. They enable modular and maintainable styling, contributing to a more organized codebase.

In summary, Webpack and Sass form the core technologies of my project, providing a robust foundation for efficient asset management and styling. The additional packages complement these technologies, enhancing the development workflow and contributing to the overall maintainability of the codebase.

## Production

For the production build make sure you have all of the dependencies installed and run the following command:

```bash
npm run build
```
