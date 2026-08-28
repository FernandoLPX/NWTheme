FROM node:20-alpine

RUN npm install -g @vscode/vsce

WORKDIR /app

ENTRYPOINT ["vsce"]
