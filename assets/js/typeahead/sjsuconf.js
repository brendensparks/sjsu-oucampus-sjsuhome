$(document).ready(function() { 
  $('.typeaheadsjsu').typeahead({
    name: 'SJSU Search',
    prefetch: '/typeahead.js/sjsulist.min.json',
    limit: 10
  });
});
