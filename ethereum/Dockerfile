FROM node:20.9.0

WORKDIR /app

COPY package*.json ./

RUN npx hardhat compile

COPY . .

EXPOSE 8545

CMD ["npm", "start"]
