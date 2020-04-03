#!/bin/bash

#THE PROGRAM CALCULATES THE FACTORIAL OF A NUMBER USING WHILE LOOP


echo -e "Enter the number \n"
read number

i=1
j=1

while [ $i -le $number ]
do
	let j=j*i
	let i=i+1
done

echo -e "The factorial of a $number is = $j\n"
