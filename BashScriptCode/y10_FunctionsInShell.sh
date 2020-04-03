#!/bin/bash

#This program demostrates the use of functions and its syntax

myfunc()
{
	echo -e "\$1 is $1 \n"
	echo -e "\$2 is $2\n"
	a="GOOD BYE"
}

### MAIN SCRIPT STARTS HERE

a="Hello"
b="World"

myfunc $a $b

echo -e "a is $a \n"

echo -e "b is $b \n"
