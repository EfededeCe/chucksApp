
/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async ( element ) => {

  const url = 'https://api.chucknorris.io/jokes/random';
  //! fetch().then
  // fetch(url)
  //   .then( response => {
  //     console.log(response);
  //     if ( response.ok ){
  //       response.json()
  //       .then( res => { 
  //         element.innerHTML = `
  //                 <h3>${ res.value }</h3>
  //               `
  //        });
  //     }
  //   })
  const res = await fetch( url )
  console.log(res);
  const data = await res.json();
  console.log('data ===> ', data);
  return data;

}



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const ChuckApp = async ( element ) => {

  document.querySelector('#app-title').innerHTML = 'Chuk Norris App'
  console.log('Hola Mundo');
  element.innerHTML = 'Loading...'
  // fetchQuote(element) con el .then
  const quote = await fetchQuote();
  

  const quoteLabel = document.createElement('blockquote');
  const idLabel = document.createElement('h3');
  const nextQuoteButton= document.createElement('button');
  nextQuoteButton.innerText = 'Next Quote';


  const renderQuote = ( data ) => {
    quoteLabel.innerText = data.value;
    idLabel.innerText = data.id;
    element.replaceChildren(quoteLabel, idLabel, nextQuoteButton);
  }

  nextQuoteButton.addEventListener('click', async() => {
    nextQuoteButton.disabled = true;
    quoteLabel.innerText = 'Loading...';
    await fetchQuote().then( renderQuote );
    nextQuoteButton.disabled = false;
  });

  fetchQuote()
  // .then( data => renderQuote( data ) )
  .then( renderQuote )


}


