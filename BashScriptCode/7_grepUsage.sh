#!/bin/bash

#--------------------------------------------------------------------------------------------------------------------------------------------
#                                           QUESTION 1.
#
# LET US CONSIDER THAT A FILE CONSIST OF MANY RETURNS STATEMENT AND WE WANT TO LIST DOWN ALL THE RETURN STATEMENTS AND WHAT ARE THE VALUES
# BEING RETURNED. EXAMPLE

#   return '/student/{studentId}/instructor';
#   return '/student/{courseId}/courses';
#   return '/student/{sectionId}/section';
#   return '/student/{applicationNumber}';

#                                           OUTPUT
# ON QUERRYING THE FILE CONTAINING THESE STATEMENTS, ALL THE ABOVE STATEMENTS MUST BE RETURNED 
#
#
#                                           SOLUTION
#   THE SOLUTION TO THIS PROBLEM CAN BE FOUND IN NUMBER OF WAYS.
#
#
    1.  grep -n "\`" -f StudentService.js
    2.  grep -n "return \`" -f StudentService.js
    3.  grep -n "return \`\/" -f StudentService.js
    4.  grep -n "return \`\/*$*" -f StudentService.js
    5.  grep -n "\/*${*}\/" -f StudentService.js        -   This retreieve all the statements containing "/${someId}/i"

#--------------------------------------------------------------------------------------------------------------------------------------------

#--------------------------------------------------------------------------------------------------------------------------------------------
#                                           QUESTION 2.
#
#   LET US CONSIDER THAT WE HAVE A PATTERN OF TEXT TO BE FOUND IN THE LIST OF FILES WHICH ARE IN THE HIERARCHY OF DIRECTORIES AND SUBDIRECTORIES
#   AND THIS PATTERN IS TO BE FOUND WITH THE LINE ON WHICH IT HAS BEEN FOUND SHOWING THE FILE NAME AS WELL. FOR EXAMPLE

#   directory1/file1
#   directory1/subDirectory1/file2
#   directory1/subDirectory1/file3
#   directory1/subDirectory1/file4
#
#   directory1/subDirectory2/file1
#   directory1/subDirectory2/file2
#   directory1/subDirectory2/file3
#
#   directory2/subDirectory1/file1
#   directory2/subDirectory2/file2
#   directory2/subDirectory3/file3
#
#
#
#                                           OUTPUT
# ON QUERRYING THE FILE CONTAINING THESE STATEMENTS, ALL THE ABOVE STATEMENTS MUST BE RETURNED 
#
#
#                                           SOLUTION
#   THE SOLUTION TO THIS PROBLEM CAN BE FOUND USING GREP COMMAND
#
#
    grep "CONTEXT_SWITCH" -d recurse


#   Explaination of above solution contains the following things
#   1.  A Pattern "CONTEXT_SWITCH"
#   2.  -d OPTION which tells that it looks for files within the directories and subdirectories.
#   3.  The above option requires an ACTION which could be read, recurse, skip
    
#--------------------------------------------------------------------------------------------------------------------------------------------
