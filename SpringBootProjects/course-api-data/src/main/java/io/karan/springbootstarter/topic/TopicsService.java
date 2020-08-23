package io.karan.springbootstarter.topic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/*
 * CONCEPT 
 * 
 * Now after creating the CrudReposity we will need to use the functionality of the TopicsService which will create the entity of Topic and then create the
 * relation using spring JPA. So to inject these things into the database can be done using the object of TopicRepository which will inject all the data into
 * the database.
 * 
 * Here we have create a hard coded repository we will need to change as initially the database will be empty. Apart from this we will check what all the 
 * functionality provided by the CrudRespository.
 * 
 */


@Service
public class TopicsService {
	
	
	@Autowired
	private TopicRepository topicRepository;
	private List<Topic> topics = new ArrayList<Topic>();
	
	/*
	 * Here we try to find how the topicRepository will return all the topics and then all the returned topics will be have to be contained in a list.
	 * So we need to iterate over each of the items returned by findAll() and then add them to array of topics list.
	 */
	public List<Topic> getAllTopics() {
		
		List<Topic> topics = new ArrayList<>();
//		topicRepository.findAll()
//		.forEach(item -> {topics.add(item);});
		
		topicRepository.findAll()
		.forEach(topics :: add);
		
		return topics;
	}
	
	
	/*
	 * The Crud Repository has a method findById which find the topic given with the id.
	 */
	public Optional<Topic> getTopic(String id) {
//		Topic value = topics.stream().filter(t -> t.getId().equals(id)).findFirst().get();
//		return value;
		return topicRepository.findById(id);
	}

	
	/*
	 * To add a topic to the repository we will need to see what method is provided by CrudRepository. We find that save is one of the method which will add
	 * the topic to the repository.
	 */
	public void addTopic(Topic topic) {
//		topics.add(topic);
		topicRepository.save(topic);
	}

	
	/*
	 * CrudRepository does not have any method for update, but we have save method which can perform the same task. All it takes is the topic and not the Id
	 * bcz database already have the tuple corresponding to that id. It first checks whether the entry for that id exists or not. If it exists then it takes
	 * the topic and then update that entity
	 */
	public void updateTopic(Topic topic, String id) {
		
//		for(int i=0; i<topics.size(); i++) {
//			if (topics.get(i).getId().equals(id)) {
//				topics.set(i, topic);
//				return;
//			}
//		}
		topicRepository.save(topic);
	
	}

	/*
	 * Crud provides a method deleteById which takes the id parameter of the topic topic and then delete that specific topic
	 */
	public void deleteTopic(String id) {
		topicRepository.deleteById(id);
//		topics.removeIf(item -> item.getId().equals(id));
	}
}
