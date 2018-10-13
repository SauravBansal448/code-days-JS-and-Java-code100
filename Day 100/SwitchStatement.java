import java.util.Scanner;
public class SwitchStatement {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner input=new Scanner(System.in);
		System.out.println("enter the command");
		String text=input.nextLine();
		
	
		switch(text) {
		case "start" :
			System.out.println("Machine Started");
			break;
			
		case "stop" :
			System.out.println("machine stopped");
			break;
			
		default :
			System.out.println("command not recognised");
		}

	}

}
