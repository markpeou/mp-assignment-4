console.log('connected')
$('.readmore a').click(displayMessage)
$('.readless a').click(hideMessage)
$('.learnmore a').click(learnMore)

function displayMessage(event) {
  event.preventDefault()
  $('#show-this-on-click').slideDown()
  $('.readmore').hide()
  $('.readless').show()
}

function hideMessage(event) {
  event.preventDefault()
  $('.readless').hide()
  $('.readmore').show()
  $('#show-this-on-click').slideUp()
}

function learnMore (event) {
  event.preventDefault()
  $('#learn-more-text').slideDown()
  $('.learnmore').hide()



}
