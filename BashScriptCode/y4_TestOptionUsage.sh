#!/bin/bash

#The test command has various options which provides the checking status of a file. One of the option has been used here as an example for more detail refer to man page as it has usage SYNTAX

echo -e "Enter the file or directory name \n"
read name

if test -w $name
then
	echo -e "$name - is a file and write permission is granted.\n"
elif test -d $name
then
	echo -e "$name - is a directory"
else
	echo -e "$name is a file and has no write permission \n"
fi

