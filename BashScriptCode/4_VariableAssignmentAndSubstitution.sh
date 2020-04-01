#!/bin/bash

#=====================================================================================================
# Variables: assignment and substitution
#THIS PROGRAM EXPLAINS THE USE OF VARIABLE DECLARATION AND DEFINITION USAGE 
#=====================================================================================================


a=375
hello=$a
# THIS GIVES THE OUTPUT 375 i.e. IT REPLACES THE VARIABLE a WITH ITS VALUE

#=====================================================================================================
# No space permitted on either side of = sign when initializing variables.
# What happens if there is a space?

#  "VARIABLE =value"
#           ^
#% Script tries to run "VARIABLE" command with one argument, "=value".

#  "VARIABLE= value"
#            ^
#% Script tries to run "value" command with
#+ the environmental variable "VARIABLE" set to "".

#=====================================================================================================




echo hello    # hello
# NOT A VARIABLE REFERENCE, JUST THE STRING "hello" ...

echo $hello   # 375
#    ^          THIS *IS* A VARIABLE REFERENCE

echo ${hello} # 375
# THIS IS ALSO A VARIABLE REFERENCE, AS ABOVE.

# Quoting . . .
echo "$hello"    # 375
echo "${hello}"  # 375

echo

#=====================================================================================================
hello="A B  C   D"
echo $hello   
#OUTPUT:- A B C D IS THE OUTPUT AS IT LEAVES THE WHITESPACE CHARACTERS

echo "$hello" 
# A B  C   D WITH DOUBLE QUOTING, IT KEEPS THE WHITESPACE CHARACTERS INTACT
# As we see, echo $hello   and   echo "$hello"   give different results.
# =======================================
# Quoting a variable preserves whitespace.
# =======================================

echo

#=====================================================================================================


echo '$hello'  # $hello
#    ^      ^
#  Variable referencing disabled (escaped) by single quotes,
#+ which causes the "$" to be interpreted literally.

# Notice the effect of different types of quoting.


#=====================================================================================================



hello=    # Setting it to a null value.
echo "\$hello (null value) = $hello"      # $hello (null value) =
#  Note that setting a variable to a null value is not the same as
#+ unsetting it, although the end result is the same (see below).



#=====================================================================================================



#  It is permissible to set multiple variables on the same line,
#+ if separated by white space.
#  Caution, this may reduce legibility, and may not be portable.

var1=21  var2=22  var3=$V3
echo
echo "var1=$var1   var2=$var2   var3=$var3"

# May cause problems with legacy versions of "sh" . . .

echo; echo

#=====================================================================================================



numbers="one two three"
#           ^   ^
other_numbers="1 2 3"
#               ^ ^
#  If there is whitespace embedded within a variable,
#+ then quotes are necessary.
#  other_numbers=1 2 3                  # Gives an error message.
echo "numbers = $numbers"
echo "other_numbers = $other_numbers"   # other_numbers = 1 2 3
#  Escaping the whitespace also works.
mixed_bag=2\ ---\ Whatever
#           ^    ^ Space after escape (\).

echo "$mixed_bag"         # 2 --- Whatever

echo; echo



#=====================================================================================================




echo "uninitialized_variable = $uninitialized_variable"
# Uninitialized variable has null value (no value at all!).
uninitialized_variable=   #  Declaring, but not initializing it --
                          #+ same as setting it to a null value, as above.
echo "uninitialized_variable = $uninitialized_variable"
                          # It still has a null value.

uninitialized_variable=23       # Set it.
unset uninitialized_variable    # Unset it.
echo "uninitialized_variable = $uninitialized_variable"
                                # uninitialized_variable =
                                # It still has a null value.
echo

exit 0



#=====================================================================================================
