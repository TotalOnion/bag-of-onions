# Bag Of Onions

This is a Total Onion Training Day project, crafted with care by Ethan and Robert.

This project was sparked by the teams experiences with Fusion Cask, where we frequently faced the challenge of accurately determining viewport sizes, rather than just the monitor dimensions. Realizing the gap in available tools, we were inspired to create something better.

Our goal is to develop a versatile suite of digital tools tailored for brand managers and developers. These tools are designed to simplify daily tasks and enhance productivity, but they're also user-friendly enough to be accessible to our non-developer colleagues.

## Tool Suggestions / Roadmap

If you have a suggestion please submit here - https://bag-of-onions.onrender.com/requests

_All requests will be added to this documentation, bi-weekly, Once completed it will be added to the list of current tools._

#### Current requests

- CSS Gradient Generator - **Ethan**
- Webm Video to Still Frames Convertor - **Ethan**

## Run Project Locally

Clone the project

```bash
git clone https://link-to-project
```

Go to the project directory

```bash
cd my-project
```

Install dependencies

```bash
npm install
```

Run webpack:

```bash
npx webpack
```

Run the development server:

```bash
npm start
```

## Usage/Examples

### Creating a New Module/Tool:

Follow these step-by-step instructions to add a new module to your project.

###  Via Command Line
#### 1. Create New Branch

- Create a new branch in terminal:

  ```bash
  git checkout -b 'module-[name]'
  ```
#### 2. Create / Delete Module
- Create module:

  ```bash
  npm run create-module [name]
  ```
- Delete module:

  ```bash
  npm run delete-module [name
  ```

### Manual

#### 1. Create New Branch

- Create a new branch in terminal:

  ```bash
  git checkout -b 'module-[name]'
  ```

#### 2. Create JavaScript Files

- Navigate to JS directory:

  ```bash
  src/js/modules
  ```

- Create a new JavaScript file:

  ```bash
  [name].js
  ```

- Add the following boilerplate content to the file:
  ```javascript
  console.log("hello world");
  ```

#### 3. Create SCSS Files

- Navigate to SCSS directory:

  ```bash
  src/scss/modules
  ```

- Create a new SCSS file:

  ```bash
  _[name].scss
  ```

- Add the following boilerplate content to the file:
  ```scss
  @use "../utils/utils" as *;
  ```

#### 4. Create Twig Template Files

- Navigate to Views directory:

  ```bash
  src/scss/modules
  ```

- Create a new twig file:
  ```bash
  [name].twig
  ```
- Add the following boilerplate content to the file:

  ```twig
  {% extends '../layouts/base.twig' %}

  {% block title %}
    {% set pageTitle = '[Module Name]' %}
    {{ pageTitle }}
  {% endblock %}

  {% block content %}
          [Your Content]
  {% endblock %}


  {% block seoContent %}
          [Your SEO Content]
  {% endblock %}
  ```

#### 5. Update JavaScript Loader

- Navigate to the src js directory and open the loader.js file
  ```bash
  src/js/theme/loader.js
  ```
- Add a new path operation for your module in the pathOperations object:

  ```javascript
  const pathOperations = {
      ... emitted code

      '/[name]': () => {
          import(/* webpackChunkName: "[name]" */ "../modules/[name].js")
          .then(() => {
              loadCss('/css/modules/[name].css');
          });
      },
      ...
  ```

#### 6. Set Up Express Route

- Navigate to express routes modules folder.

  ```bash
  express/routes/modules
  ```

- Create a new file.

  ```bash
  [name]Routes.js
  ```

- Add the following route configuration and additional exports:

  ```javascript
  const express = require("express");
  const router = express.Router();

  router.get("/[name]", (req, res) => {
  	res.render("modules/[name]", {
  		title: "My Page",
  		heading: "Hello, World!",
  		message: "This is a message rendered from Twig.js!",
  	});
  });

  module.exports = {
  	router: router,
  	name: "Tool Name",
  	category: "tool-category",
  	path: "/[name]",
  	hideNav: false,
  };
  ```

## Live Demo

https://bag-of-onions.onrender.com/

## Current Modules / Tools

- Screensize Grabber - **Dev: Ethan/Robert - Requested: Ethan**

  https://bag-of-onions.onrender.com/screensize

- Ip Grabber - **Dev: Ethan - Requested: Ethan**

  https://bag-of-onions.onrender.com/whatsmyip

## In Progress Modules / Tools

- Box Shadow Generator - **Dev: Ethan - Requested: Ethan**

  https://bag-of-onions.onrender.com/box-shadow

## Current Tech Stack

**Client:** Vanilla JS, Twig, Scss, Webpack

**Server:** Express
