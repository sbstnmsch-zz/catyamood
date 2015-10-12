[![Build Status](https://travis-ci.org/sbstnmsch/catyamood.svg?branch=master)](https://travis-ci.org/sbstnmsch/catyamood)

# cat ya` mood
A simple firebase app for scrum retrospectives.

Clients using smartphones or tablets get a simple web-app (sender)
with three clickable mood pictures. Once they click one a mood it
will be saved to a firebase database.
Clients using stationary browsers get the server (receiver)
version served. Once the mood changes a mood picture is displayed
and a sound is played.

## Even more fun
Get addicted to the pug version! Just checkout the pug-version branch or hit
http://sebastian-misch.de/catyamood

## How to use it
Hit http://sebastian-misch.de/catyamood for a working sample.

Want more fun? Get addicted to the pug version! Just checkout the pug-version
branch or hit http://sebastian-misch.de/pugyamood

DON`T USE THAT FOR YOUR RETROSPECTIVES... as i'll definitily use it
for mine ;-)

## Contributing
To start a local client do:
```
$ npm install
$ grunt
$ nginxere # available at https://github.com/sbstnmsch/nginxere
           # or just serve ./dist with your favorite webserver
```
