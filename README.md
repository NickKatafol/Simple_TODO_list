## To_Do App

![Chalenge Task](/src/assets/data/task.gif "Chalenge Task")

#### Additional objectives:
- Scalability
- Performance
- Reliability



## Project Setup locally

```sh
npm install

npm run dev
```



## End-to-End Tests with Cypress

```sh
npm run test:e2e:dev
```



## Build a Docker Image

```
docker build -t nickkatafol/nick_docker_image:todo_port80_VITE_DATA .


# run the Image localy

docker run -e VITE_DATA=run -p 8080:80 nickkatafol/nick_docker_image:todo_port80_VITE_DATA


# push on DockerHub

docker login -u nick.katafol@gmail.com --password-stdin

docker push nickkatafol/nick_docker_image:todo_port80_VITE_DATA

```



## Deploy on a kubernetes Cluster, Minikube

```
minikube start --driver=docker

alias kubectl="minikube kubectl --"

kubectl apply -f kubernetes/


# assigne the Minikube Exernal_IP:PORT to the "todo-svc" Service

minikube service todo-svc

```




## Realisation

#### Project Architecture

-Object Oriented Programming rules

-SOLID Principals


#### TypeScript


#### ES6 Class

All of the manipulations with the Task goes VIA CLASS METHODS.
Delete the Task item itself via the class instance method. 
It's unnecessary for a simple project but critical helpful 
for a real big project with a complex JS logic.

#### EventListeners
Holding the click Event from several targets by only the one EventListeners (itemHolderForDelete)

Adding the Task by hiting the Enter.

Pick up the TaskInstanse and hold them WITHOUT using eny of iteration loops.

Validation the typing text agenst the empty string.



#### Pinia


#### CSS

Tailwind v3

flexbox

v-memo directive for good project performance

Resive the initial data from the mocked  external resource.

#### Tests

End-to-end Tests (Cypress.io)


#### Docker Image

Create a Docker Image

Throw the env_var "VITE_DATA" over the Docker Container


### Deploy the Progect on a Cluster

Deploy the Progect on a Kubernetes Cluster




