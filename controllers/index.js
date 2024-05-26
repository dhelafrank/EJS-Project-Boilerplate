require('dotenv').config()
const meta = require("../templates/components/meta")
const homeScreenContents = require("../templates/screens/home")
const header = require("../templates/components/header")
const footer = require("../templates/components/footer")

const homeScreen = async (req, res, next) => {
    res.render(
        'index', {
            metaTags: meta(
                req, {
                    pageTitle: `${process.env.PROJECT_NAME}`,
                    pageCSS: '/stylesheets/home.css'
                }
            ),
            content: homeScreenContents(),
            header: header(),
            footer: footer()

        }
    )
}

const errorScreen = async (req) => {
    return {
        metaTags: meta(
            req, {
                pageTitle: `Error | ${process.env.PROJECT_NAME}`,
                pageCSS: '/stylesheets/error.css'
            }
        ),
        header: header(),
        footer: footer()
    }
}


module.exports = {
    homeScreen,
    errorScreen
}