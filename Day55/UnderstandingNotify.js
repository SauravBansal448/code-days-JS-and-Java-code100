<script>   
   function notifyAll(fnSms, fnEmail) {   
      console.log('starting notification process');   
      fnSms();   
      fnEmail();   
   }   
   notifyAll(function() {   
      console.log("Sms send ..");   
   }, 
   function() {   
      console.log("email send ..");   
   });   
   console.log("End of script"); 
   //executes last or blocked by other methods   
</script> 