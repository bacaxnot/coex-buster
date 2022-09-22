# coex-buster

Main repo

npm install 

npm run dev 

## ROUTES

GET: / -> (redirect) -> /movies?page=1

GET: /movies -> (redirect) -> /movies?page=1

GET: /movies?page=number -> list of movies by pagination

GET: /movies?page=number&category=string -> list of films by category and pagination

GET: /movies?page=number&name=string -> list of movies by search and pagination

GET: /movies/:id -> detail of a movie by id

GET: /history -> order history

GET: /history/order/:id -> detail of an order

GET: /login -> user authentication

GET: /register -> create new account