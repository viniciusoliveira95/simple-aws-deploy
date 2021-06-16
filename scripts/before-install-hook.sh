#!/bin/bash
source /home/ec2-user/.bash_profile
set -e
yum update -y
pm2 update