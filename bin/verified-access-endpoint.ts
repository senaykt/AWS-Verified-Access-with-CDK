#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import { VerifiedAccessEndpointStack } from '../lib/';

const app = new cdk.App();


new VerifiedAccessEndpointStack(app, `VerifiedAccessEndpointStack`, { });