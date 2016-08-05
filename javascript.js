var getQuote = function(){
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
    dataType: 'jsonp',
    success: function(data){
      $('#quoteText').text(data.quoteText); 
 
 
	if (data.quoteAuthor !== ''){
		$('#quoteAuthor').text(data.quoteAuthor);
	}else{
		$('#quoteAuthor').text('Unknown');
	}
      },
      error: function (xhr, status, error){
      $('#quoteText').text('something went wrong.'); 
      }
      
    });
  };
  
 
$(document).ready(getQuote());
$('.btn-quote').click(function(){
  getQuote();
});