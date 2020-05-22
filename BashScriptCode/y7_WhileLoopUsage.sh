#!/bin/bash

#THIS PROGRAM ILLUSTRATES THE USE OF WHILE LOOP. THERE ARE DIFFERENT VARIATIONS OF WHILE LOOP FOR DIFFERENT SITUATIONS
#WE WILL COVER THE THEORY OF EACH WHILE LOOP AND REASON FOR IT BEING SO.

echo -e "==============================================\n"

# TYPE 1 - WHILE LOOP - FOR ARITHMETIC CONDITIONS
# THE DOUBLE PARENTHESES IN THIS EXAMPLE CORRESPOND TO ARITHMETIC EXPRESSIONS AND HERE WE DON'T NEED TO WRITE $var AGAINST 
# EVERY VARIABLE BEING USED INSIDE AS $ USED OUTSIDE THE PARENTHESES ARE EXPRESSED FOR EACH VARIABLE INSIDE THE PARENTHESES

printf "%s \n" "Enter the number whose table to be printed  : "
read number

count=1
max_limit=10
while (( count <= max_limit ))
do
	temp=$((count * number))
	printf "%d x %d = %d \n" $number $count $temp
	count=$((count + 1))
done

echo -e "==============================================\n"

# TYPE 2 - WHILE LOOP - FOR FILE RELATED OPERATIONS
# THE SYNTAX OF THIS LOOP IS SAME AS IF STATEMENT WHERE THERE CAN BE A LIST OF EXPRESSIONS AND ONLY THE EVALUATION
# OF LAST EXPRESSION RETURNS 0 TO CONITNUE AHEAD IN BASH FOR NORMAL OPERATION AND 1 TO EXIT 

count=1

while [ -f "factorial.sh" ]
do
	printf "File exists :  "
	printf "count = %d \n" $count 
	count=$((count + 1))
	break
done


echo -e "==============================================\n"

# TYPE 3 - WHILE LOOP - FOR FILE READING INPUT
# THE DOUBLE PARENTHESES IN THIS EXAMPLE CORRESPOND TO ARITHMETIC EXPRESSIONS AND HERE WE DON'T NEED TO WRITE $var AGAINST 
# EVERY VARIABLE BEING USED INSIDE AS $ USED OUTSIDE THE PARENTHESES ARE EXPRESSED FOR EACH VARIABLE INSIDE THE PARENTHESES

count=1
while read inputLine
do
	printf ": %s " $inputLine
	count=$((count + 1))
done < t1_EchoUse.sh


echo -e "==============================================\n"

# THIS PROGRAM DEMOSTRATES THE USE OF INFINITE LOOP THAT CAN BE ACHIEVED USING ':' WHICH KEEPS ON LOOPING
# UNTIL DELEBRATE EXIT IS USED LIKE ctrl+c

while :
do
	echo "Please type input(CTRL+C to exit) \n"
	read input
	echo "You typed : $input \n"
done

echo -e "==============================================\n"
