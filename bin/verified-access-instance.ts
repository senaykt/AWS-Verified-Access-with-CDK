#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import { VerifiedAccessInstanceStack } from '../lib/';

const app = new cdk.App();


new VerifiedAccessInstanceStack(app, `VerifiedAccessInstanceStack`, {  });