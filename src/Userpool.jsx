import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-2_vXTnQPx6g",
    ClientId: "4t413h2nhv4tc6duhn405rn5aa",
}

export default new CognitoUserPool(poolData);