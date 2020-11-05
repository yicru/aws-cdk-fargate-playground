#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkFargatePlaygroundStack } from '../lib/aws-cdk-fargate-playground-stack';

const app = new cdk.App();
new AwsCdkFargatePlaygroundStack(app, 'AwsCdkFargatePlaygroundStack');
