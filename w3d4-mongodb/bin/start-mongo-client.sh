#!/bin/bash

docker run --rm -it --link mongo-server mongo mongo --host mongo-server test
