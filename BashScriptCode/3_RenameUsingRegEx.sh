#!/bin/bash

#SCRIPT TO READ FILES AND THEN CHANGE THE NAMES OF THE FILES BY TAKING FEW
#SUBSTRINGS THAT ARE PRESENT IN THE FILE NAME TO RENAME THEM TO A NEWER
#FILE. AS AN EXAMPLE CONSIDER THE BELOW FILES WHICH ARE USED AND PLACE THEM
#IN THE SAME DIRECTORY AND RUN THE SCRIPT FROM THE SAME DIRECTORY

#  FILE NAME 1 : 'Ludwig Van Beethoven - 01 - Allegro.ogg'  
#  FILE NAME 2 : 'Ludwig Van Beethoven - 02 - Adagio un poco mosso.ogg'
#  FILE NAME 3 : 'Ludwig Van Beethoven - 03 - Rondo - Allegro.ogg'
#  FILE NAME 4 : 'Ludwig Van Beethoven - 04 - Coriolan Overture, Op. 62.ogg'
#  FILE NAME 5 : 'Ludwig Van Beethoven - 05 - Leonore Overture, No. 2 Op. 72.ogg'
#  FILE NAME 6 : 'Ludwig Van Beethoven - 06 - Leonore Coriolan Rondo - Allegro.ogg'

for FileName in *.ogg
do
	if [[ $FileName =~ ([[:alpha:][:blank:]]*)-([[:blank:]])([[:digit:]]*)([[:blank:]])(.*) ]]
	then
		echo Track ${BASH_REMATCH[3]} is ${BASH_REMATCH[5]}
		mv "$FileName" "Track ${BASH_REMATCH[3]}"
	fi
done




