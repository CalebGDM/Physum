export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "Physum": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "Physum": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "s3physumstoraged4e548f0": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "analytics": {
        "physum": {
            "Region": "string",
            "Id": "string",
            "appName": "string"
        }
    }
}