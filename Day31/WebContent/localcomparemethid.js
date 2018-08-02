//method returns a number indicating whether a reference string comes before 
or after or is the same as the given string in sorted order

<html>
   <head>
      <title>JavaScript String localeCompare() Method</title>
   </head>
   
   <body>
   
      <script type="text/javascript">
         var str1 = new String( "This is beautiful string" );
         var index = str1.localeCompare( "XYZ" );
         document.write("localeCompare first :" + index ); 
         
         document.write("<br />" ); 
         
         var index = str1.localeCompare( "AbCD ?" );
         document.write("localeCompare second :" + index ); 
      </script>
      
   </body>
</html>