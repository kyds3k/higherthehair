$('#bars').flexdatalist({
  searchContain: true,
  searchByWord: true
});

const inputField = document.querySelector('input[type="text"]')

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()
  let searchTerm = removePunctuation(inputField.value).toLowerCase();
  console.log(searchTerm);
  $('.bar').stop(true, true).fadeOut();


  if (($('.bar[data-name=' + searchTerm + ']')).length) {
    $('.bar[data-name=' + searchTerm + ']').stop(true, true).delay(500).fadeIn();
  } else {
    $('.notfound').stop(true, true).delay(500).fadeIn();
  }

  $('#bars').val('');
  $('.show-all').fadeIn();

})

$('.show-all').click(function () {
  $('.bar').not('.notfound').fadeIn();
  $(this).fadeOut();
  return false;
});

$('.bar a').click(function () {
  let clickedURL = $(this).attr('href');
  trackOutboundLink(clickedURL);
});

let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

let regex = new RegExp('[' + punctuation + ']', 'g');

function removePunctuation(string) {
  string = string.replace(/\s+/g, '');
  return string.replace(regex, '');
}

let trackOutboundLink = function (url) {
  ga('send', 'event', 'outbound', 'click', url, {
    'transport': 'beacon',
    'hitCallback': function () {
      document.location = href;
    }
  });
}
