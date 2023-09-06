#!/usr/bin/env bash
npm run generate
cd .output/public
aws s3 sync . s3://arn:aws:s3:::hack-day1-images-eu-west-2 --profile default
