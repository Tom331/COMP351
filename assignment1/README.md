<u>Deployment steps:</u>

1) Config the Dockerfile to RUN npm_install

2) Config docker-compose.yml file to not use volumes

3) Build with ./run.sh command

4) Create a stack on cisopenstack using the 2 heat/yaml files

5) Build the app and access it using the ip address given from cisopenstack