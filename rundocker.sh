#/bin/bash
docker build . -t waterup
docker run --name waterup -itd -p80:80 waterup
