function redirect(link) {

  if (link.trim().length > 0) {
      window.open("http://www.searchbaron.com/v1/hostedsearch?hp=1&keyword=" + encodeURIComponent(link) + "&aid=" + getAID() + "&data=" + getData() + getDtWithParamName());
  }
}

new autoComplete({
  selector: '.inputSearch',
  minChars: 3,
  source: function (term, responseFn) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.autocompletify.com/?q=' + term, true);

    xhr.onload = function () {
      var data = JSON.parse(xhr.responseText);
      responseFn(data[1]);
	  var autocompleteSuggestions = document.querySelectorAll(".autocomplete-suggestion");
	  autocompleteSuggestions.forEach(function(userItem) {
		userItem.addEventListener('click', function(event) 
		{
			var autocompleteSuggestionBox = document.querySelector(".autocomplete-suggestions");
			autocompleteSuggestionBox.style.display="none";			
			redirect(userItem.innerText);
		}, true);
	  });

    };

    xhr.send();
  }
});

var form = document.querySelector(".searchForm");
var input = document.querySelector(".inputSearch");


form.addEventListener("submit", function (e) {
  e.preventDefault();
  redirect(input.value);
});


function getAID() {
  return getParamFromLocation('aid');
}

function getData() {
  return getParamFromLocation('data');
}

function getDt() {
  return getParamFromLocation('dt');
}

function getDtWithParamName() {
	var dtVal = getDt();
	if (dtVal=='') return '';
	return "&dt=" + dtVal;
}

function getParamFromLocation(paramName) {
	if (typeof(location.href) === 'undefined') return '';
	var URLObj = new URL(location.href);
	if (typeof(URLObj) === 'undefined') return '';
	var searchParamsObj = URLObj.searchParams;
	if (typeof(searchParamsObj) === 'undefined') {
		paramName = paramName.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		var regex = new RegExp( paramName + '=([^&#]*)');
		var results = regex.exec( location.href );
		return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	}	
	if (!searchParamsObj.has(paramName)) return '';
	var retrievedVal = searchParamsObj.get(paramName);
	if (typeof(retrievedVal) === 'undefined') return '';
	return retrievedVal;
}