const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

newsRouter.get('', async (req, res) => {
    try {
        const newsApi = await axios.get('https://blog.ted.com/wp-json/wp/v2/posts/')
        // console.log(newsApi.data)
        res.render('news', { articles: newsApi.data })
    } catch (error) {
        if (error.response) {
            res.render('news', { articles: null })
            // console.log(error.response)
        } else if (error.request) {
            res.render('news', { articles: null })
            // console.log(error.requestS)
        } else {
            res.render('news', { articles: null })
            // console.error('Error', error.message)
        }
    }
})




module.exports = newsRouter