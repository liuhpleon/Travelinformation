
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var $wikiHeaderElem = $("#wikipedia-header")

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // google pics
    var street = $("#street").val();
    var city = $("#city").val();
    var address = street+", "+city;
    //confirm:
    $greeting.text('Your destination is: '+address);
    //test 
    console.log(street);
    console.log(city);
    var url = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location="
    +address+"";
    $body.append("<img src="+url+" class ='bgimg'>");


    //nytimes news 
    var nyurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    nyurl += '?' + $.param({
      'api-key': "5cbea1ff23834d2ea73fbec7bec9911a",
      'q': city,
      'sort': "newest"
    });
    $.ajax({
       url: nyurl,
       method: 'GET',
       }).done(function(items) {
        for(item in items){
           $nytElem.append("<li>"i+" "+item+"</li>");
        }
      }).fail(function(err) {
            $nytHeaderElem.text("read error!");
            $nytElem.append( error code="  err");
      });
    return false;
    };

    //wiki
    var wikiurl = "";
    $.ajax({
        url: '/path/to/file',
        type: 'default GET (Other values: POST)',
        dataType: 'jsonp',
    })
    .done(function(data) {
        for(var i=0;i<10;i++){
            $wikiElem.append("<li>"i+" "+data+"</li>");
        }
    })
    .fail(function(err) {
            $wikiHeaderElem.text("read error!");
            $wikiElem.append( error code="  err");
    });
    
  

$('#form-container').submit(loadData);

