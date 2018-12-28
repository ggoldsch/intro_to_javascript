'use strict';

document.getElementById("demo").innerHTML = myFunction();

function myFunction() { // Hoisted (function declaration)
    var str = '';   // Hoisted
    str += "Paragraph changed5.";
    str += 'abc'.indexOf('b');
    str += 'abc'.indexOf('x');

    str += getPersons([2, -5, 137])

    return str;
}


function getPerson(id) {
    if (id < 0) {
        throw new Error('ID must not be negative: '+id);
    }
    return { id: id }; // normally: retrieved from database
}

function getPersons(ids) {
    var result = [];
    ids.forEach(function (id) {
        try {
            var person = getPerson(id);
            result.push(person.toString());
        } catch (exception) {
            console.log(exception);
        }
    });
    return result.toString();
}


