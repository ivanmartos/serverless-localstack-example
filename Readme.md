# serverless-localstack-example

This is an example of configuration for serverless with webpack and localstack.
With current config in the repo it is **NOT** working

## How to set up - localstack
These are the steps to deploy the sample application to localstack
1. Start localstack docker container - `docker-compose up`
2. Provision required infrastructure resources with terraform in `infrastructure` folder
```bash
cd infrastructure 
terraform init
terraform apply
```
3. Deploy serverless application to localstack - `npm run deploy:localstack`
4. In the browser open the outputted link `..../offline/_user_request_/hello`

This call fails with `Runtime.ImportModuleError`

## How to set up - serverless-offline
These are the steps to verify that application is running locally without localstack using serverless-offline plugin
1. `npm run offline`
2. In the browser open `http://localhost:3000/offline/hello`
3. Done - works
