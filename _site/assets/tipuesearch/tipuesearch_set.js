
/*
Tipue Search 6.0
Copyright (c) 2017 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/

var tipuesearch_stop_words = ["Een","over","boven","na","weer","tegen","allen","als","bij","zijn","voor","zijn","onder","tussen","beide","maar","Niet","niet","kan","beneden","onder","elk","weinig","voor","van","verder","had","heeft","heb","hebben","hij","zal","hier","Haar","haar","hem","zelf","zijn","hoe","ik","zou","heb","als","in","is","het","zelf","Meer","meest","mijn","mezelf","nee","noch","van","uit","op","eenmaal","Alleen","of","over","eigen","zelfde","ons","zij","moet","zo","sommigen","dan","dat","Dat","de","hun","hen","zelf","daar","deze","dit","die","Tot","tot","we","waren","wat","wanneer","waar","terwijl","wie","waarom","met","Jij","je","jouwe","jezelf"];


// Word replace

var tipuesearch_replace = {'words': [
     {'word': 'mizzy', 'replace_with': 'Mizzi'},
     {'word': 'missy', 'replace_with': 'Mizzi'},
     {'word': 'missie', 'replace_with': 'Mizzi'},
     {'word': 'mizzi', 'replace_with': 'Mizzi'},
]};


// Weighting

var tipuesearch_weight = {'weight': [
     {'url': '{{ baseurl }}/recepten', 'score': 30},
     {'url': '{{ baseurl }}', 'score': 20},
]};


// Illogical stemming

var tipuesearch_stem = {'words': [
     {'word': 'e-mail', 'stem': 'email'},
     {'word': 'javascript', 'stem': 'jquery'},
     {'word': 'javascript', 'stem': 'js'}
]};


// Related searches

var tipuesearch_related = {'searches': [
     {'search': 'tipue', 'related': 'Tipue Search'},

]};


// Internal strings
// English
// var tipuesearch_string_1 = 'No title';
// var tipuesearch_string_2 = 'Showing results for';
// var tipuesearch_string_3 = 'Search instead for';
// var tipuesearch_string_4 = '1 result';
// var tipuesearch_string_5 = 'results';
// var tipuesearch_string_6 = 'Back';
// var tipuesearch_string_7 = 'More';
// var tipuesearch_string_8 = 'Nothing found.';
// var tipuesearch_string_9 = 'Common words are largely ignored.';
// var tipuesearch_string_10 = 'Search too short';
// var tipuesearch_string_11 = 'Should be one character or more.';
// var tipuesearch_string_12 = 'Should be';
// var tipuesearch_string_13 = 'characters or more.';
// var tipuesearch_string_14 = 'seconds';
// var tipuesearch_string_15 = 'Searches related to';

// Nederlands
var tipuesearch_string_1 = 'Geen titel';
var tipuesearch_string_2 = 'Resultaten voor';
var tipuesearch_string_3 = 'Zoek in de plaats van';
var tipuesearch_string_4 = '1 resultaat';
var tipuesearch_string_5 = 'Resultaten';
var tipuesearch_string_6 = 'Terug';
var tipuesearch_string_7 = 'Meer';
var tipuesearch_string_8 = 'Niets gevonden.';
var tipuesearch_string_9 = 'Standaard woorden worden grotendeels genegeerd.';
var tipuesearch_string_10 = 'Zoekopdracht is te kort';
var tipuesearch_string_11 = 'Moet een karakter of meer zijn.';
var tipuesearch_string_12 = 'Moet zijn';
var tipuesearch_string_13 = 'karakters of meer.';
var tipuesearch_string_14 = 'seconden';
var tipuesearch_string_15 = 'Zoekopdrachten gerelateerd aan';


// Internals


// Timer for showTime

var startTimer = new Date().getTime();
