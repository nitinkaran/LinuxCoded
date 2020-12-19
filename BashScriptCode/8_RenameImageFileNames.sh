#!/bin/bash
# CREATE A SCRIPT WHICH READS IMAGE FILES AND CREATE THEIR COPIES AND MOVE
# THEM TO A FOLDER newOne AND THEN RENAMES THE FILES WITH THE NUMBER 
# INDICATED BY RANDOM


mkdir newOne

i=$RANDOM
if [ $i -eq 0 ]
then
    i=$(( $i + 7 ))
fi

i=$(( $RANDOM % 10 ))

for j in *.png
do
    k=_$j
    cp $j $k
    mv $k ./newOne
    cd ./newOne
    mv $k $i.png
    cd ..
    i=$(( $i + 1 ))
done




