#!/bin/bash

BRANCH=`git rev-parse --abbrev-ref HEAD`
echo "on branch $BRANCH"

if [ $BRANCH == 'master' ];
then
  yarn lerna publish --yes
elif [ $BRANCH == 'alpha' ] || [ $BRANCH == 'beta' ];
then
  yarn lerna publish --conventional-prerelease --yes --preid $BRANCH
else
  echo "Nothing to publish on branch $BRANCH..."
fi
