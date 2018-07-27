(function(){

    function Question(question,answer,correct){
        this.question=question;
        this.answer=answer;
        this.correct=correct;
    
    }
    
    Question.prototype.displayQuestion = 
    function() {
        console.log(this.question);
        for (var i=0;i<this.answer.length;i++){
            console.log(i + ': '+ this.answer[i]);
        }
    }
    
    Question.prototype.checkAnswer = 
    function(ans,callback) {
        var sc;
        if(ans===this.correct){
            console.log('AApka Jawab SAHI hai....BRAVO!!');
          sc =  callback(true);
        }else{
            console.log('Aapka Jawab galat hai....SORRY!!');
       sc = callback(false);
        }

        this.dispalyScore(sc);
    }
       

    Question.prototype.dispalyScore =
    function(score){
        console.log('Aapka score hai: ' + score);
        console.log('------------------------');
    }
    
   
    
    var q1 = new Question('Javascript is _________ language.',
    ['Application','Scripting','Programming','NOT'],1);
    var q2= new Question('JavaScript is ______ Side Scripting Language.',
    ['Server','ISP','Browser','NOT'],2);
    var q3= new Question('JavaScript is designed for following purpose -',
    ['To Style html pages','To add interactivity in html pages','NOT','To perform server side scripting Operations'],1
    );

    var questions = [q1,q2,q3];
    
    function score() {
        var sc= 0;
        return function(correct){
            if(correct){
            sc++;
            }
            return sc;
        } 
    }
 
    var keepscore = score();


    function nextQuestion(){
     var n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    var answer = (prompt('Please select the correct answer(type exit to exit)'));
    
     if (answer!=='exit'){
    questions[n].checkAnswer(parseInt(answer),keepscore);
    nextQuestion();
    }

    }
    nextQuestion();
})();
