#!/bin/bash
#In unix if statement is concerned with exit status of a cmd which indicates whether the cmd executed successfully(RESPRESENTED AS 0) or not(RESPRESENTED AS 1).

#Eg:- If cp cmd when executed is able to copy the file(s) successfully then its exit status would be 0 otherwise 1.

#SYNTAX EXAMPLE

if ls -l
then
	echo;
	echo "INFORMATION OF THE CURRENT DRIVE DISPLAYED SUCCESSFULLY";echo;
fi
