

    // var data = {
    //  users : [{first_name:"Raj",last_name:"Kumar",phone:"9486794858",email:"shriandshri1999@gmail.com"},
    //      {first_name:"Raj",last_name:"Kumar",phone:"9486794858",email:"shriandshri1999@gmail.com"}
    
    // ]


    // }
    
    
    
      
    //   //handlebar template html
      
    //  //var template=document.getElementById('template1').innerHTML;
    //  var template = document.getElementById("template1").innerHTML;
    //  //console.log(template)
      
    //   //handlebar's compile method returns special function which can be used to get final html
    //   var compiledCode = Handlebars.compile(template);
      
    //  // json data is passed top compiled code and result will be html
    //   var result = compiledCode(data);
      
    //  // compiled html can be rendered in document
    //   $("#content").html(result);
      
      //document.getElementById('content').innerHTML=result;
      Handlebars.registerPartial("user", "<h6>first_name:{{first_name}}  last_name:{{last_name}}  phone:{{phone}}  email:{{email}}<h6>" )
       
    var data = {
        users : [{first_name:"Raj",last_name:"Kiran",phone:"9486794858",email:"shriandshri1999@gmail.com"},
            {first_name:"Selva",last_name:"Kumar",phone:"9486794238",email:"kshrishri1985@gmail.com"}]
       
       
   
   
       }
       
         
         //handlebar template html
         
        //var template=document.getElementById('template1').innerHTML;
        var template = document.getElementById("template1").innerHTML;
        //console.log(template)
         
         //handlebar's compile method returns special function which can be used to get final html
         var compiledCode = Handlebars.compile(template);
         
        // json data is passed top compiled code and result will be html
         var result = compiledCode(data);
         
       
         document.getElementById('content').innerHTML=result;
    
