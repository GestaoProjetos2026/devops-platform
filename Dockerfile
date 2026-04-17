FROM nginx:alpine

# Remove config padrão
RUN rm /etc/nginx/conf.d/default.conf

# Copia seu nginx customizado (se tiver)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos do site
COPY . /usr/share/nginx/html

# Expõe a porta padrão do nginx
EXPOSE 80

# Start do nginx
CMD ["nginx", "-g", "daemon off;"]
