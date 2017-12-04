var res=[];

$('#C').click(function(){
  res=[];
  $("#textBox").val("");
});
 
   $("#textBox").val("");
  $(".keys").click(function(e){
   var num= e.target.id;
    $("#textBox").val(num);
   res.push(num);
  });
  
   $(".Op").click(function(e){
    var op=e.target.id;
     res.push(op);
   });
  
  
  $(".equals").click(function(e){
    if(res.length===0) {alert("Please select numbers");}
      console.log(res);
    var m= res.reduce(function(a,b) { 
     return a+b; 
 });
    console.log( eval(m));
  //  eval(m);
     $("#textBox").val( eval(m));
  
    res=[];
  });