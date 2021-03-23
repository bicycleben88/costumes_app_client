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
>
> ### Custom Video Player
>
> - useRef() to create reference object to DOM element
> - ![video use ref](https://i.imgur.com/SI1HGUP.png)
> - add reference to element
> - ![video reference](https://i.imgur.com/tACzWfE.png)
> - useEffect() to assign element to a variable
> - ![use effect](https://i.imgur.com/Lygr3Ic.png)
> - Add event listeners
>   - video
>     - click -> togglePlay()
>     - play & pause -> updateButton()
>     - timeUpdate -> handleProgress()
>   - progress bar
>     - click -> scrub()
>     - mouce move -> scrub() if mouse is down
>     - mouse down -> mouseDown is true
>     - mouse up -> mouseDown is false
>   - play button
>     - click -> togglePlay()
>   - range inputs
>     - change & mouseMove -> handleRangeUpdate()
>   - skip buttons
>     - click - skip()
> - toggle() plays or pauses the video
> - updateButton() prints play or pause button
> - skip() sets video's current time to + or - value of seconds stored in data-skip attribute
> - ![skip function](https://i.imgur.com/PgbihKp.png)
> - handleProgress() moves progress bar with video's current time
>   - calculate percentage of elapsed timed
>   - set progress bar's width to that percentage
> - ![handle progress function](https://i.imgur.com/0iih9fi.png)
> - handleRangeUpdate() - change the video's volume or playback rate to the value of the input
> - scrub() - moves current video's current time
>   - calculate time play to play the video
>   - set the current time of the video to that time
> - ![scrub function](https://i.imgur.com/jSeL4sk.png)

## Notes

> - Create Canvas in React: https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
> - useRef(): returns a mutable ref object whose .current property is initialized to the passed argument

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Portfolio](https://higginbotham.fun/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
