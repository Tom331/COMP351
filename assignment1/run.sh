#!/usr/bin/env bash
cd app
docker-compose build
docker-compose up -d
docker-compose logs -f
