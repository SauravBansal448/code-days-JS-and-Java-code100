function hcf(n1,n2,n3,n4)
{
    var temp , res=1;
    var d = 2;
   if(n1>n2)
    {
        if(n1>n3)
        {
            if(n1>n4)
            {
                temp = n1;
            }
            else
            {
                temp = n4;
            }
        }
        else
        {
            if(n3>n4)
            {
                temp = n3;
            }
            else
            {
                temp = n4;
            }
        }
    }
    else
    {
        temp =n2; 
    }
	
    for(var i = 2; i<=temp;i++)
    {
        if(n1%d==0 && n2%d==0 && n3%d==0 && n4%d==0)
        {
            res = res*d;
        }
       n1 = (n1%d==0)?n1=n1/d:n1;
        n2 = (n2%d==0)?n2=n2/d:n2;
        n3 = (n3%d==0)?n3=n3/d:n3;
        n4 = (n4%d==0)?n4=n4/d:n4;
        if(n1%d==0 && n2%d==0 && n3%d==0 && n4%d==0)
        {
            d =d;
        }
        else
        {
            d = d+1;
        }
    }
	console.log(res);
}
function lcm(n1,n2,n3,n4)
{
    var temp , res=1;
    var d = 2;
   if(n1>n2)
    {
        if(n1>n3)
        {
            if(n1>n4)
            {
                temp = n1;
            }
            else
            {
                temp = n4;
            }
        }
        else
        {
            if(n3>n4)
            {
                temp = n3;
            }
            else
            {
                temp = n4;
            }
        }
    }
    else
    {
        temp =n2; 
    }
	
    for(var i = 2; i<=temp;i++)
    {
        if(n1%d==0||n2%d==0||n3%d==0||n4%d==0)
        {
            res = res*d;
        }
        n1 = (n1%d==0)?n1=n1/d:n1;
        n2 = (n2%d==0)?n2=n2/d:n2;
        n3 = (n3%d==0)?n3=n3/d:n3;
        n4 = (n4%d==0)?n4=n4/d:n4;
        if(n1%d==0||n2%d==0||n3%d==0||n4%d==0)
        {
            d =d;
        }
        else
        {
            d = d+1;
        }
    }
	console.log(res);
}


hcf(12 , 16 , 8 , 4);
lcm(12 , 16 , 8 , 4);


