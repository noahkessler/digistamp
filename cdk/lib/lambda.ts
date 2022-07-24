import { Architecture, Runtime } from "aws-cdk-lib/aws-lambda";
import {
  NodejsFunction,
  NodejsFunctionProps
} from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

const defaults: Partial<NodejsFunctionProps> = {
  bundling: {
    sourceMap: true,
    minify: true
  },
  runtime: Runtime.NODEJS_16_X,
  memorySize: 256,
  architecture: Architecture.ARM_64,
  awsSdkConnectionReuse: true
};

class Lambda extends NodejsFunction {
  constructor(
    scope: Construct,
    id: string,
    entry: string,
    props?: Partial<NodejsFunctionProps>
  ) {
    super(scope, id, {
      ...defaults,
      entry,
      ...props
    });
  }
}

export class MerchantLambda extends Lambda {
  constructor(
    scope: Construct,
    id: string,
    file: string,
    props?: Partial<NodejsFunctionProps>
  ) {
    const entry = `../backend/merchant/src/handlers/${file}.ts`;
    super(scope, id, entry, props);
  }
}

export class CustomerLambda extends Lambda {
  constructor(
    scope: Construct,
    id: string,
    file: string,
    props?: Partial<NodejsFunctionProps>
  ) {
    const entry = `../backend/customer/src/handlers/${file}.ts`;
    super(scope, id, entry, props);
  }
}
