class StringReverseRecursion {

    public static void reverseWithBuffer(String s, int n, StringBuffer r){
        if(n==0){
            return;
        }
        char c = s.charAt(n-1);
        r.append(c);
        reverseWithBuffer(s, n-1, r);
    }

    public static void main(String[] args){
        String s = "ABCDE";
        StringBuffer r = new StringBuffer("");        
        reverseWithBuffer(s, s.length(), r);
        System.out.println(r+"   "+r.length());

        StringBuffer sbr = new StringBuffer("Geeks"); 
		
		// conversion from StringBuffer object to StringBuilder 
		// String str = sbr.toString(); 
		StringBuilder sbl = new StringBuilder(sbr.toString());
        sbl.append(" HERE IN");

		System.out.println(sbr); 
		System.out.println(sbl); 
    }
}