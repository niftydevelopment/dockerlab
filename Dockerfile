FROM node:4-onbuild
COPY mock/ /mock
COPY app/index.js .
EXPOSE 3000