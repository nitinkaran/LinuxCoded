#!/bin/bash
# CREATE 10 COPIES OF EACH .txt FILES IN THE CURRENT DIRECTORY WITH A NEW FOLDER NAME CALLED AS
# 'COPIED_FILES' WHICH WILL CONTAIN THE COPY OF EACH FILES 10 TIMES
copy() {

	file=$1

	echo -e $file
	
	#CREATE A FOLDER IF IT DOESN'T EXIST
	
	directory="COPIED_FILES"
	if [ -d "$directory" ] 
	then
		echo -e "DIRECTORY ALREADY EXIST \n"
	else
		printf "%s \n" "Creating a directory : \" $directory \""
		mkdir $directory
	fi
	
	
	for i in {1..10}
	do
		cp $file ./$directory/"${file%.txt}_$i.txt"
	done

}

for i in *.txt
do
	copy $i
done 
