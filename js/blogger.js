
// Usa la URL de tu aplicación web de Google Apps Script aquí
const rssFeedUrl = 'https://script.google.com/macros/s/AKfycbyvc8b7PMf249Gwu8xSTrF3DPK4J6jJ9mPpbbrpmyTKAVkKy8RgTeBaLuJZxJ94Z5W4_A/exec';

fetch(rssFeedUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('La respuesta de la red no fue exitosa');
    }
    return response.text();
  })
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    // ... el resto de tu código para procesar los datos sigue igual
    const items = data.querySelectorAll("item");
    let htmlOutput = '';
    // ...
    document.getElementById("noticias-blogger").innerHTML = htmlOutput;
  })
  .catch(error => {
    console.error('Error al cargar el feed RSS:', error);
    document.getElementById("noticias-blogger").innerHTML = '<p>Lo sentimos, no se pudieron cargar las noticias del blog. Por favor, inténtelo de nuevo más tarde.</p>';
  });