(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);
    planets.unshift("The Sun");
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);
    planets.push("Pluto");
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);
    planets.shift()
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);
    planets.pop();
    console.log('Finding and logging the index of "Earth" in the planets array.');
    planets.indexOf("Earth");
    console.log("Reversing the order of the planets array.");
    console.log(planets);
    planets.reverse();
    console.log("Sorting the planets array.");
    console.log(planets);
    planets.sort()


 // BONUS1
    var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';

    function cleanPhoneNumbers(phoneNumbers){

    }


    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

var planetsHTML = planetsArray.join('<br>')
    console.log(planetsHTML)


























})();