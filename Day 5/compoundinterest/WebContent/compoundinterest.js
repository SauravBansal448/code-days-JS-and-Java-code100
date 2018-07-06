
        
            function calculate()
            {
                p = document.getElementById("p").value; // principle amount
                n = document.getElementById("n").value; // Rate 
                t = document.getElementById("t").value; // no. of years
                r = document.getElementById("r").value;
                result = document.getElementById("result");

                // The equation is A = p * [[1 + (r/n)] ^ nt]
                A = (p* Math.pow((1 + (r/(n*100))), (n*t)));

                // toFixed is used for rounding the amount with two decimal places.
                result.innerHTML = "The total amount is " + A.toFixed(2);

                result.innerHTML += "<br> The interest is " + (A.toFixed(2) - p).toFixed(2);
            }
       
       
            
            
            
            
            
            
            
            
            
            
            
            
            