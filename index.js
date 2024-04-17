// Write a JavaScript function to convert a string into an abbreviated form.
nameFunction = function (str1) {
    var abbreviate = str1.trim().split(" ");
    if (abbreviate.length > 1) {
        return (abbreviate[0] + " " + abbreviate[1].charAt(0) + ".");
    }
    return abbreviate[0];
};
console.log(nameFunction("John Doe"));

// Write a JavaScript function to hide email addresses to protect them from unauthorized users
protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(protect_email("robin_singh@example.com"));

// Write a JavaScript function to convert a string into a title format (The first letters of each word should be in capital letters)

function toTitleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
  console.log(toTitleCase("welcome to clarusway"));

// Write a JavaScript program that accepts a number as input and insert dashes (-) between each two even numbers

  var p = '112233445566';

  var regex = /([02468])([02468])/g
  
  console.log(p.replace(regex, '$1-$2'));


// swap letters of a string
function swap(str) {
    let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let LOWER = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (UPPER.indexOf(str[i]) !== -1) {
            result.push(str[i].toLowerCase());
        } else if (LOWER.indexOf(str[i]) !== -1) {
            result.push(str[i].toUpperCase());
        } else {
            result.push(str[i]);
        }
    }
    return result.join('');
}
console.log(swap('The Quick Brown Fox'));