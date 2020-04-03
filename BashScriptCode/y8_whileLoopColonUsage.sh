#!/bin/sh

#This program demonstrates the use of infite loop that can be achieved using ':' which keeps on looping untill delebrate exit is used like ctrl+c

while :
do
	echo "Please type input(CTRL+C to exit) \n"
	read input
	echo "You typed : $input \n"
done


