#!/usr/bin/env bash
npm run generate
cd .output/public
aws s3 sync . s3://BUCKET_NAME --profile default
