#!/bin/bash
set -e

# Install nginx
sudo apt-get update
sudo apt-get install -y nginx

sudo cp -r html/* /var/www/html/

# Map domain.example.com to localhost
echo "127.0.0.1 domain.example.com" | sudo tee -a /etc/hosts
