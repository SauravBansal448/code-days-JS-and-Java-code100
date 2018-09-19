import java.util.Scanner;
class PrintPrimeNumbers
{
	
	static boolean isPrime(int num)
	{
		boolean flag=true;
		for(int i=2; i<=(num/2);i++)
		{
			if(num%i==0)
			{
				flag=false;
				break;
			}
		}
		return flag;
	}
  public static void main(String[] args) 
  {
	  int n;
	  Scanner SC=new Scanner(System.in);
	  
	  System.out.print("Enter the value of N: ");
	  n=SC.nextInt();
	  
	  for(int loop=2; loop<=n; loop++)
	  {
		  if(isPrime(loop)==true)
			  System.out.print(loop+" ");
	  }
  }
}