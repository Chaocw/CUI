#!/bin/env bash
npm version $1 && \
git push origin master:deploy

#chmod +x xx  添加执行权限  sh ./xx ==>  ./xx
#major minor patch
#$1 == arguments[0]
#git push --follow-tags
