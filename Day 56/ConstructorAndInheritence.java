class ParentClass{
   //Parent class constructor
   ParentClass(){
	System.out.println("Constructor of Parent");
   }
}
class JavaExample extends ParentClass{
   JavaExample(){
	/* It by default invokes the constructor of parent class
	 * You can use super() to call the constructor of parent.
	 * It should be the first statement in the child class
	 * constructor, you can also call the parameterized constructor
	 * of parent class by using super like this: super(10), now
	 * this will invoke the parameterized constructor of int arg
	 */
	System.out.println("Constructor of Child");
   }
   public static void main(String args[]){
	//Creating the object of child class
	new JavaExample();
   }
}