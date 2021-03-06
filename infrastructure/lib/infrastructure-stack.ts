import * as cdk from "@aws-cdk/core";
import { StaticSite } from "./static-site";

export class CycloneExampleSite extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new StaticSite(this, "StaticSite", {
      domainName: "cyclonecms.com",
      siteSubDomain: "example",
    });
  }
}
