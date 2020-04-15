#!/bin/bash

file="*.sh"

for i in $file
do
	cat $i
	echo -e " ========================================   "
done

