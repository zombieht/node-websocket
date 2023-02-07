# nodeWebsocket
a simple node.js websocket server for docker
## step 1
```
docker build -t ws .
```
## step2
```
docker run -d --name=ws -p 8082:8082 ws
```
