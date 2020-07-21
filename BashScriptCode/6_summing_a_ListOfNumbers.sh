#/bin/bash

# THIS PROGRAM PERFORMS THE SUM OF LIST OF NUMBERS WHICH ARE PRESENT IN A COLUMN FASHION. FOR EXAMPLE - ls -l COMMAND GIVES THE DETAILS OF THE
# FILES IN THE DIRECTORY. IN THE FIFTH COLUMN IT CONTAINS THE SIZE OF EACH FILE. SO THIS INFORMATION CAN BE USED TO FIND THE SIZE OF ALL THE 
# FILES ON THAT LOCATION. 

###########################################################################################################################

ls -l | grep -v '^somePattern' | awk '{sum += $5} END {print sum}'

# ABOVE LINE CONTAINS THE LIST OF ALL FILES THEN GREP FINDS ALL THE LINE WHICH DO NOT CONTAIN THE GIVEN PATTERN WHICH IS FED TO AWK.
# THEN awk PERFORMS THE SUM ON 5TH COLUMN WHICH CONTAINS THE SIZE OF EACH FILE. STATEMENT PRECEDED BY 'END' IS EXECUTED ONLY ONCE.
# SIMILARLY THIS TASK CAN ALSO BE PERFORMED BY INDIVIDUALLY BY awk AS FOLLOWS


ls -l | awk '/^some/{getline} {sum += $5} END {print sum}'

# ABOVE COMMAND CHECK FOR THE LINE STARTING WITH REGEX AND THEN PERFORMS THE SUM WITH 5TH COLUMN AND THEN READS THE NEXT LINE