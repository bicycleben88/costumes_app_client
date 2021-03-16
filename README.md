# Creepy Costumes

This is a front end web application built with React. It allows a user to Create, Read, Update & Delete (CRUD) a halloween costume from an inventory of festive items. It accesses a back end API I buit with Node that uses RESTful routes to serve data from a non-relational database (MongoDB)

## [Video WalkThru](https://www.youtube.com/playlist?list=PLjYC3ZkfhqCpN1r8fTiDEfQJJgdzxw8QG)

> ### Live Earls:
>
> [costumes-app-client.vercel.app](https://costumes-app-client.vercel.app/)
>
> [costumes-api.herokuapp.com](https://costumes-api.herokuapp.com/items)

![Landing page to Creepy Costumes](https://i.imgur.com/5C3nDAZ.png)

## Technologies Used

> ### Front End Application:
>
> - React.js
> - JavaScript
> - JWT
> - CSS Flexbox
>
> ### Back End API:
>
> - Node.js
> - MongoDB
> - Mongoose
> - JWT
> - BCrypt

## Features & Functions

> ### Drawing Canvas
>
> - create canvas context
> - useRef() creates reference object to be used in \<canvas ref={referenceObject}> tag
> - ![use ref](https://i.imgur.com/BGFmRir.png)
> - ![canvas reference](https://i.imgur.com/w5r6g7q.png)
>   - useEffect() defines canvas's context, configures it & invokes draw() function, passing the context as an argument.
> - ![use effect](https://i.imgur.com/ZL6mp5L.png)
>   - define draw variables
> - ![canvas variables](https://i.imgur.com/rgfGWZY.png)
>   - add event listeners to \<canvas>
>     - mouse down - set isDrawing to true & define values of lastX & lastY
>     - mouse move - invoke draw() function
>     - mouse up & mouse out - set isDrawing to false
> - ![event listeners](https://i.imgur.com/OJxUbZn.png)
>   - draw()
>     - return if mouse isn't clicked & over the canvas
>     - use context methods to draw the line
>     - store values of the last place the user had the mouse clicked
> - ![draw function](https://i.imgur.com/s9OT9OY.png)
>   - .clearRect method clears the canvas
> - ![clear canvas button](https://i.imgur.com/CLhIp0l.png)
>   - .strokeStyle defines the color of the line
> - ![color picker input](https://i.imgur.com/QndaAh1.png)

## Notes

> - Create Canvas in React: https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
> - useRef(): returns a mutable ref object whose .current property is initialized to the passed argument
