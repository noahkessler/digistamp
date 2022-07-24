#!/usr/bin/env node
import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { MerchantStack } from "../lib/merchant";
import { CustomerStack } from "../lib/customer";
import { getBranchName } from "../lib/helpers";

const app = new App();

const branch: string = getBranchName(app);

new MerchantStack(app, `MerchantStack-${branch}`, {
  env: {
    region: "ap-southeast-2"
  }
});

new CustomerStack(app, `CustomerStack-${branch}`, {
  env: {
    region: "ap-southeast-2"
  }
});
