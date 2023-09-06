#!/usr/bin/env bash
npm run generate
cd .output/public
aws s3 sync . s3://arn:aws:s3:::hackday1 --profile default
