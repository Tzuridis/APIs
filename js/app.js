$(function() {
    $('#search-term').submit(function(event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
    });
});

function getRequest(searchTerm) {
    var params = {
        part: 'snippet',
        key: 'AIzaSyBNhhITfAWdzV2SrNr6yEizMo4p_umRhmc',
        q: searchTerm
    };
    url = 'https://www.googleapis.com/youtube/v3/search';

    $.getJSON(url, params, function(data) {
        showResults(data);
    });
}

function showResults(results) {
    var html = "";
    $.each(results, function(index, value) {
      for (var i in results.items) {
        html += '<img src=' + results.items[i].snippet.thumbnails.medium.url + '>' ;
        console.log(results.items[i].snippet.thumbnails.medium.url);
      }
        });
    
    $('#search-results').html(html);
}

// Youtube API key:
// AIzaSyBNhhITfAWdzV2SrNr6yEizMo4p_umRhmc