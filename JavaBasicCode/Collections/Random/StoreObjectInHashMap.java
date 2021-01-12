import java.util.*;

class Student {
    String name;
    int age;

    Student(String name, int age){
        this.name = name;
        this.age = age;
    }
}

public class StoreObjectInHashMap {
    public static void main(String[] args){
        Map<Object, Integer> map = new HashMap<Object, Integer>();
        Object o;
        Student s1 = new Student("nagendra", 1);
        Student s2 = new Student("karan", 2);
        Student s3 = new Student("nitin", 3);
        Student s4 = new Student("shiv", 4);

        map.put(s1, 1);
        map.put(s2, 1);
        map.put(s3, 1);
        map.put(s4, 1);
        o = 21;
        map.put(o, 1);
        o = 14;
        map.put(o, 1);
        o = 341;
        map.put(o, 1);
        o = 56;
        map.put(o, 1);

        final StringBuilder s = new StringBuilder("a");
        s.append("BDKJJJSA");
        System.out.println(s);

        // for(Map.Entry<Object, Integer> m : map.entrySet()){
        //     o = m.getKey().getClass();
        //     if(o instanceOf java.lang.Integer){
        //         System.out.println(m.getKey()+ "   "+ m.getValue() );
        //     }else{
                
        //         String name = (String) o;
        //         System.out.println(name+ "   "+ m.getValue() );
        //     }

        // }
    }
}