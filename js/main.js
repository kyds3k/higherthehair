const inputField = document.querySelector('input[type="text"]')

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()
    let searchTerm = removePunctuation(inputField.value).toLowerCase();
    $('.bar').fadeOut();


    if(($('.' + searchTerm)).length) {
        console.log('found that shit');
        $('.' + searchTerm).fadeIn();
    } else {
        $('.notfound').fadeIn();
    }

})

let regex = /[/\s/g\t!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function removePunctuation(string) {
    return string.replace(regex, '');
  }