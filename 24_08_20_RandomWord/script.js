
const getWord = async () => {
    const url = new URL(
        `https://random-word-api.vercel.app/api?words=1`
    );

    const response = await fetch(url);
    const data = await response.json();
    const eWord = data[0];
    console.log(eWord);
    // translation(eWord);
}

const translation = async (word) => {

    const url = new URL(
        `https://translation.googleapis.com/language/translate/v2?q=${word}&target=ko&key=AIzaSyCz1ZIv8ESPznY5yLiMY0Qb-3uybWj8b9I`
    );

    const response = await fetch(url);
    const data = await response.json();
    const kWord = data.data.translations[0].translatedText;
}

// getWord();