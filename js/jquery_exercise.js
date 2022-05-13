"use strict"
$(document).ready(function () {
    // Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
    // $('.codeup').css({
    //     // 'background-color': 'hotpink',
    //     'border': '1px  solid red',
    // })
    // Using jQuery, set the font-size of all li elements to 20px.

    // $('li').css('font-size', '20px');

    // Craft selectors that highlight all the h1, p, and li elements.

        // $('h1').css('background-color', '#FFFF00')
        // $('p').css('background-color', '#FFFF00')
        // $('li').css('background-color', '#FFFF00')


        // Create a jQuery statement to alert the contents of your h1 element(s).

        // $('h1').text(alert)
        alert($('h1').text());

        // Combine your selectors that highlight all the h1, p, and li elements.

        $('h1, p, li').css('background-color', '#FFFF00')




});