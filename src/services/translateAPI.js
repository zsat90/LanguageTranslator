const translateText = async (text, targetLang) => {
  const url = "https://translate-plus.p.rapidapi.com/translate";

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "d9c308ab35mshe7dfd1dbec94cddp1da91cjsn81a92de7aac4",
      "X-RapidAPI-Host": "translate-plus.p.rapidapi.com",
    },
    body: JSON.stringify({
      text: text,
      source: "en",
      target: targetLang,
    }),
  };

  try {
    const res = await fetch(url, options);
    const result = await res.json();
    return result;
  } catch (err) {
    console.error("Translation error:", err);
  }
};

export default translateText;
