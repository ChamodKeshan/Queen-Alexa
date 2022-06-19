FROM fusuf/whatsasena:latest

RUN git clone https://github.com/ChamodKeshan/Queen-Alexa /root/ales
WORKDIR /root/ales/
RUN git clone https://github.com/ChamodKeshan/ChamodKeshan
RUN git clone https://github.com/ChamodKeshan/booster-queena
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
