
abstract class Shape{
	abstract double area();
	/*String color() {
		return null;
	}*/
}
 class Rectangle extends Shape{
	double l,w;
	Rectangle(double l, double w){
		this.l=l;
		this.w=w;
	}
	@Override
	double area() {
		// TODO Auto-generated method stub
		return l*w;
	}
}
public class Abstraction {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Shape rect=new Rectangle(4,5);
		System.out.println("Area of rectangle" +rect.area());

	}

}
