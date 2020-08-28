#!/bin/bash

#--------------------------------------------------------------------------------------------------------------------------------------------
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
#--------------------------------------------------------------------------------------------------------------------------------------------
1.  grep -n "\`" -f StudentService.js
2.  grep -n "return \`" -f StudentService.js
3.  grep -n "return \`\/" -f StudentService.js
4.  grep -n "return \`\/*$*" -f StudentService.js
5.  grep -n "\/*${*}\/" -f StudentService.js        -   This retreieve all the statements containing "/${someId}/i"

