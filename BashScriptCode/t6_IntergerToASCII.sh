#!/bin/bash

#PROGRAM TO PRINT THE ASCII VALUES FOR CORRESPONDING INTEGER VALUES

count=1
val=128

while [ $count -lt $val ]
do
	printf "The value $count  ----- ASCII =   \\$(printf "%o" "$count")  \n"

	
	count=$(( $count + 1 ))
done