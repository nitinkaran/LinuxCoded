package io.karan.springbootstarter.topic;

import org.springframework.data.repository.CrudRepository;


/*
 * CONCEPT
 * 
 * We must have a repository which uses the Services provided by the TopicsService so that we can connect to the database using JPA. This allows us to save,
 * retrieve and query on the database. So to have this kind of functionality we create a class 'TopicRepository". Now this TopicRepository will provides us
 * some of the methods like getAllTopics(), getTopicsById(), updateTopic(), deleteTopic(). So this is kind of generic functionality a repository must have.
 * Here instead of creating TopicRepository as class we will make it as an interface because there is a class provided by the spring JPA which contains all
 * the generic functionality called as "CrudRepository" which contains the logic for any entity class and all the common functionalities. But if we have any
 * other specific requirement like search for some data based on some filters and then add some other data to on it runtime and then return without making
 * any permanent changes to the database, then to handle this kind of scenario we need to declare that method on our own here in this interface.
 * 
 * 
 * Now this CrudRepository is of generic type bcz all the common methods have some TYPE information. So the entity with which we are working with is a generic
 * thing with which we are working. Hence one of the argument will be Topic and now the this entity has a primary key: Id which is of type String. Now with
 * this CrudRepository<Topic, Sting> we will get all the common functionality. 
 *  
 *  
 */

public interface TopicRepository extends CrudRepository<Topic, String > {
 
}
