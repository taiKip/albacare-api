#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AlbacareApiStack } from '../lib/albacare-api-stack';

const app = new cdk.App();
new AlbacareApiStack(app, 'AlbacareApiStack', {
  env: {
    account:'030298933305',
    region:'ap-southeast-2'
  }
});

app.synth();