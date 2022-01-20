FROM fusuf/whatsasena:latest

RUN git clone https://github.com/4K5H475ER/RODGER-ALFA /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
