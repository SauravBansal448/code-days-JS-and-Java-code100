public class Pattern12 
{
	public static void main(String[] args) 
    {
		int n, i, j, space = 1;
		Scanner s=new Scanner(System.in);
		System.out.println("Enter number of rows: ");
		n=s.nextInt();

		space = n - 1;

		  for (j = 1; j<=n; j++)
		  {
		    for (i = 1; i<=space; i++)
		      System.out.print(" ");

		    space--;

		    for (i = 1; i<= 2*j-1; i++)
		      System.out.print("*");

		    System.out.print("\n");
		  }
		 
		  space = 1;
		 
		  for (j = 1; j<= n - 1; j++)
		  {
		    for (i = 1; i<= space; i++)
		      System.out.print(" ");
		 
		    space++;
		 
		    for (i = 1 ; i<= 2*(n-j)-1; i++)
		      System.out.print("*");
		 
		    System.out.println("");
		  }
	}
}