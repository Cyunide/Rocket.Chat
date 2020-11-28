meteor build --server https://comounicate.com --directory /home/cyrus/rocketdeploy

cd /home/cyrus/rocketdeploy
tar -zcvf /home/cyrus/rocketdeploy/rocket.chat.tgz bundle/
sshpass -p "ulPt32bH6HTe" scp -v rocket.chat.tgz  root@198.8.93.21:/root/incoming/
echo "DONE!"
