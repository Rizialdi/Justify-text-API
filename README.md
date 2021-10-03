## Description

Justify text API is a service that help you format and justify your text. [online demo]()

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

This reposotory contains slightly modified rules to have a more friendly API. So do not hesitate to test the online [online demo]().

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

## Support

For support, just add an issue on the Issues tab.

[@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
