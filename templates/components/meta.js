const { encode } = require("urlencode")
require('dotenv').config()

const meta = (req, dynamicPageSpecifications) => {
    const canonicalUrl = req.originalUrl
    const pageUrl = req.originalUrl
    const {
        pageTitle,
        pageDescription,
        pageCSS,
        themeColor,
        previewImageUrl
    } = dynamicPageSpecifications
    let ogImage = `${process.env.OPENGRAPH_TEMPLATE_URL}/${encode(process.env.PROJECT_DESCRIPTION)}/${encode(pageTitle)}/${encode(process.env.DEFAULT_LOGO_IMAGE)}/og.png`

    return `<meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>
                ${pageTitle}
            </title>
            <link rel="icon" href="${process.env.DEFAULT_FAVICON}" sizes="16x16 32x32 48x48">
            <link rel="canonical" href="${process.env.PROJECT_DEPLOYMENT_URL}${canonicalUrl ? canonicalUrl : "/"}">
            <meta name="description" content="${pageDescription ? pageDescription : process.env.PROJECT_DESCRIPTION}">
            <meta name="robots" content="index, follow">
            
            <!-- Facebook Meta Tags -->
            <meta property="og:title" content="${pageTitle ? pageTitle : process.env.PROJECT_NAME}">
            <meta property="og:description" content="${pageDescription ? pageDescription : process.env.PROJECT_DESCRIPTION}">

            <meta property="og:image" content="${previewImageUrl ? previewImageUrl : ogImage}">

            <meta property="og:url" content="${pageUrl}">
            <meta property="og:type" content="website">


            <!-- Twitter Meta Tags -->
            <meta name="twitter:card" content="summary_large_image">
            <meta property="twitter:domain" content="${process.env.PROJECT_DEPLOYMENT_URL}">
            <meta property="twitter:url" content="${pageUrl}">
            <meta name="twitter:title" content="${pageTitle ? pageTitle : process.env.PROJECT_NAME}">
            <meta name="twitter:description" content="${pageDescription ? pageDescription : process.env.PROJECT_DESCRIPTION}">
            <meta name="twitter:image" content="${previewImageUrl ? previewImageUrl : ogImage}">


            <meta name="theme-color" content="${themeColor ? themeColor : process.env.WEBSITE_THEME}" />
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
            <script src="https://kit.fontawesome.com/63483fd584.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="${pageCSS ? pageCSS : ""}">
`
}
module.exports = meta
/*
title
description
reqObject
*/