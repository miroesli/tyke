# Tyke

_The **Ty**pescript Sna**ke**_

A simple [Battlesnake AI](https://battlesnake.io) written in Typescript for NodeJS.

If you haven't setup a NodeJS development environment before, read [how to get started with NodeJS](http://nodejs.org/documentation/tutorials/). You'll also need [npm](https://www.npmjs.com/) for easy JS dependency management.

This client uses [Express4](http://expressjs.com/en/4x/api.html) for easy route management, read up on the docs to learn more about reading incoming JSON params, writing responses, etc.

## Running the AI locally

Fork and clone this repo:

```shell
git clone git@github.com:miroesli/tyke.git
cd tyke
```

Install the client dependencies:

```shell
npm install
```

Create an `.env` file in the root of the project and add your environment variables (optional).

Run the server with auto-reloading on file change:

```shell
npm start
```

Test the client in your browser at <http://localhost:5000>

## Running the Engine locally

Change your current directory to the battlesnake-engine folder:

```shell
cd battlesnake-engine
```

Run the engine in dev mode:

```shell
./engine dev
```

Open a browser and go to http://localhost:3010/

This will give you a web based environment to run the snake locally.
