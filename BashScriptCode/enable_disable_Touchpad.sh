#!/bin/bash

#	THIS SCRIPT HAS BEEN CREATED TO ENABLE OR DISABLE THE TOUCHPAD AS AND WHEN NEEDED
#	FIRST THIS SCRIPT CHECKS WHETHER THE DEVICE IS ALREADY ENABLED/DISABLE AND BASED
#	UPON THE STATUS OF THE DEVICE, IT IS EITHER ENABLED OR DISABLED

#------------------------------------------------------------------------------------------------------------------------------------------------------

value=$( xinput --list --name-only | grep -i "Touchpad" | xargs -0 -d "\n" xinput --list-props | grep -i "Enabled" | awk '{print $4}' )

if [ $value == "0" ]
then
	xinput --list --name-only | grep -i "Touchpad" | xargs -0 -d "\n" xinput --enable
else
	xinput --list --name-only | grep -i "Touchpad" | xargs -0 -d "\n" xinput --disable
fi

#------------------------------------------------------------------------------------------------------------------------------------------------------

# DESCRIPTION OF THE COMMANDS AND OPTIONS THAT IS USED

#	1.	xinput is a command that is used to configure and test the input devices
#	2.	--list --name-only property gives all the properties of all the devices of a system
#	3.	grep command filters out all the devices except Touchpad
#	4.	xargs uses -0 and -d to remove whitespaces, null and \n at the end of the outpur of
#		previous command and gives them as a standard input to the next command
#	5.	again with xargs, xinput list down the current status of the Touchpad
#	6.	grep filters out the result of Device Enabled whether its 0/1
#	7.	awk prints the value of the 4th column
#	8.	Based on the value received Touchpad is either disabled or enabled
