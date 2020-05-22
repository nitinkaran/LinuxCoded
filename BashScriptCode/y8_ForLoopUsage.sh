#!/bin/bash

# THIS PROGRAM DEMOSTRATES THE USE OF FOR LOOP AND ITS DIFFERENT VARIANTS WHICH CAN BE USED IN SPECIFIC
# SPECIFIC REQUIREMENTS


printf "==============================================\n"

printf "TYPE 1 - SIMPLE FOR LOOP SYNTAX FOLLOWING C LANGUAGE LIKE STRUCTURE \n"

limit=10

for ((i=1; i<=limit; i++))
do
	printf "%d " $i
done


printf "\n==============================================\n"
printf "TYPE 2 - BRACE EXPANSION VERSION \n"


for i in {1..10}
do
	printf "%d " $i
done

printf "\n==============================================\n"
printf "TYPE 3 - USING SEQ VERSION \n"


for i in `seq 10`
do
	printf "%d " $i
done

printf "\n==============================================\n"

printf "TYPE 4 - STANDARD SYNTAX OF BASH FOR LOOP \n"

for i in 1 2 3 4 5 6 7 8 9 10
do
	printf "%d " $i
done


printf "\n==============================================\n"