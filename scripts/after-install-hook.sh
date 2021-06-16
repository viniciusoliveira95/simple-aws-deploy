#!/bin/bash
source /home/ec2-user/.bash_profile
set -e
cd /home/app
npm install --prod
npm run build