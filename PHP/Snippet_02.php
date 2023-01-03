<?php
/*  Datatypes
        - String    Series of characters surronuded by quotes
        - Integer   Whole numbers
        - Float     Decimal numbers
        - Boolean   True or False
        - Array     Special variable, which can hold more than one value
        - Object    A class
        - NULL      Empty variable
        - Resource  Special varible that holds a resource
*/
// Varibles 
$first_name = "Benjamin";
$last_name = "Marks";
// Define by Key/Value
define('HOST', 'localhost');
echo HOST; //should return "localhost"
// Conditionals
$posts = ['First post', 'Second post', 'Third post'];
    if(!empty($posts)) {
        echo $posts[0];
    }
    else {
        echo 'No Posts';
    }
/* should retun "First post" */
// Nullish coalescing
$first_post = $posts[0] ?? null;
echo $first_post; //should return "First post" if not empty
// Loops
foreach($posts as $post) {
    echo $post . ", "; // should return "First post, Second post, Third post"
}
$person = [
    'first_name' => $first_name,
    'last_name' => $last_name,
    'email' => "bjmarks@gmail.com",
];
foreach($person as $key => $value) {
    echo "$key - $value"; // should return "[number of key] - [its value]"
}
// Functions Scopimg
$y = 12;
function registerUser() {
    global $y;
    echo $y; // should return "12"
    $x = 10;
    echo "User Registered";
}
echo $x; // should return an error, because var is not in scope
registerUser(); // calling function
// Array functions
$fruits = ['apple', 'orange'];
$fruits[] = 'grape'; // adds to an array
array_push($fruits, 'blueberry','strawberry'); // adds to end of array
array_unshift($fruits, 'mango'); // adds to beginning of array
array_pop($fruits); // removes end of array
array_shift($fruits); // removes beginning of array
unset($fruits[1]); // removes on index of array
$arr1 = [1,2,3];
$arr2 = [4,5,6];
$arr3 = array_merge($arr1, $arr2); // adding multiple arrays as one
$arr4 = [...$arr1, ...$arr2]; // also adding multiple arrays as one
$a = ['green', 'red', 'yellow'];
$b = ['avacado', 'apple', 'banana'];
$c = array_combine($a, $b); // combmines as key/value object pairs
$keys = array_keys($c); // should return only they keys of the object array
$flipped = array_flip($c); // should make keys the value, and value the keys
$numbers = range(1, 20); // give 20 numbers starting at one going up to twenty
print_r($fruits); // prints as human-readable infomation