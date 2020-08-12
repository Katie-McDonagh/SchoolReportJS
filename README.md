## Task

build a summary report of grades for a school
the input will be in a string ", 70, 40"

3 point scoring system "Green, Amber, Red"

how often each of these grades occur "Green: 1\nAmber: 1,\nRed: 1"

note: capilatization should'nt matter

edge case:

uncounted at the end of the string

"Greeen, Amber, Red" -- "Amber: 1\nRed: 1\nUncounted: 1"

Input:        Output:
"Green" -- "Green: 1"
"Amber" -- "Amber: 1"
"Red" -- "Red: 1"
"Green, Green" -- "Green: 2"
"Amber, Amber" -- "Amber: 2"
"Red, Red" -- "Red: 2"
"Green, Amber" -- "Green: 1\nAmber: 1"
"Green, Amber, Red" -- "Green: 1\nAmber: 1\nRed: 1"
"green, Amber, Red" -- "Green: 1\nAmber: 1\nRed: 1"
"Greeen, Amber, Red" -- "Amber: 1\nRed: 1\nUncounted: 1"