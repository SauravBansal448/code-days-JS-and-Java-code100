
//reverse a string
import java.util.Scanner;

public class StringReverse{
	public static void main(String[] args){
	Scanner in=new Scanner(System.in);
	System.out.println("Enter the string to reverse: ");
    String str=in.nextLine();
    String reverse = new StringBuffer(str).reverse().toString();
    System.out.println("String after reverse:"+reverse);
	}
}