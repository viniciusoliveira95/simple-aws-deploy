#!/bin/bash
source /home/ec2-user/.bash_profile
set -e
cd /usr/share/nginx/html
npm install --prod
npm run build