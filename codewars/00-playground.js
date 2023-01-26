console.clear()

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function feast(beast, dish) {
    if (beast[0] === dish[0] && beast.at(- 1) === dish.at(- 1)) {
        return true;
    } else {
        return false;
    }
}


console.log(feast("great blue heron", "garlic naaz"));
