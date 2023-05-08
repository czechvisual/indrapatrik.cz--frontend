FROM php:7.4-apache

# Nastavte pracovní adresář
WORKDIR /var/www/html

# Zkopírujte veškerý obsah projektu do kontejneru
COPY . .

# Nastavte Apache, aby naslouchal na portu 3000
RUN sed -i 's/80/3000/' /etc/apache2/ports.conf /etc/apache2/sites-enabled/000-default.conf

# Exponujte port 3000
EXPOSE 3000