package basic_project;

import java.util.Scanner;

import javax.swing.plaf.synth.SynthOptionPaneUI;

class Node {
	int data;
	Node next;
	
	Node(int value) {
		this.data = value;
		this.next = null;
	}
}

public class SinglyList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int insertionTimes, iterator, j, k;
		Node head=null;
		
		Scanner s = new Scanner(System.in);
		System.out.println("Enter the number of nodes to be inserted");
		insertionTimes = s.nextInt();
		
		for(iterator=0; iterator<insertionTimes; iterator++) {
			j = s.nextInt();
			Node node = new Node(j);
			if(head == null) {
				head = node;
			} else {
				node.next = head;
				head = node;
			}
		}
		
		System.out.println("\n Display the list : ");
		
		Node showVal = head;
		while( showVal.next != null) {
			System.out.print(showVal.data + " -->  ");
			showVal = showVal.next;
		}
		
		System.out.println(showVal.data + "\n\n Exitting the list \n");
	}

}
