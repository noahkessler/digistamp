import { Construct } from "constructs";

export const getBranchName = (scope: Construct): string => {
  return scope.node.tryGetContext("branch");
};
