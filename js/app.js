$("#quoteButton").on("click", function() {
  loadQuote();
});

// Quotes on Design API call
function loadQuote() {
  var qodURL =
    "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback";

  $.ajax({
    url: qodURL,
    dataType: "jsonp",
    jsonpCallback: "mycallback",
    success: function(data) {
      var twttrURL, twttrIntentQuote, twttrIntentAuthor;

      // Data is an array of posts. Grab the first one.
      var post = data.shift();

      $("#quote-title").text("—" + post.title);
      $("#quote-content").html(post.content);

      // Append parameters to URL
      twttrURL = "https://twitter.com/intent/tweet?related=freecodecamp&text=";
      twttrIntentQuote = $("#quote-content").text();
      twttrIntentAuthor = $("#quote-title").text();

      // Attach attributes to button
      $("#fa-tweet").attr("href", twttrURL + twttrIntentQuote + twttrIntentAuthor);
    },
    cache: false
  });
}

loadQuote();
