#!/usr/bin/env bash
git checkout master
grunt build
git add --all
git commit -m "Grunt build"
git push
ssh -t -i ~/.ssh/test.pem  ubuntu@test.com 'cd <path> && git pull'
