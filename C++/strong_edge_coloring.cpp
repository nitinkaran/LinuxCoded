// Test the array passing parameter
#include<iostream>
#include<algorithm>
#include<cstdio>
#include<fstream>
#include<string>
#include<vector>
#include<climits>
#include<queue>
#include<set>
#include<map>

using namespace std;

class GRAPH
{
	public:
		int data;
		GRAPH *next, *prev;
};


class EDGE
{
	public:
		int min_vertex;
		int max_vertex;
		int color;
		EDGE *next;
};

//CREATING THE ADJACENCY LIST FOR THE GRAPH
void create_graph(GRAPH *adj_list[],int vertex, int edges, EDGE *edge_list[])
{
	int i,j,k,l,vertex_u, vertex_v;
	GRAPH *ptr_u, *ptr_v, *head1, *head2;
	
	cout<<"\n Enter the edges of the graph \n";	

	for(i=1;i<=edges;i++)
	{ 
		cin>>vertex_u;
		cin>>vertex_v;
		
		
		if(vertex_u < vertex_v)
		{
			edge_list[i]->min_vertex = vertex_u;
			edge_list[i]->max_vertex = vertex_v;
		}
		else
		{
			edge_list[i]->min_vertex = vertex_v;
			edge_list[i]->max_vertex = vertex_u;
		}
		
		
		ptr_u = new GRAPH();
		ptr_v = new GRAPH();
		
		//a node is created for vertices u and v
		ptr_u->data=vertex_u;
		ptr_u->next=NULL;
		ptr_u->prev=NULL;
		
		ptr_v->data=vertex_v;
		ptr_v->next=NULL;
		ptr_v->prev=NULL;
	
		
		//inserting the elements in u using if
		head1=adj_list[vertex_u]->next;
		
		if(head1==NULL)
		{
			adj_list[vertex_u]->next = ptr_v;
			ptr_v->prev = adj_list[vertex_u];
		}
		else
		{
			ptr_v->next = head1;
			head1->prev = ptr_v;
			ptr_v->prev = adj_list[vertex_u];			
			adj_list[vertex_u]->next = ptr_v;
		}				
		
		//inserting the elements in v using if
		head2=adj_list[vertex_v]->next;
		
		if(head2==NULL)
		{
			adj_list[vertex_v]->next = ptr_u;
			ptr_u->prev = adj_list[vertex_v];
		}
		else
		{
			ptr_u->next = head2;
			head2->prev = ptr_u;
			ptr_u->prev = adj_list[vertex_v];			
			adj_list[vertex_v]->next = ptr_u;
		}
		
		adj_list[vertex_v]->data++;
				
		adj_list[vertex_u]->data++;					
	}	
	
}


// DISPLAY THE ADJANCENY MATRIX OF THE GRAPH
void display_graph(GRAPH *adj_list[], int vertex)
{
	int i,j;
	GRAPH *ptr;
	cout<<"\n The adjacency list representation of graph is\n";
	for(i=1;i<=vertex;i++)
	{
		ptr=adj_list[i];
		cout<<i<<".) Degree "<<ptr->data<<" ---> ";
		ptr=ptr->next;
		
		while(ptr)
		{
			cout<<ptr->data<<"  ";
			ptr=ptr->next;
		}
		cout<<endl;
	}
}





//CREATING THE COPY OF THE ENTIRE GRAPH WHEN THE VALUE OF K IS TO BE FOUND OUT
void copy_graph(GRAPH *adj_list[], int vertex, GRAPH *adj[])
{
	GRAPH *adj_ptr, *ptr_temp, *ptr;	
	int i,k,j;
		
	for(i=1;i<=vertex;i++)
	{
		ptr = new GRAPH();
		ptr = adj_list[i];
		
		adj[i] = new GRAPH();
		adj[i]->data = ptr->data;
		adj[i]->prev = ptr->prev;
		adj[i]->next = ptr->next;
		
		adj_ptr = adj[i];
		ptr = ptr->next;
		
		while(ptr)
		{
			ptr_temp = new GRAPH();
			
			ptr_temp->data = ptr->data;			
			ptr_temp->prev = ptr->prev;
			ptr_temp->next = ptr->next;	
			ptr->prev->next = ptr_temp;
			
			ptr = ptr->next;									
		}			
	}

}


// To FIND WHETHER 2 VERTICES CONNECTED WITH AN EDGE OR NOT
int isConnected(GRAPH *adj_list[], int vertex_u, int vertex_v)
{
	GRAPH *ptr = new GRAPH();
	
	ptr = adj_list[vertex_u]->next;
	
	while(ptr)
	{
		if((ptr->data == vertex_v) && (ptr->data == vertex_v) )
		{
			return 1;
		}
		
		ptr = ptr->next;
	}
	
	return 0;
}


// TO FIND ALL THE VERTICES WHICH ARE AT THE NEIGHBORING DISTANCE OF 2 FROM U, V
int distance(GRAPH *adj_list[], int vertex, int start, int end)
{
	int temp, i, j, k, value;
	
	queue<long int> q;
	vector<long int> visit(vertex+3), count(vertex+3,LONG_MAX);

	q.push(start);
	count[start]=0;

	while(!q.empty())
	{
		temp=q.front();
        if(visit[temp])
        {
            q.pop();
            continue;
        }
		visit[temp]=1;

		GRAPH *ptr = adj_list[temp]->next;			

		while(ptr!=NULL)
		{
			if(visit[ptr->data]==0)
				q.push(ptr->data);				

			if(visit[ptr->data]==0 && count[ptr->data]>(count[temp]+1))
			{
				count[ptr->data]=count[temp]+1;
			}
			else if(visit[ptr->data]==1 && count[ptr->data]>(count[temp]+1))
			{
				count[ptr->data]=count[temp]+1;
			}
			ptr=ptr->next;
		}
		q.pop();
	}


	for(i=1;i<=vertex;i++)
	{
		if(visit[i]==0)
		{
            count[i]=-1;                
        }
        
        if(count[i] && i==end)
		{
			value = count[i];
			break;
		}
	}	
	
	visit.clear();
	count.clear();	
	return value;
}


// CONSTRUCTING THE EDGE LIST TO FIND ALL THE EDGES WHICH ARE NEIGHBORING ADJACENT TO THE PARTICULAR EDGE TO THE DISTANCE OF ATMOST 2
void adjacent_edge_list_construction(GRAPH *adj_list[], EDGE *edge_list[], int edges, int vertex)
{
	
	int i,j,k,l, vertex_u, vertex_v, connected, value;
	int dist1, dist2, dist3, dist4 ;
	EDGE *eptr;
	GRAPH *gptr1, *gptr2;
	set<int> one_adjacent, two_adjacent;
	set<int>::iterator it, jt, kt;
	
	// A PAIR CREATED TO STORE THE VERTICES WHICH ARE CONNECTED WITH AN EDGE
	set<pair<int,int> > edge_set;
	set<pair<int,int> >::iterator pit, pjt;
	
	pair<int, int> pair_value;
	
	for(i=1 ; i<=edges ; i++)
	{
		vertex_u = edge_list[i]->min_vertex;
		vertex_v = edge_list[i]->max_vertex;
		
		gptr1 = new GRAPH();
		gptr1 = adj_list[vertex_u]->next;
		
		while(gptr1)
		{
			one_adjacent.insert(gptr1->data);
			gptr1 = gptr1->next;
		}
		
		gptr2 = new GRAPH();
		gptr2 = adj_list[vertex_v]->next;
		
		while(gptr2)
		{
			one_adjacent.insert(gptr2->data);
			gptr2 = gptr2->next;
		}
				
		it = one_adjacent.find(vertex_v);
		one_adjacent.erase(it);
		
		it = one_adjacent.find(vertex_u);
		one_adjacent.erase(it);         	//ALL VERTICES HERE ARE UNIQUE AND ARE 1 ADJACENT TO VERTICES U & V
		
		//FINDING ALL DISTANCE 1 ADJACENT EDGES FROM VERTEX U		
		for(it = one_adjacent.begin(); it!=one_adjacent.end(); it++)
		{
			value = distance(adj_list, vertex , vertex_u, *it);
			connected = isConnected(adj_list, vertex_u, *it);
			
			if(value == 1 && connected == 1)
			{
				eptr = new EDGE();
				if(vertex_u < *it)
				{
					eptr->min_vertex = vertex_u;
					eptr->max_vertex = *it;
					eptr->next = NULL;										
				}
				else
				{				
					eptr->min_vertex = *it;
					eptr->max_vertex = vertex_u;
					eptr->next = NULL;
				}
				
				if(edge_list[i]->next == NULL)
				{
					edge_list[i]->next = eptr;
				}
				else
				{
					eptr->next = edge_list[i]->next;
					edge_list[i]->next = eptr;
				}
			}
		}

		//FINDING ALL DISTANCE 1 ADJACENT EDGES FROM VERTEX V
		
		for(it = one_adjacent.begin(); it!=one_adjacent.end(); it++)
		{
			value = distance(adj_list, vertex , vertex_v, *it);
			connected = isConnected(adj_list, vertex_v, *it);
			
			if(value == 1 && connected == 1)
			{
				eptr = new EDGE();
				if(vertex_v < *it)
				{					
					eptr->min_vertex = vertex_v;
					eptr->max_vertex = *it;
					eptr->next = NULL;										
				}
				else
				{
					eptr->min_vertex = *it;
					eptr->max_vertex = vertex_v;
					eptr->next = NULL;
				}
				
				if(edge_list[i]->next == NULL)
				{
					edge_list[i]->next = eptr;
				}
				else
				{
					eptr->next = edge_list[i]->next;
					edge_list[i]->next = eptr;
				}
			}
		}



		// FINDING ALL VERTICES WHICH ARE AT A DISTANCE OF 2 FROM VERTICES U & V	
		// FROM HERE ONWARDS WE WILL TRY TO FIND ALL THE EDGES WHICH ARE AT A DISTANCE 2 FROM THE EDGE UV. IN ORDER TO FIND ALL THE EDGES 
		// WE NEED TO EXPLORE ALL THE POSSIBLITIES OF THE EDGES WHICH CAN BE FORMED FROM THE VERTICES WHICH ARE ADDED IN ANY OF THE TWO
		// ADJACENT SETS ie ONE_ADJACENT & TWO_ADJACENT.	
		for(it = one_adjacent.begin(); it!=one_adjacent.end(); it++)
		{
			gptr1 = adj_list[*it]->next;
			
			while(gptr1)
			{
				two_adjacent.insert(gptr1->data);
				gptr1 = gptr1->next;
			}
		}


		//REMOVING ALL 1 ADJACENT VERTICES FROM SET OF TWO ADJACENT VERTICES TO MAKE IT A UNIQUE SET	
		for(it = one_adjacent.begin(); it!=one_adjacent.end(); it++)
		{
			jt = two_adjacent.find(*it);
			if(jt!=two_adjacent.end())
				two_adjacent.erase(jt);
		}

		//REMOVING THE VERTEX U & V FROM SET		
		two_adjacent.erase(vertex_u);
		two_adjacent.erase(vertex_v);
		
		
		//FINDING ALL THE EDGES WHICH ARE CONNECTED FROM THE VERTICES OF SET ONE_ADJACENT
		for(it = one_adjacent.begin(); it!=one_adjacent.end(); it++)
		{
			kt = it;
			kt++;
			if(it!=one_adjacent.end() && kt==one_adjacent.end())
				break;
			for(jt = ++it, --it; jt!=one_adjacent.end(); jt++)
			{							
				if( isConnected(adj_list, *it, *jt) )
				{
				
					eptr = new EDGE();
					
					if(*it < *jt)
					{					
						eptr->min_vertex = *it;
						eptr->max_vertex = *jt;
						edge_set.insert(make_pair(*it, *jt));
					}
					else
					{
						eptr->min_vertex = *jt;
						eptr->max_vertex = *it;
						edge_set.insert(make_pair(*jt, *it));
					}
					
					if(edge_list[i]->next == NULL)
					{
						edge_list[i]->next = eptr;
					}
					else
					{
						eptr->next = edge_list[i]->next;
						edge_list[i]->next = eptr;
					}
					
				}
			}
		}



		
		//FINDING ALL THE EDGES WHICH ARE CONNECTED BUT WHOSE VERTICES ARE SCATTERED BETWEEN SETS ONE_ADJACENT & TWO_ADJACENT
		for(it = one_adjacent.begin(); it!=one_adjacent.end(); it++)
		{
			for(jt = two_adjacent.begin(); jt!=two_adjacent.end(); jt++)
			{
				if( isConnected(adj_list, *it, *jt) )
				{
				
					eptr = new EDGE();
					
					if(*it < *jt)
					{
						eptr->min_vertex = *it;
						eptr->max_vertex = *jt;
						edge_set.insert(make_pair(*it, *jt));
					}
					else
					{
						eptr->min_vertex = *jt;
						eptr->max_vertex = *it;
						edge_set.insert(make_pair(*jt, *it));
					}
					
					if(edge_list[i]->next == NULL)
					{
						edge_list[i]->next = eptr;
					}
					else
					{
						eptr->next = edge_list[i]->next;
						edge_list[i]->next = eptr;
					}
					
				}
			}
		}
		

		
		//FINDING ALL THE EDGES WHICH ARE CONNECTED FROM THE VERTICES OF SET TWO_ADJACENT
		for(it = two_adjacent.begin(); it!=two_adjacent.end(); it++)
		{
			for(jt = ++it, --it; jt!=two_adjacent.end(); jt++)
			{		
			
				dist1 = distance(adj_list, vertex, vertex_u, *it);
				dist2 = distance(adj_list, vertex, vertex_u, *jt);
				dist3 = distance(adj_list, vertex, vertex_v, *it);
				dist4 = distance(adj_list, vertex, vertex_v, *jt);
				
				if((dist1==2 && dist2==2) || (dist3==2 && dist4==2))
				{
					continue;
				}
				
				else if( isConnected(adj_list, *it, *jt) )
				{
					eptr = new EDGE();
					if(*it < *jt)
					{
						eptr->min_vertex = *it;
						eptr->max_vertex = *jt;
						edge_set.insert(make_pair(*it, *jt));
					}
					else
					{
						eptr->min_vertex = *jt;
						eptr->max_vertex = *it;
						edge_set.insert(make_pair(*jt, *it));
					}
					
					if(edge_list[i]->next == NULL)
					{
						edge_list[i]->next = eptr;
					}
					else
					{
						eptr->next = edge_list[i]->next;
						edge_list[i]->next = eptr;
					}
					
				}
			}
		}
		
		
		
		one_adjacent.clear();
		two_adjacent.clear();		

		
	}
}


void show_edges(EDGE *edge_list[], int edges)
{
	int i;
	EDGE *ptr = new EDGE();
	
	for(i=1; i<=edges; i++)
	{
		cout<<edge_list[i]->min_vertex<<" | "<<edge_list[i]->max_vertex<<" --->  ";
		ptr = edge_list[i]->next;
		while(ptr)
		{
			cout<<"("<<ptr->min_vertex<<","<<ptr->max_vertex<<") ";
			ptr = ptr->next;
		}
		cout<<endl<<endl;
	}
}


int search_for_index_of_edge(EDGE *edge_color[], int edges, int vertex_u, int vertex_v)
{

	int i,pos;
	
	for(i=1; i<=edges; i++)
	{
		if(edge_color[i]->min_vertex == vertex_u && edge_color[i]->max_vertex == vertex_v)
		{
			pos = i;
		}
	}
	return pos;
}



void color_edges(EDGE *edge_list[], int edges)
{
	
	set<pair<int, int> > uncolored_edges, colored_edges, process_edges, copy_uncolored_edges;
	set<pair<int, int> >::iterator it, jt, loop_var, del;
	int i,j, index, current_color, strong_chromatic_index;
	EDGE *edge_color[edges+3], *ptr;
	
	queue<int> queue_color;
	
	for(i=1; i<=edges; i++)
	{
		uncolored_edges.insert(make_pair(edge_list[i]->min_vertex,edge_list[i]->max_vertex));
		copy_uncolored_edges.insert(make_pair(edge_list[i]->min_vertex,edge_list[i]->max_vertex));
	}	
	
	for(i=1, it=uncolored_edges.begin(); i<=edges && it!=uncolored_edges.end(); i++, it++)
	{
		edge_color[i] = new EDGE();
		edge_color[i]->min_vertex = (*it).first;
		edge_color[i]->max_vertex = (*it).second;
		edge_color[i]->color = -1;
		edge_color[i]->next = NULL;
		
		queue_color.push(i + 100);
	}

	//COLORING THE EDGES
	for(it = uncolored_edges.begin(); it!= uncolored_edges.end(); it++)
	{		
		loop_var = it;
		
		//COPYING THE EDGE LIST INTO THE SET PROCESS_EDGES		
		for(i=1;i<=edges; i++)
		{
			process_edges.insert(make_pair(edge_color[i]->min_vertex, edge_color[i]->max_vertex));
		}
		
		index = search_for_index_of_edge(edge_color, edges, (*it).first, (*it).second);	
		
		//IF CHOOSEN EDGE IS NOT YET COLORED THEN COLOR IT WITH SOME COLOR IN COLOR QUEUE OTHERWISE LOOK FOR OTHER EDGE
		if(edge_color[index]->color == -1)
		{
			edge_color[index]->color = queue_color.front();
			current_color = queue_color.front();
			queue_color.pop();			
		}
		else
		{
			continue;
		}
		
		//CHOOSEN EDGE IS COLORED AND THEN LOOKING FOR ALL OTHER EDGES WHICH CAN BE COLORED WITH SAME COLOR
		while(!process_edges.empty())
		{			
			//FIRST EDGE IN THE PROCESS_EDGES SET IS CHOOSEN TO FIND WHETHER IT CAN BE COLORED WITH SAME COLOR OR NOT
			index = search_for_index_of_edge(edge_list, edges, (*it).first, (*it).second);
			jt = process_edges.find(make_pair((*it).first, (*it).second));
			process_edges.erase(jt);

			ptr = edge_list[index]->next;
			
			
			//REMOVING ALL THE DISTANCE 2 EDGES OF EDGE SELECTED FOR COLORING
			while(!process_edges.empty() && ptr!=NULL)
			{
				jt = process_edges.find(make_pair(ptr->min_vertex, ptr->max_vertex));
				if(jt!=process_edges.end())
				{
					process_edges.erase(jt);
				}
				
				ptr = ptr->next;
			}
			
			//IF THE SET IS NOT EMPTY, SO SEARCH FOR OTHER EDGES WHICH CAN BE COLORED WITH THE SAME COLOR			
			while(!process_edges.empty())
			{				
				it = process_edges.begin();
				index = search_for_index_of_edge(edge_color, edges, (*it).first, (*it).second);	
				
				if(edge_color[index]->color == -1)
				{	
					edge_color[index]->color = current_color;		
					break;					
				}
				else
				{
					process_edges.erase(it);
					it++;
				}
			}
		}
		
		it = loop_var;		
	}
	

	strong_chromatic_index = current_color - 100;
	cout<<"\n THE STRONG CHROMATIC INDEX OF GRAPH = "<<strong_chromatic_index<<endl;	
	
	cout<<"\n PRINTING THE COLORS OF EDGES\n";
	for(i=1; i<=edges; i++)
	{
		cout<<"("<<edge_color[i]->min_vertex<<","<<edge_color[i]->max_vertex<<") -----  "<<edge_color[i]->color<<endl;
	}


}



//FINDING OUT THE DEGENERACY FOR THE GRAPH
void find_degeneracy(GRAPH *adj_list[], int vertex, GRAPH *adj_list_copy[])
{
	
	int i,j,k,temp, temp1, flag, index, found, count;
	GRAPH *ptr;
	
	vector<int> v_degree;
	vector<int>::iterator v_it;
	
	map<int, int> map_vertex_degree;
	map<int, int>::iterator map_it;
	
	copy_graph(adj_list,vertex,adj_list_copy);
	
	//priority_queue<pair<int, int> , vector<pair<int, int> >, greater<pair<int, int> > > pq_degree;
	
	//QUEUEING THE DEGREE OF VERTICES IN VECTOR
	//ASSIGNING VERTEX AND ITS DEGREE TO MAP
	for(i=1; i<=vertex; i++)
	{
		//pq_degree.push(make_pair(adj_list_copy[i]->data,i));		
		v_degree.push_back(adj_list_copy[i]->data);
		map_vertex_degree[i] = adj_list_copy[i]->data;
	}
		
	sort(v_degree.begin(), v_degree.end());			
	
	k = v_degree.front();  //DEGENERATE VARIABLE
		
	while(1)
	{

		count = 0;
		
		while(!v_degree.empty())
		{
			temp = v_degree.front();   //Assuming that least a graph can be min degree -- degenerate graph	
			cout<<"\n temp = "<<temp<<endl;
			
			count++;	
		
			found = 0;
			
			for(i=1; i<=vertex; i++)
			{
				if(map_vertex_degree[i] <= k )
				{
					index = i;
					found = 1;
					map_vertex_degree[i] = -1;
					break;
				}
			}
		
			ptr = adj_list_copy[index]->next;
			
			v_degree.erase(v_degree.begin());
			map_it = map_vertex_degree.find(index);
			map_vertex_degree.erase(map_it);
			
			if(found)
			{
				cout<<" \n In found \n";
				while(ptr)
				{
					adj_list_copy[ptr->data]->data = adj_list_copy[ptr->data]->data-1;
					map_it = map_vertex_degree.find(ptr->data);
					map_it->second = adj_list_copy[ptr->data]->data;				
					ptr = ptr->next;
				}
				cout<<" Adjacent degrees removed \n";
			
				for(map_it = map_vertex_degree.begin(); map_it != map_vertex_degree.end(); map_it++)
				{
					if(map_it->second > 0 )
						v_degree.push_back(map_it->second);
				}
				
				cout<<" Map has been updated\n";
			
				sort(v_degree.begin(), v_degree.end());
			
			}	
			else
			{
				v_degree.clear();
				map_vertex_degree.clear();
				
				for(i=1; i<=vertex; i++)
				{
					v_degree.push_back(adj_list_copy[i]->data);
					map_vertex_degree[i] = adj_list_copy[i]->data;
				}
				
				sort(v_degree.begin(), v_degree.end());
				
				k++;
				break;
			}	
		}
		
		if(count == vertex)
			break;
	}
		
	cout<<"\n\n\n\n\n The Degeneracy for the graph is : "<<k<<endl;
}



int main()
{
	int vertex,edges,i,start,end;
		
	cout<<"	Enter the number of vertices and edges of the graph\n";
	cin>>vertex>>edges;
	
	GRAPH *adj_list[vertex+2], *adj_list_copy[vertex+1];	
	
	EDGE *edge_list[edges+2];
	
	for(i=1;i<=vertex;i++)
	{
		adj_list[i]=new GRAPH();
		adj_list[i]->data=0;
		adj_list[i]->next=NULL;
		adj_list[i]->prev=NULL;
	}
	
	for(i=1; i<=edges; i++)
	{
		edge_list[i] = new EDGE();
		edge_list[i]->color = 0;
		edge_list[i]->next = NULL;
	}
	

	
	create_graph(adj_list,vertex,edges,edge_list);
	
	copy_graph(adj_list,vertex,adj_list_copy);
	
	adjacent_edge_list_construction(adj_list, edge_list, edges, vertex);
	
	color_edges(edge_list, edges);	
	
	//find_degeneracy(adj_list,vertex,adj_list_copy);
	return 0;
}













/*




1 2
1 3
1 4
2 4
3 4
2 5
4 6
5 6
5 7
5 8
6 7
7 8
8 9
7 9
7 10
9 10








1 2
1 3
1 4
1 5
1 6
1 7
1 8
2 9
2 10
2 11
3 12
4 13
4 14
6 15         
6 16
7 18      
8 19
8 20
8 21 
8 22
9 23
9 24
10 27
11 29
12 35
13 36
13 37
13 38
16 17
16 40
20 45
22 50
22 51
22 52
23 25
24 26
27 28
29 30
29 31
29 32
29 33
38 39
40 41
40 42
40 43
40 44
45 46
45 47
45 48
45 49
52 53
52 54
52 55
55 56





vertex and edge
19 34

1 2
1 3
1 4
1 18
1 19
2 18
2 4
2 7
3 19
3 4
3 5
3 6
4 5
4 8
5 8
5 9
5 6
6 9
7 8
7 10
8 10
8 12
10 11
10 12
11 12
11 15
12 13
12 14
13 15
13 16
13 17
15 16
16 17
14 17



//REMOVING THE DEGREE FROM ADJACENCY LIST 
void update_adjacency(GRAPH *adj_list_copy[], int i, int vertex)
{	
	GRAPH *ptr, *traverse; 
	
	ptr = new GRAPH();	
	traverse = new GRAPH();	
	ptr = traverse = adj_list_copy[i]->next;
	
	traverse = traverse->next;
	
	while(traverse)
	{
		
	}
	
	
}








//	SEARCHING FOR DEGREE OBTAINED FROM THE QUEUE 
int search_for_degree(GRAPH *adj_list_copy[], int vertex, int element)
{
	int i,j,k;
	
	for(i=1;i<=vertex;i++)
	{	
		if(adj_list_copy[i]==element)
		{
			update_adjacency(adj_list_copy,i,vertex); 				//??????? Something is to be done here
		}
	}
	
	return 0;
}





// SEARCHING FOR THE DESIRED POINTER AS FOUND IN SEARCH_FOR_DEGREE 
GRAPH* search_for_pointer(GRAPH *adj_list_copy[], int vertex, int temp)
{
	int i,j,k;
	GRAPH *ptr, *p;
	
	ptr = new GRAPH();
	
	for(i=1;i<vertex;i++)
	{
		if(temp==adj_list_copy[i])
		{
			ptr = adj_list_copy[i]->next;
		}
	}	
}






								1-------\
							 2----------\
						  3-------------\	6 -  
					   4----------------\	   -
					5-------------------\       -
						                          7--------------------------8 same sequence
						                          
						                          





	Enter the number of vertices and edges of the graph
42 41

 Enter the edges of the graph 
1 5
2 5
3 5
4 5
5 21
6 10
7 10
8 10
9 10
10 21
11 15
12 15
13 15
14 15
15 21
16 20
17 20
18 20
19 20
20 21
21 22
23 24
23 25
23 26
23 27
22 23
32 33
32 34
32 35
32 36
32 22
37 41
37 40
37 39
37 38
28 42
29 42
30 42
31 42
22 42
37 22

 THE STRONG CHROMATIC INDEX OF GRAPH = 9






*/




