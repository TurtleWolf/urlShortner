every assignment covers the same basic setup  
Body-Parser, Cors, Express & Nodemon.  
I've added favicon.ico in the public directory  
along with HTML5 boilerplate & BootStrap4 in index.html,  
the Procfile for deployment to Heroku  
& .gitignore excludes node-modules  
[TWurl_Shortner](https://github.com/TurtleWolf/urlShortner/ "github.com/TurtleWolf/urlShortner")
  
"dependencies": {  
"body-parser": "^1.18.2",  
"cors": "^2.8.4",  
"express": "^4.16.2",  
"nodemon": "^1.12.1",  
"serve-favicon": "^2.4.5"  
},  

nvm install 8  
npm install  
nodemon  

git remote -v  
[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#debian-ubuntu/ "Command Line Interface")  

heroku --version  
npm install -g heroku-cli  
heroku login  
heroku create  
heroku git:remote -a stark-spire-40922  
git push heroku master   

[Deploying with Git](https://devcenter.heroku.com/articles/git/ "Heroku")  


[CodingTutorials360, 8:00](https://youtu.be/5T1YDRWaa3k?t=8m "URL Shortner Microservice Part 1")
