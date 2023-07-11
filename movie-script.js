"use strict";

/** When the form has is submitted, capture the values for each of the
inputs and append them do the DOM along with a button to remove each
title and rating from the DOM.
When the button to remove is clicked, remove each title and rating from
the DOM.*/


//grab the two values, title and rating
//create a button to remove each title and rating (add eventListener)
//append to DOM



function addMovie(evt){
  let formTitleData = $('#form-title').val();
  let formRatingData = $('#form-rating').val();

  let $movieTitle = $('<span>')
      .text(formTitleData)
      .addClass('title');
  let $movieRating = $('<span>')
      .text(formRatingData)
      .addClass('rating')
      .css('margin-left','10px');
  let $button = $("<button>")
      .addClass('movie-delete')
      .text('Remove');

  let $titleAndRating = $("<div>").addClass('movie');

  $('#movie-container').append($titleAndRating);

  $titleAndRating.append( $movieTitle, $movieRating, $button);
  evt.preventDefault();
}

function removeMovie(evt){
  $(evt.target).parent().remove();
}

$('#movie-container').on('click', '.movie-delete', removeMovie);
$('#form-submit').on('click', addMovie);

//SORT BY TITLE
  //get all movie title data
  //sort title data
  //re-render the DOM

function sortByTitle() {
  let $movies = $('.movie');
  let $titles = $('.title');

  let titlesArray = $titles.toArray();


}