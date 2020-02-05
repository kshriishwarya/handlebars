//Create your Partial 'user' here with html markup for displaying first_name, last_name, phone and email.
Handlebars.registerPartial("user", "{{first_name}} {{last_name}} {{phone}} {{email}}" )


//Create your context with users array with first_name, last_name, phone and email.
var context={
     users : [{first_name:"Raj",last_name:"Kiran",phone:"9486794858",email:"shriandshri1999@gmail.com"},
            {first_name:"Selva",last_name:"Kumar",phone:"9486794238",email:"kshrishri1985@gmail.com"}]
  };

window.onload = function(){
  // Your code here

    //retrieving the template `handlebars-template` from the HTML
    var theTemplateScript = document.getElementById("handlebars-template").innerHTML;

    //Compile the template using Handlebars.compile()
    var theTemplate = Handlebars.compile(theTemplateScript);

    //Pass the context as an argument to the compiled Template
    var theCompiledHtml = theTemplate(context);

    //insert the template-context package into '#content-placeholder'
    document.getElementById('content-placeholder').innerHTML=theCompiledHtml

};
