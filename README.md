# SERVICE AUTH
The React Application

## 🤷🏼‍♂️ PREREQUISITE SERVICE

```shell

# 1. clone, read and run required service from : https://github.com/xotomicro/xotomicro-front-shell-system/blob/development/README.md
git clone https://github.com/xotomicro/xotomicro-front-shell-system.git # clone then run the shell

# 2. clone, read and run required service from : https://github.com/xotomicro/xotomicro-front-hook-system/blob/development/README.md
git clone https://github.com/xotomicro/xotomicro-front-hook-system.git # clone and run the hook system

```

### 🏗️ SETUP - ENVIRONMENT

```sh
# Ask for a GITHUB_TOKEN from the owner

# register packages - yarn (ask owner for token)
npm set "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" # you will need to tell npm to authenticate yourself to install registries

# set the GITHUB_TOKEN in the .env files variable 
GITHUB_TOKEN=${GITHUB_TOKEN}

```

### 🚀 INSTALL AND RUN THE APP - YARN

```shell

yarn # install dependencies
yarn start # start application

```

## 🐳 INSTALL AND RUN SERVICE - DOCKER

```sh

# deploy service to docker
docker-compose --env-file=.env up --build -d --force-recreate 

# build service without docker compose
docker build -t {SERVICE_NAME} . --progress plain --no-cache --env-file=.env

```

- ACCESS
  - GO TO http://localhost:7073
