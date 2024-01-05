Please create all of them step by step. 

1 - Verified Access Trust Provider

`cdk synth --app "npx ts-node bin/verified-access-trust-provider.ts"  VerifiedAccessTrustProviderStack`

`cdk deploy --app "npx ts-node bin/verified-access-trust-provider.ts"  VerifiedAccessTrustProviderStack`

2 - Verified Access Instance

`cdk synth --app "npx ts-node bin/verified-access-instance.ts"  VerifiedAccessInstanceStack`

`cdk deploy --app "npx ts-node bin/verified-access-instance.ts" VerifiedAccessInstanceStack`

3- Verified Access Groups

`cdk deploy --app "npx ts-node bin/verified-access-group.ts"  VerifiedAccessGroupStack`

`cdk synth --app "npx ts-node bin/verified-access-group.ts"  VerifiedAccessGroupStack`

4- Verified Access Endpoint

`cdk synth --app "npx ts-node bin/verified-access-endpoint.ts"  VerifiedAccessEndpointStack`

`cdk deploy --app "npx ts-node bin/verified-access-endpoint.ts"  VerifiedAccessEndpointStack`



Example Group Policy:

permit(principal, action, resource)
when {
    context.http_request.http_method != "INVALID_METHOD"
};