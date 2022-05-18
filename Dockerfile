FROM fusuf/whatsasena:latest

RUN git clone https://github.com/ChamodKeshan/Queen-Alexa /root/Queen-Alexa
WORKDIR /root/Queen-Alexa/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
