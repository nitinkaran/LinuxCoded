package basic_project;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;

public class ArrayExample {

	public static void main(String[] args) {
		List<String> list = new ArrayList<String>();
		Scanner s = new Scanner(System.in);
		
		list.add("Nagendra");
		list.add("Karan");
		list.add("Nitin");
		list.add("Verma");
		
		list.add(s.next());
		list.add(s.next());
		list.add(s.next());
		list.add(s.next());
		
		Iterator<String> it = list.iterator();
		while(it.hasNext()) {
			System.out.println(it.next());
		}
	}

}
