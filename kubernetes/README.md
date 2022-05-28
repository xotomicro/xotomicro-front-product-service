<h1 align="center">Microservices front Kubernetes 👋</h1>

## 🤷🏼‍♂️ PREREQUISITE KUBERNETES
1. kubectl
2. minikube environment

### 🧊 SWITCH TO MINIKUBE ENVIRONMENT
```shell
eval $(minikube docker-env) # tell docker that you want to use minikube for your env
```

### 🏗 BUILD ALL DOCKER IMAGES BY DOCKER-COMPOSE
```shell
docker-compose --env-file=token.env build # build services with docker
```

### 🖥 OTHER USEFUL COMMANDS
```shell
kubectl get pods # Get all pods
kubectl get deployment # Get all deployment
kubectl logs -f pod/{pod_name} # Tail log of a pod
kubectl apply -f {yaml_file} # Deploy by yaml file
kubectl delete -f {yaml_file} # Delete deployment by yaml file
```
