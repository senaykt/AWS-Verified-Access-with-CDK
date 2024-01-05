import { Construct } from 'constructs';
import {
  Stack,
  StackProps,
  CfnOutput,
  aws_ec2 as ec2,
  Fn,
} from 'aws-cdk-lib';

export class VerifiedAccessGroupStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);



    const cfnVerifiedAccessGroup = new ec2.CfnVerifiedAccessGroup(this, 'MyCfnVerifiedAccessGroup', {
      verifiedAccessInstanceId: Fn.importValue(`VerifiedAccessInstanceID`),

      description: 'description',
      policyDocument: 'permit(principal, action, resource) when { context.http_request.http_method != "INVALID_METHOD"};',
      policyEnabled: true,
      tags: [{
        key: 'Name',
        value: 'verified-access-instance',
      }],
    });



    new CfnOutput(this, `VerifiedAccessGroupID`, {
      value: cfnVerifiedAccessGroup.attrVerifiedAccessGroupId,
      exportName: `VerifiedAccessGroupID`,
      description: `VerifiedAccessGroupID`,
    });

  }

}



