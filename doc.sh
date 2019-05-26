#!/bin/env bash

git add .
git commit -m "update"
yarn doc
git checkout gh-pages
rm -f ./common/*
mv -f doc/* ./
git add .
git commit -m "update"
git push
git checkout -