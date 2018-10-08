

interface Shape{
	double area();
	
}
class Rectangle implements Shape{
	int l,w;
	//constructor
	Rectangle(int  l, int  w){
		
		this.l=l;
		this.w=w;
	}

	@Override
	public double area() {
		// TODO Auto-generated method stub
		return (double)(l*w);
	}
	
}
public class Interface {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Rectangle rect=new Rectangle(4,5);
		System.out.println("Area of rectangle" +rect.area());

	}

}
