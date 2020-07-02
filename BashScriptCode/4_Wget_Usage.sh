#! /bin/bash

# THIS PROGRAM DETAILS THE USE OF 'wget' AND WHAT ALL FUNCTIONALITIES DOES IT HAVE. IT ALSO DETAILS THE OPTIONS WITH DIFFERENT MEANININGS AND THE 
# EXAMPLE TO ILLUSTRATE THE USAGE. BELOW IS THE EXPLANATION OF THE OPTIONS USED IN THE CURRENT EXAMPLE. READ THE MAN PAGE IF NECESSARY
# 1.	--no-directories or -nd  --->  WILL NOT CREATE ANY DIRECTORY HIERARCHY AS USED IN THE WEBSITE
# 2.	--no-host-directories or -nH  --->   WILL NOT CREATE HOST DIRECTORY STRUCTURE
# 3. 	--recursive or -r	--->	DOWNLOAD THE FILES ON WEBSITE GIVEN RECURSIVELY
# 4.	--level=num or -l num 	--->	DOWNLOAD THE FILES FROM THE WEBSITE UPTO A LEVEL OF BREADTH AS DONE IN BFS ALGORITHM
# 5.	--accept list or -A acclist		--->	WHAT TYPES OF FILES TO BE ACCEPTED AND WHAT OTHERS TO BE REJECTED
# 6.	--tries=num or -t num	--->	ONCE A CONNECTION IS DISTURBED IT WILL TRY FOR num OF TIMES

# ------------------------------------------------------------------------------------------------------------------- 
# EX:- A COMMAND WHICH DOWNLOADS ALL THE FILES RECURSIVELY IN THE GIVEN URL.
#  
# URL1:-    https://nptel.ac.in/courses/106/105/106105087/
# URL2:-	nptel.ac.in/content/storage2/courses/106105087/pdf/m05L11.pdf
# ------------------------------------------------------------------------------------------------------------------ 
# FORMAT OF INPUTS TO BE PROVIDED
# 1.	PROVIDE FOLDER NAME
# 2.	PROVIDE URL LINK
# ------------------------------------------------------------------------------------------------------------------ 

directoryName=$1
url=$2

mkdir $directoryName
cd $directoryName

# THIS WILL DOWNLOAD ALL THE FILES IN THE RECURSIVE MANNER BUT IF REQUIRED TO DOWNLOAD ONLY A SINGLE FILE THEN NEED TO SPECIFY A SINGLE URL
wget --no-directories --no-host-directories --recursive --level=1 --accept pdf --tries=30 $url
