## Description

Justify text API is a service that help you format and justify your text.

Details on how to use the online demo are provided below. If you want the *IP address*, send us a message.


## Context

> Implement and deploy a REST API that justifies a text passed in parameter.
> Constraints
>
> - The line length of the justified text must be 80 characters.
> - The endpoint must be of the form /api/justify and must return a justified text following a POST request with a body of ContentType text/plain
> - The api must use a unique token authentication mechanism. Using for example an api/token endpoint that returns a token of a POST request with a json body {"email": "foo@bar.com"}.
> - There must be a rate limit per token for the /api/justify endpoint, set to 80,000 words per day, if there are more in a day then a 402 Payment Required error must be returned.
> - The code must be deployed on a public url or ip
> - The code must be rendered on github
> - Language: Nodejs
> - NO use of external library for justification

## Implementation

This reposotory contains slightly modified rules to have a more friendly API. So do not hesitate to test the online.

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ npm start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Using the online demo

Some routes have a **locker** on the right. To use those routes, you must first get an **access token** from the application. To do so, follow this guide:
- Register to the application using the */auth/registerUser* route and fill the body tag (See below).
- Copy the value of "access_token" in the response body. (*Below it is : **eyJhb .... Qic*** )
- Paste that value in **Authorize** at the top of the file (See below). 
- Enjoy the restricted routes. And do not hesitate to give any feedback.

![First image](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe5a66ea9-3694-4e11-8ab6-062d3e1d1723%2FUntitled.png?table=block&id=7cd84997-83e1-48b4-a17b-1ff4abc1c2c6&spaceId=685f6a3f-2764-4e53-9986-4bf5be6cc966&width=2000&userId=82de5ecf-35bb-4a26-8c66-75d93c6f930a&cache=v2)


![Second image](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbea47066-c36e-4f30-93df-bd8dd4f89183%2FGroup_215.png?table=block&id=7913001b-480c-4a41-80e1-0d6cda3cefac&spaceId=685f6a3f-2764-4e53-9986-4bf5be6cc966&width=1750&userId=82de5ecf-35bb-4a26-8c66-75d93c6f930a&cache=v2)
## Support

For support, just add an issue on the Issues tab.

## License

Nest and this repository are[MIT licensed](LICENSE).
