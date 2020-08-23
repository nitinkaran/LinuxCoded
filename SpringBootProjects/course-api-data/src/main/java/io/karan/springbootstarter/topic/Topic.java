package io.karan.springbootstarter.topic;

import javax.persistence.Entity;
import javax.persistence.Id;

/*
 * @Entity annotation tells that this class will act as a RELATION in the database and all the members of this class will be used as columns of the RELATION.
 * Every relation of a DB must have the primary key or the candidate key. @Id annotation makes that particular member as the primary key.
 *  
 */

@Entity
public class Topic {

	@Id
	private String id;
	private String name;
	private String description;
	
	public Topic() {
		super();
	}	
	
	public Topic(String id, String name, String description) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
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
	
}
