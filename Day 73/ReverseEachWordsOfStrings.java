import java.util.Scanner;

/**
 * program to input a string from user and reverse each word of given string
 * @author includehelp
 */

 // Reverse Each word of string
 public class ReverseEachWord {
    
    /**
     * Method to reverse each word in provided string
     * @param inputString
     * @return 
     */
    static String reverseWord(String inputString){
        String[] strarray = inputString.split(" ");  // Spilt String by Space
        StringBuilder sb = new StringBuilder();
        for(String s:strarray){
            if(!s.equals("")){
               StringBuilder strB = new StringBuilder(s);
               String rev = strB.reverse().toString();
               sb.append(rev+" "); 
            }    
        }
        return  sb.toString();
        
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enput String : ");
        String str = sc.nextLine();
        System.out.println("Input String : "+str);
        System.out.println("String with Reverese Word : "+reverseWord(str));
    }
    
}