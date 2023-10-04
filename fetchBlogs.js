const axios = require('axios');

const apiUrl = 'https://intent-kit-16.hasura.app/api/rest/blogs';
const adminSecret = '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6';

async function fetchBlogData(req, res, next) {
    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'x-hasura-admin-secret': adminSecret,
            },
        });
        req.blogData = response.data;

        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

async function searchBlogsWithQuery(req, res, next) {
    const query = 'privacy';
    try {
        const response = await axios.get(apiUrl, {
            params: {
                query: query
            }
        });
        req.blogData = {
            ...response.data,
        };
        next()
    } catch (error) {
        // Handle any errors
        console.error('Error:', error);
        throw error;
    }
}


module.exports = { fetchBlogData, searchBlogsWithQuery };
