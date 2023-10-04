const lodash = require('lodash');
module.exports = {
    calculateBlogAnalytics: async (req, res) => {
        const { blogs } = req.blogData
        const totalNumberOfBlogs = blogs.length;

        const blogWithLongestTitle = blogs.reduce((prevBlog, currentBlog) => {
            return prevBlog.title.length > currentBlog.title.length ? prevBlog : currentBlog;
        });

        const numberOfBlogsWithPrivacyTitle = blogs.filter(blog =>
            blog.title.toLowerCase().includes("privacy")
        ).length;

        const uniqueBlogTitles = new Set();

        blogs.forEach(blog => {
            uniqueBlogTitles.add(blog.title);
        });

        const uniqueBlogTitlesArray = [...uniqueBlogTitles];
        const result = {
            totalNumberOfBlogs,
            longestBlogTitle: blogWithLongestTitle.title,
            numberOfBlogsWithPrivacyTitle,
            uniqueBlogTitles: uniqueBlogTitlesArray
        };

        res.status(200).send(result);

    },

    searchBlogs: async (req, res) => {
        const { blogs } = req.blogData;

        const filteredBlogs = blogs.filter(blog =>
            blog.title.toLowerCase().includes("privacy")
        );

        const searchResults = {
            results: filteredBlogs
        };

        res.status(200).send(searchResults);
    }
}


