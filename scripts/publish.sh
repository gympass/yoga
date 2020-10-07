#!/bin/bash
​
BRANCH=`git rev-parse --abbrev-ref HEAD`
echo "on $BRANCH branch"
​
if [ $BRANCH == 'master' ];
then
  echo "yarn lerna publish --yes"
elif [ $BRANCH == 'alpha' ] || [ $BRANCH == 'beta' ];
then
  echo "yarn lerna publish --conventional-prerelease --yes --preid $BRANCH"
else
  echo "Nothing to publish on branch $BRANCH..."
fi