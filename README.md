# coex-buster

Main repo

npm install 

npm run dev 

## ROUTES

GET: / -> (redirect) -> /shop?page=1

GET: /shop -> (redirect) -> /shop?page=1

GET: /shop?page=number -> listado de películas

GET: /shop?page=number&category=string -> listado de películas por categoría y paginación

GET: /shop?page=number&name=string -> listado de películas con b

GET: /shop/movie/:id -> detalle de una película

GET: /history -> historial de las órdenes

GET: /history/order/:id -> detalle de una orden

GET: /login -> autenticación de usuarios

GET: /register -> crear nueva cuenta