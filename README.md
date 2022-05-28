# SERVICE AUTH
The React Application

## 🤷🏼‍♂️ PREREQUISITE SERVICE

```shell

# 0. register packages - yarn (ask owner for token)
export GITHUB_TOKEN=${ASKED_GITHUB_TOKEN} # first set accessibility rules for your team and add your github token like so 
npm set "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" # you will need to tell npm to authenticate yourself to install registries

# 1. clone, read and run required service from : https://github.com/xotomicro/xotomicro-front-shell-system/blob/development/README.md
git clone https://github.com/xotomicro/xotomicro-front-shell-system.git # clone then run the shell

# 2. clone, read and run required service from : https://github.com/xotomicro/xotomicro-front-hook-system/blob/development/README.md
git clone https://github.com/xotomicro/xotomicro-front-hook-system.git # clone and run the hook system

```

## 🧶 INSTALL AND RUN SERVICE - YARN

```sh

# run current service
yarn # install dependencies
yarn start # start application

```

## 🐳 INSTALL AND RUN SERVICE - DOCKER

```sh

# deploy service to docker
docker-compose --build -d --force-recreate

# build service without docker compose
docker build -t {SERVICE_NAME} . --progress plain --no-cache --build-arg GITHUB_TOKEN={GITHUB_TOKEN}

```

- ACCESS
  - GO TO http://localhost:7073
