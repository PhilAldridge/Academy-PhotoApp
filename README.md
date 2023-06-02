# Hack Day 1 Boilerplate

## Branch Repository

Click on master - one person should create a develop branch for your team

##Clone Repository & Setup
In your new branch, click _Clone_ button

Use HTTPS

Click **Generate git credentials**

COPY THE PASSWORD

Use the HTTP URL to clone locally and setup environment:

1. Open Ubuntu
2. Make sure you are in your HOME directory (cd ~ to make sure)
3. Clone the Repository (git clone https....etc)
4. Navigate to the **hack-day-1-boilerplate** folder and switch to the new branch (git checkout branchname)
5. Type ```code .``` and press enter to open VS Code
6. Open a new Terminal (ensure it's **bash*** or **WSL**) and run the command _sudo apt install npm_
7. If you have had no problems, go to the **Build Setup** section

##Errors?
try _sudo apt-get update_

**DNS issues?**

sudo bash -c 'echo "nameserver 8.8.8.8" > /etc/resolv.conf'

sudo bash -c 'echo "[network]" > /etc/wsl.conf'

sudo bash -c 'echo "generateResolvConf = false" >> /etc/wsl.conf'

**Are you root user?**

Uninstall and reinstall WSL

**'bash/r' : No such file or directory**

You might have 2 versions of Ubuntu installed....

**error digital envelope routines::unsupported**

if you have cloned into Windows in the terminal in VS Code use 

```bash
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```

if you have cloned into WSL on the command line terminal in VS Code use

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

## Build Setup

Run the following to install dependencies an open your site locally
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

To generate a static site and deploy, you can use the following commands (once you have an S3 bucket setup)
```bash
# build the application and generate every route as a HTML file (used for static hosting).
$ npm run generate

# generate and deploy static site to S3 (need to specify bucket in deploy.sh)
$ npm run deploy
```

## Use the provided APIs

### Retrieving images

Perform a GET Request

```
https://bjssacademyhackday.azurewebsites.net/IL/teams/{teamname}/files
```

Response will be a list of images (if there are any in your storage)

```js
{
  "data": [
    "https://bjssacademyhackday.blob.core.windows.net/files/{teamname}/image1.jpg",
    "https://bjssacademyhackday.blob.core.windows.net/files/{teamname}/image2.jpg",
  ]
}
```

### Uploading image

Perform a POST Request with a JSON body, where the file is a base64 encoded image:

```js
const data = {
      file: base64_encoded_image,
      fileName: the_filename,
    };
```
The endpoint is the same as before:

```
https://bjssacademyhackday.azurewebsites.net/IL/teams/{teamName}/files
```

Response will be an object with a key of url

```js
{
  "url": "https://bjssacademyhackday.blob.core.windows.net/files/atari/image3.png"
}
```
