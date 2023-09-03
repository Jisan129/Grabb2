import axios from "axios";
async function fetchElement() {
    try {
        const response = await axios.get('https://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html')
        return response.data.toString();

    } catch (err) {
        console.error()
    }
}

console.log(await fetchElement());