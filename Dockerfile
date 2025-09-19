FROM php:8.1-apache

COPY app/index.php /var/www/html/

EXPOSE 5000

# Run Apache
CMD ["apache2-foreground"]
