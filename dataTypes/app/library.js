'use strict'

module.exports = {
 
 dataTypes: function(input_arg) {
   if(typeof input_arg==='string'){
	   return input_arg.length;
   }else if(input_arg==undefined || input_arg==null){
       return 'no value';
   }else if(typeof input_arg==='boolean'){
       return input_arg;
   }else if(typeof input_arg==='number'){
       if(input_arg<100){
       	return "less than 100";
       }else if(input_arg===100){
       	return "equal to 100";
       }else{
       	return "more than 100";
       }
   }else if(Array.isArray(input_arg)){
       if(input_arg.length<3){
       	return undefined;
       }else{
       	return input_arg[2];
       }
   }else if(typeof input_arg==='function'){
   	   input_arg(true);
       return 'called callback';
   }
 }
}