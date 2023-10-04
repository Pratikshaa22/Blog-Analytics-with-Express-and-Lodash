const express = require("express")
const blogRouter = express.Router();
const { calculateBlogAnalytics, searchBlogs} = require("../controllers/blog")
const { fetchBlogData, searchBlogsWithQuery } = require("../middlewares/fetchBlogs")

blogRouter.get("/blog-stats", fetchBlogData, calculateBlogAnalytics)
blogRouter.get("/blog-search", fetchBlogData, searchBlogs)
module.exports = { blogRouter }