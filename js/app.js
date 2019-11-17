$("#quoteButton").on("click", function() {
  loadQuote();
});

// Quotes on Design API call
function loadQuote() {
  var qodURL =
    "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand";

  $.ajax({
    url: qodURL,
    dataType: "json",
    success: function(data) {
      var twttrURL, twttrIntentQuote, twttrIntentAuthor;

      // Data is an array of posts. Grab the first one.
      var post = data.shift();

      // Added rendered prop per API change
      $("#quote-title").text("—" + post.title.rendered);
      $("#quote-content").html(post.content.rendered);

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
