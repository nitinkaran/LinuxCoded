#!/bin/bash

#Every function passed with a parameter does not get received with the same 
#parameter name. Instead we need to catch them through special variables and
#and then use them effectively.

echo -e "Enter the number"
read num

fact()
{
	number=$1
	if [ $number == 1 ]
	then
		echo "1"
	else
		echo $(( $number * $(fact $(( $number - 1 ))) ))
	fi
}

fact num