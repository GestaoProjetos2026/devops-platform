FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
# Copia os arquivos do site
COPY . /usr/share/nginx/html

# Expõe a porta padrão do nginx
EXPOSE 80

# Start do nginx
CMD ["nginx", "-g", "daemon off;"]
