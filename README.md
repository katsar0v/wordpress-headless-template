# Headless WordPress Template

Headless WordPress template using TypeScript and React.

## About

This repository is an example how a wordpress template can be headless using react and typescript. The needed environment for developing this theme is also shipped in this repository. For more details, please read [the details](#the-details)

## Requirements

This template has several development requirements. This repository ships the whole development environment needed for the template.

- `docker` and `docker-compose`
- `npm`

## How to use

Usage is pretty straight forward. To start the environment just run:

- `docker-compose -f docker-compose.yml up --build`

After the development environment has started, run `npm install` inside `theme/` to install the dependencies. Finally you can run `npm run build` and `npm run gulp-copy` to copy the template in the container.

You can activate the theme either from the dashboard (http://localhost/wp-admin) or by running `docker exec wp_headless_php wp theme activate theme`

To develop the theme refer to the npm commands. Make sure to run `npm install .` inside the `theme/` folder before proceeding with development.

## NPM Commands

There are several npm commands available for this template:

- `npm run gulp-copy` - copies the theme inside the container
- `npm run gulp-watch` - starts watching changes and updates the theme inside the container correspondingly
- `npm run build` - build the typescript / react files using `parcel`

## Details

This repository consists of the template itself and the development environment needed for it. The file `docker-compose.yml` contains most configurable settings needed (e.g. user and password for mysql or user and password for the wordpress installation)

The development stack is:

- PHP 7.4
- NGINX
- MySQL 8.0
- PhpMyAdmin (on Apache)

This repositories uses the official images from Docker Hub, but feel free to replace to your needs.

`conf.d/` is a folder containing the configuration for nginx.

`docker-php/` contains a modified `Dockerfile` which uses `php:7.4-fpm-alpine` and installs mysqli + wp cli.

Warning: this environment is not suitable for production, but just for development needs.

The template has a simple structure:

- `assets/` - folder containing static JS and CSS files, SCSS and TypeScript ones as well.
- `gulpfile.js` - the template uses gulp for easier development workflow. In case you have `gulp` globally installed, feel free to run `gulp --tasks` to use this file directly, otherwise refer to the npm commands.
- `index.php` - main index file for the template which includes the "compiled" typescript and sass files.
- `style.css` - file describing the template for WordPress.

## Accessing PhpMyAdmin

PhpMyAdmin is running on http://localhost:9900
