const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');




// exports.target = 'severless'


module.exports = withPlugins(
    [
        withImages()
    ],
    {
        target: 'serverless'
    }
)