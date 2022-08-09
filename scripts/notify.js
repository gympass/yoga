/* eslint-disable no-console */
const https = require('https');
const git = require('git-last-commit');

const googleChatsWebHook = process.env.GOOGLE_CHATS_WEBHOOK_URL;

const releaseNotification = {
  text: 'A new <https://github.com/Gympass/yoga/releases|version> has been released! <https://gympass.github.io/yoga|Check it out!> 🎉 \n\n',
};

function sendGoogleChatMessage(webhookURL, messageBody) {
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
  if (!googleChatsWebHook) {
    console.log('Missing Google Chat Webhook URL');
    return;
  }

  console.log('Sending Google Chat message...');
  try {
    const { body: changedPackages } = await getChangedPackages();

    const changes = changedPackages.text.split('\n');

    releaseNotification.text = releaseNotification.text.concat(
      changes.join('\n'),
    );

    const notification = JSON.stringify(releaseNotification);

    await sendGoogleChatMessage(googleChatsWebHook, notification);
    console.log('Notification sent');
  } catch (e) {
    console.error('There was an error sending Google Chat notification', e);
  }
}

notify();
