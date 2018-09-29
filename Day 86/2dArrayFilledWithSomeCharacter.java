// create a two dimensional array fill it with given few characters 

public class ExArrayFillWithDIffCharacters 
{
	public static void main(String args[])
	{
		// create scanner class object.
		Scanner Sc = new Scanner(System.in);

		// enter the size here.
		System.out.print("Enter size of the Array : ");
		int n = Sc.nextInt();
		// enter size in given range.
		if(n<2 || n>10)		
			System.out.print("Size out of Range");
		else
		{
			// declare array object.
			char A[][]=new char[n][n];

			// enter different characters for filling the array
			System.out.print("Enter first character : ");
			char c1 = Sc.next().charAt(0);

			System.out.print("Enter second character : ");
			char c2 = Sc.next().charAt(0);

			System.out.print("Enter third character : ");
			char c3 = Sc.next().charAt(0);

			for(int i=0; i<n; i++)
			{
				for(int j=0; j<n; j++)
				{
					// Filling the diagonals with third character
					if(i==j || (i+j)==(n-1))					
						A[i][j] = c3; 					
					else // Filling all other positions with second character
						A[i][j] = c2; 
				}
			}

			for(int i=0; i<n/2; i++)
			{
				for(int j=i+1; j<n-1-i; j++)
				{
					// Filling the upper positions.
					A[i][j] = c1; 

					// Filling the lower positions.
					A[n-1-i][j] = c1; 
				}
			}

			// Printing the Matrix
			System.out.println("\nOutput : \n");
			for(int i=0; i<n; i++)
			{
				for(int j=0; j<n; j++)
				{
					System.out.print(A[i][j]+" ");
				}
				System.out.println();
			}
		}
	}
}