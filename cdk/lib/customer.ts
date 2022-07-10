import { Stack, StackProps } from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";
import { CustomerLambda } from "./lambda";

export class CustomerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const getHealthLambda = new CustomerLambda(
      this,
      "GetHealthLambda - Customer",
      "getHealth.ts"
    );

    const apiGateway = new RestApi(this, "CustomerAPI", {
      restApiName: "Customer API"
    });

    apiGateway.root
      .addResource("/health")
      .addMethod("GET", new LambdaIntegration(getHealthLambda));
  }
}
