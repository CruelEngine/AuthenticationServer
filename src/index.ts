import App from "./app";

const PORT: number = 3000;

var app = new App().app;

console.log(app);
app.listen(PORT, () => {
  console.log("Express Server is up and running");
});
