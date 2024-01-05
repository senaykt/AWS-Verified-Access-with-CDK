import { Construct } from 'constructs';
import {
  Stack,
  StackProps,
  CfnOutput,
  aws_ec2 as ec2
} from 'aws-cdk-lib';

export class VerifiedAccessTrustProviderStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
      super(scope, id, props);

      const cfnVerifiedAccessTrustProvider = new ec2.CfnVerifiedAccessTrustProvider(this, 'CfnVerifiedAccessTrustProvider', {
        description: 'Trust Provider',
        policyReferenceName: 'your_reference_name',
        trustProviderType: 'user',
        userTrustProviderType: 'iam-identity-center',

        tags: [{
          key: 'Name',
          value: 'verified-access-trust-provider',
        }],
      });
      
      new CfnOutput(this, `VerifiedAccessTrustProviderID`, {
        value: cfnVerifiedAccessTrustProvider.attrVerifiedAccessTrustProviderId,
        exportName: `VerifiedAccessTrustProviderID`,
        description: `VerifiedAccessTrustProviderID`,
      });

    }
 
}



