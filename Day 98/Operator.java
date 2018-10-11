import java.util.Scanner;
public class Operator {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int answer;
		Scanner sc=new Scanner(System.in);
		System.out.println("enter the value of x");

		int x=sc.nextInt();
		Scanner sc1=new Scanner(System.in);
		System.out.println("enter the value of y");

		int y =sc1.nextInt();
		answer=x%y;
		System.out.println("Answers  " + answer);

	}

}
	