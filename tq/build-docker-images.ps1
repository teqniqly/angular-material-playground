[string]$imageName = "angular-nx"
[string]$containerName = "fitness-tracker-app"

docker container rm -f $containerName
docker image build --tag $imageName --file fitness-tracker.dockerfile .
docker container run -p 4900:80 -d --name $containerName $imageName