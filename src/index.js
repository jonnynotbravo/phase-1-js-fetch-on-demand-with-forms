const init = () => {

    const inputForm = document.querySelector('form');
    const userInput = document.querySelector('#searchByID');
    const title = document.createElement('li');
    const summary = document.createElement('li');
    const titleHeader = document.querySelector('h4');
    const summaryHeader = document.querySelector('p');

  
    inputForm.addEventListener('submit', (e) => {
      e.preventDefault();
    

    
      fetch(`http://localhost:3000/movies/${userInput.value}`)
      .then(resp => resp.json())
      .then(data => domManipulation(data));

      
      function domManipulation(data) {

        title.innerText = data.title;
        title.style.fontWeight = 'normal';
        summary.innerText = data.summary;

        titleHeader.appendChild(title);
        summaryHeader.appendChild(summary);
       

        title.innerText = data.title;
        summary.innerText = data.summary;

        inputForm.reset();
      }
    

    })
}

document.addEventListener('DOMContentLoaded', init);