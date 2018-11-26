$(document).ready(function() {
// write your code here
$.getJSON("data.json", function (data){
 var tr = {};
 console.log(data);
 //for each element in each array, post the data(td) to the table rows(tr)
 for (var i = 0; i < data.length; i++) {
    tr = $('<tr>');
    tr.append("<td>" + data[i].name + "</td>");
    tr.append("<td>" + data[i].description + "</td>");
    //Line below has an anchor tab that adds a link to the button that will take the user to google maps with the coordinates
    tr.append("<td><a href='https://www.google.com/maps?q=" + data[i].location + "' target='_blank'><button class='button'>Open in Google Maps</button></a></td>");
    $('.Top-spots-list').append(tr);
 };
})
});



/* getJSON from Jquery site
$.each( data, function( key, val) {
        items.push("li id='" + key + "'>" + val + "</li>");
    });

    $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "body" );
    console.log(data);
    */