package com.karan.stream;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class StreamUsage {
	
	public static boolean startsWithChar(String str) {
		return str.startsWith("t") || str.startsWith("s");
	}
	
	public static boolean hasLength(String str) {
		return str.length() > 4 ;
	}

	public static void main(String[] args) {
		/*
		 * Filters strings which starts with letter 'a' or 'p' with another filter of length
		 * should be greater than 3 
		 */
		
		List<String> list = new ArrayList<String>();
		list.addAll(Arrays.asList("Streams", "are", "easier", "and", "better", "to use", "with", "Lambda", "expressions", 
				"and", "this", "example", "highlights", "how", "simple", "and", "clean", "the", "syntax" ,"looks,", "compared to", 
				"the", "traditional", "approach", "If you run", "this code", "the imperative", "style and", "functional",
				"style", "should", "return", "the same", "thing", "classic", "task is to", "categorize", "objects", "according",
				"to certain", "criteria.", "We can do", "this by", "matching", "the needed", "information", "to the object",
				"information", "and check", "if that's", "what we need"));
		
		
		// This is stream usage with METHOD REFERENCES. Here instead of checking startsWith method, we create a method and give its reference
		// similarly to print the we give the class name and then its method
		list.stream()
		.filter(StreamUsage :: startsWithChar)
		.filter(StreamUsage :: hasLength)
		.forEach(System.out :: println);
		
	}

}
