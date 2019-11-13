/* eslint-disable no-console */
const https = require('https');

const pkg = require('../package.json');

const slackWebHook = process.env.SLACK_WEBHOOK_URL;

const releaseNotification = {
  username: 'Yoga',
  text:
    'A new version has been released! <https://github.com/Gympass/yoga/releases|Check it out!> :tada:',
  icon_emoji: ':yoga_ds:',
  attachments: [
    {
      color: `#F46152`,
      fields: [
        {
          title: 'Version',
          value: pkg.version,
        },
      ],
    },
  ],
};

function sendSlackMessage(webhookURL, messageBody) {
  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
    };

    const req = https.request(webhookURL, requestOptions, res => {
      let response = '';

      res.on('data', d => {
        response += d;
      });

      res.on('end', () => resolve(response));
    });

    req.on('error', e => {
      reject(e);
    });

    req.write(messageBody);
    req.end();
  });
}

async function notify() {
  if (!slackWebHook) {
    console.log('Missing Slack Webhook URL');
    return;
  }

  console.log('Sending slack message...');
  try {
    await sendSlackMessage(slackWebHook, releaseNotification);
    console.log('Notification sent');
  } catch (e) {
    console.error('There was an error sending Slack notification', e);
  }
}

notify();
