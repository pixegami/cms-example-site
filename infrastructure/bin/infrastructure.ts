#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { CycloneExampleSite } from "../lib/infrastructure-stack";

const app = new cdk.App();
new CycloneExampleSite(app, "CycloneExampleStack", {
  env: { account: "535707483867", region: "us-east-1" },
});
