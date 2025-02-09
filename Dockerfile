FROM node:22.13.1

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i

COPY . .
CMD ["npm", "run" , "dev"]