#!/bin/bash

#SCRIPT TO READ THE CONTENT OF THE FILE AND DISPLAY IT AS IT IS

while read line
do
	printf "%s \n" $line
done < a.txt
