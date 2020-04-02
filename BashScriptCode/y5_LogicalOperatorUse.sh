#!/bin/bash

#This program demonstrates the use of Logical operators

#Que. The marks obtained by a stdudent in 5 different subjects are input. The strudents gets a division as per following rules:
#	% above or equal to 60 - First division
#	% between 50 and 59    - Second division
#	% between 40 and 49    - Third division
#	% less than 40         - Fail


echo -e "ENTER THE MARKS OF 5 SUBJECTS \n"
read m1 m2 m3 m4 m5

let total=m1+m2+m3+m4+m5
echo -e "Total marks obtained = $total out of 500 \n"
let percentage=(total*100)/500
echo -e "Percentage of marks obtained = $percentage%\n"

if test $percentage -ge 60
then
	echo -e "FIRST DIVISION \n"
elif test $percentage -ge 50 -a $percentage -le 59
then
	echo -e "SECOND DIVISION \n"
elif test $percentage -ge 40 -a $percentage -le 49
then
	echo -e "THIRD DIVISION \n"
else
	echo -e "FAIL \n"
fi

