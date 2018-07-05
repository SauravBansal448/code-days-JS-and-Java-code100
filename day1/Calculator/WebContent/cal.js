
            
            function calc()
            {
                var num1 = parseFloat(document.getElementById('n1').value);
                var num2 = parseFloat(document.getElementById('n2').value);
                
                var oper = document.getElementById('operators').value;
                
                if(oper === '+')
                {
                    document.getElementById('result').value = num1+num2;
                }
                
                if(oper === '-')
                {
                    document.getElementById('result').value = num1-num2;
                }
                
                if(oper === '/')
                {
                    document.getElementById('result').value = num1/num2;
                }
                
                if(oper === 'X')
                {
                    document.getElementById('result').value = num1*num2;
                }
            }
            
        