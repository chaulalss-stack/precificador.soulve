FROM nginx:alpine
COPY . /usr/share/nginx/html/
RUN cd /usr/share/nginx/html && mkdir -p app assets \
 && mv app-index.html app/index.html \
 && mv tela-lucro.png tela-precos.png xlsx.full.min.js assets/ \
 && rm -f Dockerfile README.md
