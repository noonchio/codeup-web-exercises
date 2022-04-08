"use strict";

console.log("Hello from external JavaScript");

alert(
    "Welcome to my Website"
);
var favColor = prompt('What is your favorite color');
alert ('Great, ' + favColor + ' is my favorite color too!');

var daysRentedLittleMermaid = parseFloat(prompt('How many days did you rent The little mermaid?'))
var daysRentedBrotherBear   = parseFloat(prompt('How many days did you rent Brother Bear?'))
var daysRentedHercules = parseFloat(prompt('How many days did you rent Hercules?'))
var totalcost = ((daysRentedLittleMermaid + daysRentedBrotherBear + daysRentedHercules) * 3)
    alert('For total days rented you will be charged ' + totalcost + ' dollars.')

// How much did each Company Pay?
var googlePay = parseFloat(prompt('How much did Google pay per hour?'))
var amazonPay = parseFloat(prompt('How much did Amazon pay per hour?'))
var facebookPay = parseFloat(prompt('How much did Facebook pay per hour?'))

// Hours worked at each company.
var googleHours = parseFloat(prompt('How many hours did you work at Google?'))
var amazonHours = parseFloat(prompt('How many hours did you work at Amazon?'))
var facebookHours = parseFloat(prompt('How many hours did you work at Facebook'))

// Pay * Hours worked = Paycheck

var payCheck = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours)
   alert('Your total paycheck is ' + payCheck + ' dollars' )


var isClassFull = confirm('Is the classsroom full?')
var isThereConflict = confirm('Does the class time conflict with your schedule? ')
var canEnroll = !isClassFull && !isThereConflict
if(canEnroll) {
    alert('you can enroll in class.')
} else {
    alert ('You can not enroll.')
}


// Product offer for person who buys 3 or more products, or for Premium members as long as offer is not exp.ired.

var offerValidThreeOrMore; // set to true or false
var offerExpired; // set to true or false
var isPremiumMember; // set to true or false

var offerValidThreeOrMore = confirm('Did You purchase three or more products?')
var offerExpired = confirm('Is the offer experation date valid?')
var isPremiumMember = confirm('Are you a Premium member?')
var promotionIsValid = (offerValidThreeOrMore || isPremiumMember) && offerExpired
if (promotionIsValid){
    alert ('The offer is available')
}else {
    alert('Offer Not Valid ')
}


//alert ('Offer is : ' + isPremiumMember && offerValidThreeOrMore && offerExpired === true)



