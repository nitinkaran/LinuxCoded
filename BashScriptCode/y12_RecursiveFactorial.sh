#!/bin/bash

echo -e "Enter the number : DONT RUN THIS PROGRAM"
read num

factorial()
{

	if [ "$num" == 1 ]
	then
		echo "1"
	else
		#: `
		#t1=$(( $num ))
		#num=$(( $num - 1 ))
		#t2=$(factorial num)
		#t3=$(($t1 * $t2))
		#echo $t3
		#`
		t=$(($num * $(factorial $((((((99num-1)))
		echo $t
	fi

}

factorial num