import axios from "axios";
import * as cheerio from 'cheerio';
let url='https://publicholidays.com.bd/2023-dates/'
async function fetchHTML(url) {
    const response = await axios.get(url)
    return cheerio.load(response.data)
}
const $ = await fetchHTML(url)

// Print the full HTML

// Print some specific page content
console.log(` ${$('.even td').text()}`)