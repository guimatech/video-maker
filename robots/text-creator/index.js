const algorithmia = require('algorithmia')
const algorithmiaApiKey = require('./credentials.json').apiKey

function robot(content) {
    fetchContentFromWikipedia(content)
//    sanizeContent(content)
//    breakContentIntoSentences(content)

    async function fetchContentFromWikipedia(content) {
        const algorithmiaAutenticated = algorithmia(algorithmiaApiKey)
        const wikipediaAlgorithm = algorithmiaAutenticated.algo('web/WikipediaParser/0.1.2?timeout=300')
        try {
            const wikipediaResponde = await wikipediaAlgorithm.pipe(content.searchTerm)
            const wikipediaContent = wikipediaResponde.get()
            console.log(wikipediaContent)
        } catch (e) {
            console.log(e); 
        }
    }
}

module.exports = robot