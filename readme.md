WeBase
===========

**<p align="center">We'll be creating 5-click model web application - powered by deep learning - using which every user right from a ten year old to sixty five year old can create and deploy a website in a few minutes.</p>**

## <p align="center">[Visit our website](https://amdocs-prototype-webase.herokuapp.com)</p>

[![Webase](markdown/webase.JPG)](https://amdocs-prototype-webase.herokuapp.com/)

## :fire: Why yet another website generator?

We use deep learning algorithms for front-end automation. We’ll teach a neural network how to code a basic HTML and CSS website based on a picture of a design mockup.
![webase picture to website](markdown/land.png)
----------------------------------------------------------------------------------------------------------------------------------------
## Contents

* [Requirements](#requirements)
* [Install](#install)
* [Getting started](#getting-started)
* [Everyone is Moving Online](#everyone-is-moving-online)
* [Why are Web Applications are Now More Relevant Than Ever?](#why-are-web-applications-are-now-more-relevant-than-ever)
* [The problem WeBase solves](#the-problem-webase-solves)
* [Webase Solution](#webase-solution)
* [Features](#features)
* [Technology Stack](#technology-stack)

----------------------------------------------------------------------------------------------------------------------------------------
## Requirements


To use Webase you need at least
React 16.0.0
Flask 1.12.0

```shell
npm i create-react-app
pip install Flask
```

----------------------------------------------------------------------------------------------------------------------------------------
## Install

:bulb: Tip: I recommend [installing](#install) npm and pip to install react and python packages.

```shell
npm install package.json
pip install -r requirements.txt
```
### React packages

```diff
{
  "name": "webase",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "@material-ui/core": "^3.9.2",
    "axios": "^0.18.0",
    "material-ui": "^0.20.2",
    "react": "^16.8.5",
    "react-dom": "^16.8.5",
    "react-dropzone": "^10.0.5",
    "react-dropzone-component": "^3.2.0",
    "react-froala-wysiwyg": "^2.9.3",
    "react-html-converter": "^0.3.2",
    "react-images-upload": "^1.2.6",
    "react-router-dom": "^5.0.0",
    "react-scripts": "2.1.8",
    "react-select": "^2.4.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
```
### Flask packages

```diff
keras = "==2.1.2"
tensorflow = "==1.4.0"
nltk = "==3.2.5"
opencv-python = "==3.3.0.10"
numpy = "==1.13.1"
h5py = "==2.7.1"
matplotlib = "==2.0.2"
tqdm = "==4.17.1"
scipy = "==1.0.0"
Pillow = "==4.3.0"
flask = "*"
flask-sqlalchemy = "*"
psycopg2-binary = "*"
pymysql = "*"
sqlalchemy-serializer = "*"
pdfcrowd = "*"
flask-cors = "*"
```


Then run `npm run` in your react working folder.
and run `python app.py` in your flask working folder.

----------------------------------------------------------------------------------------------------------------------------------------
## Getting started

In webase app, you will see a landing page, click on get started which will redirect you to dashboard. You can edit previous work, upload new image and edit user information. 

----------------------------------------------------------------------------------------------------------------------------------------
### Everyone is Moving Online

The twenty-first century digital world enabled mobile, empowered, content-hungry individuals to capture the value of enabling technologies and applications to manage, create, share, and influence content across the creation and delivery spectrum. Users were online in record numbers, spending a greater percentage of their time, and conducting more and more activities including communications, learning, entertainment, and social interaction. Digital technologies and broadband radically revolutionized the value equation for many industries, giving more influence and power to the individual. 

**Businesses are now not just limited to physical addresses but are now moving towards virtual addresses on the internet. These virtual addresses are nothing but the web applications.**

----------------------------------------------------------------------------------------------------------------------------------------

### Why are Web Applications are Now More Relevant Than Ever?
1. Internet Economy is growing at a massive rate - _9% of USA's GDP comes from the Internet Economy_
2. Web applications are the modern day combination of commercial store and billboards open 24/7 - _93% of business purchase decisions begin with a search engine search_
3. Businesses with effective web applications have significant advantage over their competitors with no or relatively less developed web applications - _85% of the customers of a product use the internet to check validity of a business_
4. Web applications open new horizons - _For every job destroyed by the internet 2.6 new jobs are created_

----------------------------------------------------------------------------------------------------------------------------------------

## The problem WeBase solves?

With this massive ongoing transition where businesses are now moving to their virtual addresses, a lot of problems were bound to occur. We'll be tackling some these problems using our application: 

1. Difficulty faced by small businesses, local traders and inviduals with no technical background to create a website to showcase their product or service that looks similar or exactly like their requirement - _More than 50% of small/medium-sized businesses in India do not have their own website_ 
2. Large amount of time consumed by small/medium-sized businesses and individuals with techincal knowledge to develop a template of website that looks similar or exactly like their requirements thus obstructing rapid prototyping and slowing down process of application development.

----------------------------------------------------------------------------------------------------------------------------------------

# Webase Solution

We'll be creating **5-click model** web application using which every user (regardless of the amount of technical knowledge they possess) right from a **ten year old to sixty five year old** can create and deploy a website - which looks exactly like they envisioned it to be - in matter of minutes. The same would be achieved using the following following 5 steps:

![5-Click Model](markdown/steps.png)

New Website Creation and Deployment Steps:

**Step 1:** User Logs in/ Registers in our portal. This is done so that any website template ceated by a particular user is saved in her/his account repository can be revisited by her/him and edited to her/his changing needs.

**Step 2:** User uploads image of the wireframe sketch of their website created on a sheet of paper or digitally to our website. Our **Deep Learning Model** created using **Keras** converts this input image into output HTML/Bootstrap code.

**Step 3:** Users can now select the type codebase of their website from the range of options provided by us like React, Angular.js, Vue and many more.

**Step 4:** Users can now select the theme of their of their website from the range of options provided in our web application to make their website look more aesthetic.

**Step 5:** Website can be deployed by the user in a single click using third-party choices provided by us for. 

----------------------------------------------------------------------------------------------------------------------------------------
# Features
1. Convert mockup to HTML and CSS code
2. Export the mockup into React Vue and Angular components
3. Chose style for your mockup
4. View and Edit previous work

----------------------------------------------------------------------------------------------------------------------------------------
# Technology Stack
* *React* A JavaScript library for building user interfaces
* *Flask* Python's micro web framework.
* *MySQL* Open source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL), used to store our data.
* *Keras* The Python Deep Learning library 
* *Heroku* A platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.
* *FloydHub* A zero setup Deep Learning platform for productive data science teams.
* *Froala WYSIWYG Editor* Used to edit codebase of website generated by Deep Learning Model.

![5-Click Model](markdown/ppt_images.jpg)
