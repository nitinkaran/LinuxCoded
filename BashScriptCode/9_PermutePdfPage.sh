#! /bin/bash

pdftk num24.pdf cat $(shuf -i 1-64) output new64.pdf


# num24.pdf is the input pdf file
# cat is for concatenating the intermediate pdfs 
# shuf is another script to permute the integers between 1-64

pdftk *.pdf cat output merge.pdf
# This will combine all the pdfs in the current directory into merge.pdf
