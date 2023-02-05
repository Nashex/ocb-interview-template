# Open Coursebook Interview Template

Welcome to the OCB interview! In this interview you will be tasked to implement a feature using Markdoc, Next.js, and TailwindCSS. The majority of this project will be learning the stack. After you have learned the stack, you will implement a simple Markdoc "tag" which will function as a callout.

## Getting Started

1. Fork this repository to your account
2. Clone the repository to your local machine
3. Run `npm install` or `yarn` to install the dependencies
4. Run `npm run dev` or `yarn dev` to start the development server
5. Visit http://localhost:3000 to view the site

## Tech Stack

Open Coursebook uses several frameworks in order to take our extended, plugable markup language and transform it into serverside rendered HTML.

### Markdoc

The first technology we utilize is [Markdoc](https://markdoc.dev/docs/nextjs). Markdoc allows us to extend markdown using schema structures called **nodes** and **tags** and transform those into html. 

I highly recommend that you at least read through the "Core Concepts" portion of the documentation so that you can solidify your understanding on what exactly Markdoc does. We will be using it extensively!

For your task, a good amount of it, approximately half, will be utilizing Markdoc. 

### Next.js

Next.js is a framework that extends React and allows us to make server side rendered web pages. This is important for search engine optimization and client performance. 

For this project, it is recommended that you read through the basic features portion of the [documentation](https://nextjs.org/docs). This framework is what powers each OCB template site and is what interacts with markdoc to provide a rendered website.

### TailwindCSS

TailwindCSS is a utility first CSS framework. It is a very powerful tool that allows us to quickly prototype and build out our frontend applications. 

For this project, it is recommended that you read through the [documentation](https://tailwindcss.com/docs). We will be using it to style our callout component.

## Task

Your task is to implement a callout component. This component will be used for highlighting important information in our markdown documents. 

The callout component will be a Markdoc tag. This means that it will be a custom tag that we can use in our markdown documents. 

The callout component will be a markdown tag that will take a "type" attribute. This type attribute will be used to determine the color of the callout. 

For example, if we had a callout with the type "warning", it would look like this:

```md
{% callout type="warning" %}
This is a callout with the type "warning"
{% /callout %}
```

It should then render a callout to your markdown file.

Afterwards, please make sure to push your changes and make a new page on your site (make sure to include it in the Table of Contents) with a tutorial on how to use your component!