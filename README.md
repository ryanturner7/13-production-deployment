![CF](https://i.imgur.com/7v5ASc8.png)  Lab 13: Heroku Deployment
=======
[Code of Conduct](https://github.com/codefellows/code-of-conduct)

Ready to share what you've made with the world? Yes!

Then you need to push your code to a web server accessible to the whole Internet. This is your "production environment".

We'll be using Heroku as our production server. Heroku is a "Platform as a Service": your code is plugged in to pre-configured servers, which are started up for the world to access.

## Submission Instructions
When you are finished with lab, follow these steps to submit your work. Create one Pull Request (aka: "PR") from your Forked repo to the CF repo with your changes, and you'll each submit that same PR link in Canvas.

1. Ensure that all your local changes are committed, and pushed to your origin repo.
1. Visit the origin repo on github.com, and ensure that all of your completed work has been merged to master via Pull Requests within your repo.
1. Create a new PR from your Fork to the CF repo and ensure the branches look correct.
1. Fill in the template based on the text box prompts:
  1. Write a good descriptive summary of your changes:
    1. Be sure to include how much time you spent on it, and who you worked with.
    1. Briefly reflect on and summarize your process.
1. When you create the PR, it will have a unique URL. Copy this link and paste it into the assignment submission form in Canvas. Both the driver and the navigator will submit the same PR link.


## Learning Objectives

- Be able to push a dev site to production, so the world can see it.
- Understand the difference between a static page and a dynamically generated app page.

---

## Resources  

- [Heroku: Getting Started with Node](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
- [Deploying a Simple Blog to Heroku](https://howtonode.org/deploy-blog-to-heroku)

---

## Heroku Deployment

1. Follow your standard Fork & Clone process to set up today's lab
2. Once you've set up your standard workflow, you will need to create a new Heroku app within your repository
3. Don't forget to set your Github Token as an environment variable in the Heroku app
4. Deploy to your new instance!
5. Let your brilliance shine unto the world!

---

## Feature Tasks  

1. As a site owner, I want my site running on a robust hosting platform, so that I don't have to hire a sysadmin.
 - Create a new Heroku app for deployment.
1. As a developer, I want my app to run in a development environment that matches production, so that I can reduce bugs related to infrastructure surprises.
 - Start your app with `node server.js`
 - TODO: Refactor your AJAX request to proxy your GitHub API calls through the server as we did in class
1. As a developer, I want my secret tokens accessed only through environment variables, so that I can keep them secure.
 - Set the proper env vars on your local system.
 - Ensure your code passes ESLint
 - DO NOT create your Heroku app with a default name. If you do accidentally, rename it. Or blow it away, and start again.
 - Link to your live site in your README, for whichever repo you deploy.
**Deployed at https://ryanblogapp.herokuapp.com/**

#### Stretch Goals  

 1. As a site owner, I want [blog.my-own-domain-name.io] hooked up to my Heroku app, so that I don't have to explain to people how to spell "myblog.herokuapp.com" over the phone.

---

## Rubric  

Criteria | Pts
---|---
Meets all Assignment Reqs | 6
Uses idiomatic code style | 3
Follows proper Git workflow | 1
**Total** | **10**
