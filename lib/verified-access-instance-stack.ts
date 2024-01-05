import { Construct } from 'constructs';
import {
  Stack,
  StackProps,
  CfnOutput,

  aws_ec2 as ec2,
  Fn,
} from 'aws-cdk-lib';


export class VerifiedAccessInstanceStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
      super(scope, id, props);

const verifiedAccessTrustProviderIds = Fn.importValue(`VerifiedAccessTrustProviderID`)
const cfnVerifiedAccessInstance = new ec2.CfnVerifiedAccessInstance(this, 'CfnVerifiedAccessInstance', /* all optional props */ {
  description: 'Verified Access Instance',
  tags: [{
    key: 'Name',
    value: 'verified-access-instance',
  }],
  verifiedAccessTrustProviderIds: [verifiedAccessTrustProviderIds]

});
      
      new CfnOutput(this, `VerifiedAccessInstanceID`, {
        value: cfnVerifiedAccessInstance.attrVerifiedAccessInstanceId,
        exportName: `VerifiedAccessInstanceID`,
        description: `VerifiedAccessInstanceID`,
      });

    }
 
}



