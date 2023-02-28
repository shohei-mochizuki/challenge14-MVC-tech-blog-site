# Challenge 14 - MVC : Tech Blog Site[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## DESCRIPTION

This application enables users to signup/login to the site and create/update blog posts or leave comments on posts. Even if they are not logged in, they can still see posts and comment. The summary is as follows:

- Users can signup to, login to or logout from the site.
- When logged out, they can only view posts and comments.
- When logged in, they can create new posts, edit/delete their own posts and leave comments.
- Users' login credentials are saved securely (encrypted).
- This application follows Model-View-Controller paradigm so it can be easily maintained and edited.

## TABLE OF CONTENTS

[INSTALLATION](#installation)<br>
[USAGE](#usage)<br>
[LICENSE](#license)<br>
[CONTRIBUTION](#contribution)<br>
[TESTS](#tests)<br>
[SCREENSHOTS](#screenshots)<br>
[DEPLOYMENT](#deployment)<br>
[QUESTIONS](#questions)

## INSTALLATION

### HEROKU

If you use the application on Heroku, no installation is needed. Go to the webpage directly: [https://tech-blog-shohei.herokuapp.com/](https://tech-blog-shohei.herokuapp.com/)

### LOCAL COMPUTER

#### Step 1. Install libraries

This application requires 1.JavaScript, 2.Node.JS (version 16, not the latest) and 3.Node package manager to run. In a blank folder, put necessary files (refer to the TESTS section for the details) and open the command line. In the command line, move to this folder and then type "npm install". Make sure that a folder called "node_modules" and a file called package-lock.json are created. Following libraries are used:

- [express](https://www.npmjs.com/package/express)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [sequelize](https://www.npmjs.com/package/sequelize)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [handlebars](https://www.npmjs.com/package/handlebars)
- [express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [express-session](https://www.npmjs.com/package/express-session)
- [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)

#### Step 2. Prepare database

First you need to load your data onto MySQL server. Go to Command Line and go to the folder of this application which contains db folder and index.js. Once you're in the folder, type "mysql -u root" (if you get a server connection error, type "mysql.server start" first) and then you're ready to use MySQL. In MySQL, type "source db/schema.sql to create a database and you can exit MySQL by typing "quit" and hit Enter button.

#### Step 3. Start the application

In Command Line, type "npm start" and then you'll see a message "App listening on PORT 3001!". Go to a web browswe and type "http://localhost:3001/" to go to the homepage.

## USAGE

1. When you use this application for the first time, go to the signup page by clicking "Login" button at the navigation bar at the top of the page and then click "HERE for signup!" link at the bottom of the page.
2. Input your preferable username and password. Password needs to be 8 characters or more. Username cannot be the same as others so be creative!
3. When you come back to the site later, go to the login page and input your username and password. \*Don't worry! Your password is securely stored (encrypted) in the database!
4. "Home" page shows the list of all posts with their title, content, poster's username and creation date.
5. When you click a post on "Home" page, you can see the details of the post and comments on it. If you're logged in, you can leave a comment too.
6. If you're logged in, you can go to "Dashboard" page where you can see the list of your postes.
7. When you click "Create a new post", you'll be taken to another page where you can input a title and a content to create a new post.
8. When you click a post on "Dashboard" page, you'll be taken to another page where you can edit the post or delete the post.
9. Click "Logout" anytime to end the session!

## LICENSE

MIT:<br>
Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the “Software”), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so.

## CONTRIBUTION

Feel free to develop this application by forking the GitHub repository and sending me pull requests. You can also contact me.

## TESTS

Copy the following files and folder to your computer and test this application:

```md
.
├── config/
| └── connection.js
├── controllers/
| ├── api/
| | ├── comment-routes.js
| | ├── index.js
| | ├── post-routes.js
| | └── user-routes.js
| ├── home-routes.js
| └── index.js
├── db/
| └── schema.sql
├── models/
| ├── Comment.js
| ├── index.js
| ├── Post.js
| └── User.js
├── public/
| ├── css/
| | └── style.css
| └── js/
| ├── edit-post.js
| ├── login.js
| ├── logout.js
| ├── new-comment.js
| ├── new-post.js
| └── signup.js
├── utils/
| ├── auth.js
| └── helpers.js
├── views/
| ├── layouts/
| | └── main.handlebars
| ├── partials/
| | ├── comment-details.handlebars
| | ├── dashboard-post.handlebars
| | └── post-details.handlebars
| ├── dashboard.handlebars
| ├── editpost.handlebars
| ├── homepage.handlebars
| ├── login.handlebars
| ├── newpost.handlebars
| ├── post.handlebars
| └── signup.handlebars
├── .env  
├── package.json  
└── server.js
```

.env: make your own env file with DB_NAME='ecommerce_db' DB_USER='your user name' DB_PASSWORD='your own password'

## SCREENSHOTS

![image](https://user-images.githubusercontent.com/121307266/221730640-2068afea-92b2-498a-8a67-f43b0fd05b19.png)
![image](https://user-images.githubusercontent.com/121307266/221730694-187640f5-75f3-41b0-ab3c-a853c5998d22.png)
![image](https://user-images.githubusercontent.com/121307266/221730732-0106df51-a539-47f2-bf1f-25d4643ee48c.png)

## DEPLOYMENT

This application is available on HEROKU: [https://tech-blog-shohei.herokuapp.com/](https://tech-blog-shohei.herokuapp.com/)

## QUESTIONS

If you have any questions, feel free to reach out to me!<br>
GitHub page: [https://github.com/shohei-mochizuki](https://github.com/shohei-mochizuki)<br>
Email: [shohei.mochizuki.jp@gmail.com](mailto:shohei.mochizuki.jp@gmail.com)
