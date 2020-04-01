#!/bin/bash

echo Enter salary
read bs

if [ $bs -lt 1500 ]
then
	let "hra=$bs*10/100"
	#echo 'hra = $hra'
	let "da=$bs*90/100"
	#echo 'da = $da';
else
	hra=500
	da=$bs\*98/100
fi

let "gs=$bs+$hra+$da"
echo "Gross Salary = Rs. $gs"
