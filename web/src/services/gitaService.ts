export const fetchChapters = async () => {
    const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '49b95d6856msh1d8e3b4723ef507p1bc377jsn79e4e58828ab',
        'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com',
      },
    };
  
    const response = await fetch(url, options);
    return response.json();
  };
  
  export const getTodaysVerseIndex = (total: number) => {
    const storedIndex = localStorage.getItem('verseIndex');
    if (storedIndex) return parseInt(storedIndex, 10);
  
    const randomIndex = Math.floor(Math.random() * total);
    localStorage.setItem('verseIndex', randomIndex.toString());
    return randomIndex;
  };
  