#include<iostream>
#include<bitset>

using Namespace std:
#define INT_SIZE 32;
int reversebit(int n){ int pos =INT_SIZE -1;
int reverse=0 while(pos>=0&& n) 
{
	if(n&1)
		reverse=reverse|(1<<pos);
	n>>=1;
	pos--;
}
return reverse;
}
int main()
{
	int n= -100;
	cout<<nn<<"in binary is"<<bitset<32>(n)<<endl;
	cout<<"on reversing bits"<<bitset<32>(reversebit(n));
	return 0;

}