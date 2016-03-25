# React / Node Todo Demo

This demo shows the core functionality of [Visual Studio Code](https://code.visualstudio.com)
for Build 2016 session workshop.

## Getting Started

```bash
# install deps
npm install
```

**Backend**

```bash
# Run in terminal
npm run server
```

Debug in Visual Studio Code with <kbd>f5</kbd>

**Frontend**

```bash
# run in terminal
npm run dev
```

Run from Visual Studio Code by executing command (with <kbd>f1</kbd> to open command palette) 
`Run Task` and selecting `dev`.

**Database**

No configuration should be necessary necessary. Data backend is simply a json file called `todos.json` in `data/`.
If you run into any issues make sure `todos.json` has the following inside before starting the 
server. This will become more robust overtime.

```json
{
    "todos": []
}
```

> Obviously, this type of database isn't scalable. 

## Demo

![todo demo](/media/todo_demo.gif)

## Technologies

* [Visual Studio Code](https://code.visualstudio.com)
* [node](https://nodejs.org/en/)
* [express](http://expressjs.com/)
* [webpack](https://webpack.github.io/)
* [react](https://facebook.github.io/react/)
* [material-ui](http://www.material-ui.com/#/)
* [babel](https://babeljs.io/)
* [eslint](http://eslint.org/)