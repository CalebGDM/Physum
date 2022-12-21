/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	USER_TABLE
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require("aws-sdk");
const https = require('https')
const { USER_TABLE } = process.env;
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  // get users
  var params = {
    TableName: USER_TABLE,
  };

  const users = await docClient.scan(params).promise();
  console.log(
    `sending notifications to ${users.Items.length} users...`,
    JSON.stringify(users)
  );

  await Promise.all(
    users.Items.map(
      (user) =>
        user?.expoNotificationToken &&
        sendPushNotification(user.expoNotificationToken)
    )
  );

  // send push notifications to every one

  // personalize the mesage based on the user progress
  return "Finished";
};


async function sendPushNotification(expoPushToken) {
    const message = {
        to: expoPushToken,
        sound: "default",
        title: "Ponte a estudiar",
        body: "And here is the body!",
        data: { someData: "goes here" },
      };

    const options = {
      hostname: 'exp.host',
      path: '/--/api/v2/push/send',
      method: 'POST',
      port: 443, // 👈️ replace with 80 for HTTP requests
      headers: {
        Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
      },
    };
  
    return new Promise((resolve, reject) => {
      const req = https.request(options, res => {
        let rawData = '';
  
        res.on('data', chunk => {
          rawData += chunk;
        });
  
        res.on('end', () => {
          try {
            resolve(JSON.parse(rawData));
          } catch (err) {
            reject(new Error(err));
          }
        });
      });
  
      req.on('error', err => {
        reject(new Error(err));
      });
  
      // 👇️ write the body to the Request object
      req.write(JSON.stringify(message));
      req.end();
    });
  }
