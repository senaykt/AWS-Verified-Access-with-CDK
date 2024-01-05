import { Construct } from 'constructs';
import {
  Stack,
  StackProps,
  CfnOutput,
  aws_s3,
  aws_iam,
  Fn,
} from 'aws-cdk-lib';

import { aws_ec2 as ec2 } from 'aws-cdk-lib';

export class VerifiedAccessEndpointStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);


    const cfnVerifiedAccessEndpoint = new ec2.CfnVerifiedAccessEndpoint(this, 'CfnVerifiedAccessEndpoint', {
      applicationDomain: '', //update here.
      attachmentType: 'vpc',
      domainCertificateArn: '', //update here.
      endpointDomainPrefix: '', //update here. (this sould be subdomain)
      endpointType: 'load-balancer',
      verifiedAccessGroupId: Fn.importValue(`VerifiedAccessGroupID`),

      description: 'Verified Access Endpoint',
      loadBalancerOptions: {
        loadBalancerArn: '', //update here.
        port: 443,
        protocol: 'https',
        subnetIds: [' ', ''],   //update here.
      },
      securityGroupIds: [''], //update here.

      tags: [{
        key: 'Name',
        value: 'verified-access-endpoint',
      }],


    });



    new CfnOutput(this, `VerifiedAccessEndpointDomain`, {
      value: cfnVerifiedAccessEndpoint.attrEndpointDomain,
      exportName: `VerifiedAccessEndpointDomain`,
      description: `VerifiedAccessEndpointDomain`,
    });

  }

}



