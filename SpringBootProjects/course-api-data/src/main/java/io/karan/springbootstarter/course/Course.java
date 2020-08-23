package io.karan.springbootstarter.course;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import io.karan.springbootstarter.topic.Topic;

/*
 * @Entity annotation tells that this class will act as a RELATION in the database and all the members of this class will be used as columns of the RELATION.
 * Every relation of a DB must have the primary key or the candidate key. @Id annotation makes that particular member as the primary key.
 *  
 */

@Entity
public class Course {

	@Id
	private String id;
	private String name;
	private String description;
	
	/*
	 * There can be many courses that can have the same topic, since we have not yet connected the topic and source i.e. we must create a parent child
	 * relationship using the primary key and the foreign key on topic. In order to that we have an annotation called @ManyToOne
	 */
	@ManyToOne
	private Topic topic;
	
	public Course() {
		super();
	}	
	
	public Course(String id, String name, String description, String topicId) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.topic = new Topic(topicId, "", "");
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}
	
}
