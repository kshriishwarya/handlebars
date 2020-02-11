
Handlebars.registerPartial("user","{{first_name}}");

var context={
users:[{first_name:"Raju",last_name:"kumar",phone:"9486794858"},{first_name:"Subash",last_name:"kumar",phone:"9486794858"}]

}
var rawTemplate=$('#watchTemplate').html()

var compiledTemplate = Handlebars.compile(rawTemplate);
var ourGeneratedHTML = compiledTemplate(context);
$('#content-holder').html(ourGeneratedHTML)

