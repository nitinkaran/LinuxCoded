#!/bin/bash

#Simple console output using echo
echo "Hello World "

echo; #USED FOR NEWLINE

echo "A comment will follow." # Comment here.
#                            ^ Note whitespace before #

echo;

#!/bin/bash
echo '!/bin/bash';
echo "OCCURENCE OF SHA-BANG AFTER FIRST LINE WILL BE TREATED AS A COMMENT."
echo;

#comment may not contain space after #

echo "The # here does not begin a comment.";echo

echo 'The # here does not begin a comment.';echo

echo The \# here does not begin a comment.;echo

echo 'The # here begin a comment';
echo The # here begin a comment.
echo;

#USE OF SEMICOLON

echo HELLO; echo "In between ';' has been used"

let "t = (a=9, 15/3)"

echo $a

echo $t

















