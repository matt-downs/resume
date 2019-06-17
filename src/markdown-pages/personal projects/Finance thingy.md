---
type: project
title: Finance thingy (working title)
technologies:
  - react
  - apollo
  - aws
  - lambda
  - graphql
  - dynamodb
projectUrl:
sourceUrl:
startDate: 2019-01-01
---

Call me cheap, but I wanted to roll my own budget tracker instead of pay \$7 a month to use an existing solution. I also enjoy working on projects in my free time and I thought it would be great for my experience too.

I wanted to craft the backend of the software on AWS Lambda, because of it's awesome scalability and also to get to know it's quirks. I decided I wanted to use GraphQL instead of REST, and I went with the Apollo server module because they offer a ready-made solution for Lambda. This was hooked up to DynamoDB for the data store, meaning that the backend of the service should technically scale as much as my budget allows for.

For the frontend of the service, I went with React because it is basically the industry standard now. I used the Apollo module to handle communication between the components and the GraphQL backend. Apollo also offers a local state management plugin which I decided to use instead of Redux.

I'm now a massive advocate of GraphQL and Apollo - the whole stack communicates seamlessly and write's its own API documentation based on the schema of the data. Each component in the frontend only queries the data it needs, and Apollo handles all the request batching and caching silently in the background.
