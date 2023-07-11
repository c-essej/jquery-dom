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
  let formTitle = $('#form-title').val();
  let formRating = $('#form-rating').val();

  let $titleAndRating = $("<div>");
  let $button = $("<button>").text('Remove');


  $('#movie-container').append($titleAndRating);

  $titleAndRating.append(formTitle, formRating, $button);
  evt.preventDefault();
}

$('#form-submit').on('click', addMovie)

