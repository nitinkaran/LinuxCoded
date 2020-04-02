#!/bin/bash

#This program illustrates the use of WHILE loop

echo -e "Enter the number whose table to be printed \n";
read number

echo -e "==============================================\n"
count=1

while [ $count -le 10 ]
do
	let table=count*number
	echo -e "$number x $count = $table \n"
	let count=count+1
done


echo -e "==============================================\n"
