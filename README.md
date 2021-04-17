# TiendaDOLAVE
API desarrollada para la prueba de postulación bsale

El ejercicio se basó en la creación de una tienda en línea, a través de la cuál se debió comprobar que el desarrollador era capaz de interactuar con datos traídos desde un servidor, graficándolos a modo de tienda online. Este desarrolló debía contar con un buscador el cual debía traer los datos filtrados desde el servidor.

Tienda Dolave es una tienda en la cuál se pueden buscar productos a través del filtro en tiempo real el cual se encuentra en la parte superior de la página

![image](https://user-images.githubusercontent.com/33937242/115116549-00934a00-9f68-11eb-99dc-b06f4d6f3fd1.png)


Este desarrollo se llevó a cabo con las siguientes tecnologías:

- Javascript ES6 (Back-end)
- Materialize (Front-End)
- NodeJs & Express (API- Rest)
- MySQL (Base datos)
- HTML5 y CSS3 (Maquetación)

Al momento de utilizar el filtro, se pueden ver los resultados que entrega a continuación, acompañados de su NOMBRE, VALOR, y un botón con opción de COMPRAR.

![Sin título](https://user-images.githubusercontent.com/33937242/115116645-b1014e00-9f68-11eb-83c4-73f863755931.png)

======================================================================================

API Tienda_Dolave

La API de la tienda se desarrolló con NodeJS en conjunto con Express. La conexión con la base de datos se realizó con un addon de NodeJS de nombre MySQL

![image](https://user-images.githubusercontent.com/33937242/115116718-1c4b2000-9f69-11eb-8845-27ce0c184482.png)

(*) Estructura de Proyecto

En product.js se desarrollaron 3 endpoints:

1.- Obtener productos
2.- Obtener categorías
3.- Obtener productos por categoría

Este modelo fue exportado y llamado en Index.js para levantar el servidor final con el que trabaja Tienda_Dolave.

======================================================================================
