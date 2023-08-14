# Get Started with Serverless Application (LAMBDA)

1. Make sure to create separate App function

- App.js (runs the Application)
- Server.js (run the App.js with express port)

2. This is to ensure that the app port will be provided by AWS during serverless deploy and express app on local deployment

3. Create serverless setup

- `npm i -g serverless` to setup the global serverless configuration
- Create default or named AWS_PROFILE by using the following command:

```sh
serverless config credentials --provider aws --profile <aws-profile-name> --key <aws-key-with-cloudformation-role> --secret <aws-secret>
```

- In terminal, export the named AWS_PROFILE if you have created the AWS_PROFILE by

```sh
export AWS_PROFILE=<aws-profile-name>
```

- run the following command to start the serverless setup in project

```sh
 serverless create -t aws-nodejs -n userAuth
```

- This will create two additonal files in the project (handler.js, serverless.yml)

`NOTE:` You can select multiple template such as docker template, python template etc. Learn More at this [Link](https://www.serverless.com/framework/docs)

- Make sure to update the .env file, as we are configuring our serverless.yml file using .env file.

- Now, run `yarn run deploy` to deploy the API Application to the Lambda

- Check the Serverless Information using the following command to get the API URLs

```sh
serverless info
```

- Incase of API Update, run the following command again to redeploy the changes.

```sh
serverless deploy
```

- If you want to remove the serverless functions/application, use the following command:

```sh
serverless remove <service-name>
```
