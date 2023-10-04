git reset --hard
git pull
docker compose down
docker image put-n-go-frontend
docker container rm putngo-front
docker compose up -d