#!/bin/bash

#THIS PROGRAM DEMONSTRATES THE USE OF ARRAYS IN A PROGRAM

arrayA=("Varun" "Swapnil" "Karan" "Atul")



arrayB=(ABC PQR CDE STU LMN)

count=1

for i in ${arrayA[*]}
do
	echo -e "The value at index = $count is : $i"
	count=$((count + 1))
done

echo; echo;
count=1
for i in ${arrayB[*]}
do
	printf "The value at index = %d is : %s \n" $count $i
	count=$((count + 1))
done

