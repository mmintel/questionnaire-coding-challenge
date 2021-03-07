# Task
You need to implement a questionnaire to recommend a user the best insurance plan for their situation. We prepared an API for you, you can find the documentation below.

Let's split the task into the following sub-tasks:
1. Collect the data from the user.
2. Send the data to the API.
3. Fetch the recommendation and display it to the user.

## 1. Questionnaire & data collection
At first, we would need to collect the following information from the user, in the given order:
- First name
- Address
- If they have any children (boolean)
    - If yes → How many do they have?
- Their occupation
    - Employed
    - Student
    - Self-employed
- Email address

Your questionnaire will need to satisfy the following criteria:

- Only one question per page.
- Persistency. It should be possible to close the browser, then open it again and retrieve the previously entered information.

## 2. Send the questionnaire to the API

Once completed, the questionnaire will be sent back to a backend service. This backend service will store the questionnaire respond with a [JWT](https://jwt.io), which can then be used to display recommendations.

### Endpoint

`POST` `/user` `Unauthenticated`

Request:
```JSON
{
	"firstName": "Jane",
	"address": "Lohmühlenstraße 65",
	"numberOfChildren": 2,
	"occupation": "EMPLOYED",
	"email": "jane.doe@feather-insurance.com"
}
```

where `occupation` can have the following values: `EMPLOYED`, `SELF_EMPLOYED`, `STUDENT`.

Response:
```JSON
{
	"jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImphbmUuZG9lQGdldHBvcHN1cmUuY29tIiwiZmlyc3ROYW1lIjoiSmFuZSIsIm51bWJlck9mQ2hpbGRyZW4iOjIsIm9jY3VwYXRpb24iOiJFTVBMT1lFRCIsImFkZHJlc3MiOiJMb2htXHUwMGZjaGxlbnN0cmFcdTAwZGZlIDY1IiwiaWQiOiIyMDRjMDM5ZC1hOTA2LTQ3MTAtYjVkYi0zOTRmZmFiZmFhYzgifQ.TR5rPmcMItQHsFOgAtYto3XVO1IbXaHltsDJn7XIcJk"
}
```

Example Request:
```
curl https://challenge-dot-popsure-204813.appspot.com/user \
-H 'Content-Type: application/json' \
-d '{"firstName":"Jane","address":"Lohmühlenstraße 65","numberOfChildren":2,"occupation":"EMPLOYED","email":"jane.doe@getpopsure.com"}' \
-X POST
```

## 3. Fetch and display the recommendation
After the user has been created you can now use the JWT to authenticate your requests. You need to store the token locally, and use it in a header:

`Authorization: Bearer <token>`

With a valid token you should be able to fetch the recommendation tailored for the user:

### Endpoint

`GET` `/recommendation` `Authenticated`

`/recommendation`

Response:

```json
[
	{
		"type": "PRIVATE_LIABILITY",
		"price": {
	    	"amount": 4.3,
			"periodicity": "MONTH"
		}
	},
	{
		"type": "HOME_CONTENT",
		"price": {
			"amount": 103.32,
			"periodicity": "YEAR"
		}
	},
	{
		"type": "HEALTH_INSURANCE",
		"price": {
			"amount": 320.32,
			"periodicity": "MONTH"
		}
	}
]
```

# Notes
## Caveats
* you can go back and forth using browser functionality, no validation happening here
* data from localStorage is not validated and errors might occur when you change it manually

## Future improvements
* add loading states
* you should add more types of questions and add better validation
* you could use an AuthenticatedHttpService instead of passing the token
* you could use Input and Output ports for use cases
* make use of config or env vars
* add more tests also integration tests
* generate better testing data

# Setup
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
