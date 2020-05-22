#!/bin/bash

#this program demonstrates the use of switch case as in 'C' Language

echo -e "Enter any number between 1 to 5 and 'a' to know ur LUCK :-P \n";
read input

case $input in
	1)	echo -e "You need to be carefull today :) \n";;
	2)	echo -e "You need to be forced to go to school :) \n";;
	3)	echo -e "You will get into IISc Bangalore :) \n";;
	4)	echo -e "You will get one of DRDO lab soon :) \n";;
	5)	echo -e "You are a great personality :) \n";;
	a)  printf "you pressed a symbol a \n";;
	*)	echo -e "You will get everything in life :) \n";;
esac

echo -e "Thats all folks!!! \n";


