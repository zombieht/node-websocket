# node-websocket
a simple node.js websocket server for docker
## step 1
```
git clone https://github.com/zombieht/nodeWebsocket.git
```
## step 2
```
docker build -t ws .
```
## step 3
```
docker run -d --name=ws -p 8082:8082 ws
```
