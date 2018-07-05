 var newString = ""; 
      var theString = "S A U R A V "; 
      var counter = theString.length; 

      for (counter  ;counter > 0 ;counter -- ) { 
         newString += theString.substring(counter-1, counter); 
      } 
      document.write(theString + " reversed is " + newString + "!"); 