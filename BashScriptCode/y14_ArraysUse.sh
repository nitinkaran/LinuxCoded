#!/bin/bash

#THIS PROGRAM DEMONSTRATES THE USE OF ARRAYS IN A PROGRAM

arrayA=("Varun" "Swapnil" "Karan" "Atul")
count=1

for i in ${arrayA[*]}
do
	echo -e "The value at index = $count is : $i"
	let count=count + 1
done
