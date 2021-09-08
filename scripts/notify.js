/* eslint-disable no-console */
const https = require('https');
const git = require('git-last-commit');

const slackWebHook = process.env.SLACK_WEBHOOK_URL;
const VIBIN = '#D8385E';

const releaseNotification = {
  username: 'Yoga',
  icon_emoji: ':yoga-ds:',
  text:
    'A new <https://github.com/Gympass/yoga/releases|version> has been released! <https://gympass.github.io/yoga|Check it out!> :tada:',
  attachments: [],
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

function getChangedPackages() {
  return new Promise((resolve, reject) => {
    git.getLastCommit((error, commit) => {
      if (error) {
        reject(error);
      }

      resolve(commit);
    });
  });
}

async function notify() {
  if (!slackWebHook) {
    console.log('Missing Slack Webhook URL');
    return;
  }

  console.log('Sending slack message...');
  try {
    const { body: changedPackages } = await getChangedPackages();

    const changes = {
      color: VIBIN,
      text: changedPackages,
    };

    releaseNotification.attachments.push(changes);

    const notification = JSON.stringify(releaseNotification);

    await sendSlackMessage(slackWebHook, notification);
    console.log('Notification sent');
  } catch (e) {
    console.error('There was an error sending Slack notification', e);
  }
}

notify();
