'use strict'

module.exports = {

prime: function(num_limit){

var prime_array = [];
if(num_limit<2)
    return prime_array;
for (var counter = 2; counter <= num_limit; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                prime_array.push(counter);
    }
 }
return prime_array;
}
}
