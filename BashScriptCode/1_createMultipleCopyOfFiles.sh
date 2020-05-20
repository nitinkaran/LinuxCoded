#!/bin/bash
# CREATE 10 COPIES OF EACH .txt FILES IN THE CURRENT DIRECTORY
copy() {

file=$1

echo -e $file

for i in {1..10}
do
	cp $file "${file%.txt}_$i.txt"
done

}

for i in *.txt
do
	copy $i
done 
