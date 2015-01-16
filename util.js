var a = function(href, title) {
  return $("<a>")
  .attr('href', href)
  .attr('target', '_blank')
  .text(title);
}
var li = function(href, title) {
  return $("<li>").append(a(href, title));
}

var write = function(tag) {
  var result_text = tag.prop('innerHTML');
  var write = 'document.write(\'' +
	  result_text.split('\'').join('\\\'') +
	  '\');';
  console.log(write);
  document.write('<xmp>' + write + '</xmp>' + '<br>' + result_text);
}
