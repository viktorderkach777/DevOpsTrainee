#!/usr/bin/env bash
gcloud components update
gcloud container clusters create drone \
  --machine-type g1-small --num-nodes 3 \
  --zone=europe-west1-d
if [ $? -eq 1 ]
then
  echo "Unable to create GKE cluster. Aborting."
  exit 1
fi
