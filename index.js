const express = require('express');
const app = express();
const {blogRouter} = require("./routes/blogRoute")
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded parameters
app.use("/api",blogRouter)

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });