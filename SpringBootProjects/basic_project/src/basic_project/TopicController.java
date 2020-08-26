package basic_project;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class TopicController {

	public static void main(String[] args) {
		
		Topics topic1 = new Topics(1, "Nagendra", "Karan");
		Topics topic2 = new Topics(2, "Nitin", "Karan");
		Topics topic3 = new Topics(3, "Varun", "Erigilla");
		Topics topic4 = new Topics(4, "Swapnil", "Bokade");
		Topics topic5 = new Topics(5, "Abhishek", "Panchal");
		
		List<Topics> list = new ArrayList<Topics>();
		list.add(topic5);
		list.add(topic4);
		list.add(topic3);
		list.add(topic2);
		list.add(topic1);
		
		for (Iterator iterator = list.iterator(); iterator.hasNext();) {
			Topics topics = (Topics) iterator.next();
			System.out.println(topics.getId() + "  " + topics.getName() + "  " + topics.getDescription() );
		}

		Iterator<Topics> itr = list.iterator();
		while(itr.hasNext()) {
			Topics t = itr.next();
			System.out.println(t.getId()+ "  "+ t.getName()+ "  "+ t.getDescription());
		}
		
	}

}
