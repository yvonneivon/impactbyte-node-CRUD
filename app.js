// cara import di node express
const express = require("express")
const app = express()
const { PORT } = require("./config");

app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use("/", require("./routes"));
app.use("/users", require("./routes/users"));
app.use("/todos", require("./routes/todos"));

// untuk nampilin ke browser
app.listen(PORT, () => {
    console.log(`Port listen on PORT: ${PORT}`);
    
});