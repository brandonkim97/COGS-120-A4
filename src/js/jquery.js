$(document).ready( () => {
    // var items = [];
    // $('.items-list li').each( (i, li) => {
    //     items.push($(li));
    // });

    // if (items.length == 0) {
    //     $(".items-bool").html("You have no groceries");
    // } else {
    //     console.log(items);
    // }

});

function addItem() {
    var item = $('.search-box').val();
    $('items-list li').append(item);
}