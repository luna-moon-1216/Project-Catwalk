# Front-End Capstone

## Table of Contents
- [Description](#project-catwalk-sedna)
- [Video Demo](#click-for-full-video-demo)
- [How to View](#to-check-out-this-project)
- [Tech Stack](#what-we-used-during-development-of-the-project)


## Project Catwalk Sedna
This repo is the first senior project in Hack Reactor's Bootcamp, consists of building a client side application that resembles a really basic clothing e-commerce website. The project was developed by 3 students, focusing mainly in the project overview, the related products, outfits for the user and finally, a ratings and reviews section.

## Click for full video demo
[Video Demo](https://youtu.be/IzJkcMm4aOg)<br>

![image](https://github.com/luna-moon-1216/Project-Catwalk/blob/f6b08870a975caeaa187ab2df8ef303caa252d59/FEC%20DEMO.gif)


## To check out this project:
1. Start by cloning the repo into your computer in the terminal. We recommend doing it in a new folder. <br> `git clone https://github.com/rfe5-fec5-sedna/FEC.git`
2. Install all of the npm modules and dependencies used in the project. <br> `npm i` or `npm install`

This project requires a GitHub token to fetch data from the api, to do that, create a file in the server folder and name it config.js. `touch server/config.js`.
The file should look like this: `module.exports = { API_TOKEN: <YOUR_TOKEN> }` <br>

Logged to your GitHub account, generate your new access [token](https://github.com/settings/tokens) with the following permissions:
![token permissions](https://user-images.githubusercontent.com/65096739/133938156-6afc9d37-c768-400a-b8e0-2bf8f3d538c4.png)

3. In the terminal run `npm run react-dev` to build the app and then in a separate terminal, run `npm run server-dev`. <br>

In your browser open [Sedna](http://localhost:3000/sedna/) 

---
## What we used during development of the project:
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](	https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![image](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)
![image](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

[React](https://reactjs.org/docs/getting-started.html),
[Hooks](https://reactjs.org/docs/hooks-reference.html),
[NodeJS](https://nodejs.org/dist/latest-v16.x/docs/api/),
[Nodemon](https://www.npmjs.com/package/nodemon),
[Express](https://expressjs.com/en/starter/installing.html),
[Axios](https://www.npmjs.com/package/axios),
[Babel](https://babeljs.io/docs/en/),
[Webpack](https://webpack.js.org/),
[http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware).
