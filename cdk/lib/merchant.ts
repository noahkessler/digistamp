import { Stack, StackProps } from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";
import { MerchantLambda } from "./lambda";

export class MerchantStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const getHealthLambda = new MerchantLambda(
      this,
      "GetHealthLambda Merchant",
      "getHealth.ts"
    );

    const apiGateway = new RestApi(this, "MerchantAPI", {
      restApiName: "Merchant API"
    });

    apiGateway.root.addMethod("GET", new LambdaIntegration(getHealthLambda));
  }
}
