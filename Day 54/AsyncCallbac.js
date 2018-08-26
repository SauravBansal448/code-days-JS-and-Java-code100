
<script>   
   function notifyAll(fnSms, fnEmail) {   
      setTimeout(function() {   
         console.log('starting notification process');   
         fnSms();   
         fnEmail();   
      }, 2000);   
   }   
   notifyAll(function() {   
      console.log("Sms send ..");   
   },  
   function() {   
      console.log("email send ..");   
   });   
   console.log("End of script"); //executes first or not blocked by others   
</script>