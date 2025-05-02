

/**
 * 
 * Calculator Backend logic code
 * written by Fatherly P. Titus© 2024
 * 
 * */
 
 var digits = [0,1,2,3,4,5,6,7,8,9];
 var opr_chars = ["*","+","-","/","^"]

  var calc_btns = document.getElementsByClassName("calc-btn")

   var in_text = "", in_value = 0, last_char = "";
   

  $(document).ready(()=>{
    
    getElem("btn-clear").addEventListener("click", function(){
      getElem("value-input").innerText = "";
      getElem("value-output").innerText = "0";
      in_text = ""
    });
 
  
    for(i = 0; i < calc_btns.length; i++){
      btn = calc_btns[i];
      
      
      btn.addEventListener("click", function(){
        
        in_text = getElem("value-input").innerText;
        value = this.getAttribute("data-value");
        
        
        if(value == "del"){
          in_text = in_text.substr(0,in_text.length-1);
          getElem("value-input").innerText = in_text;
        }
        else if(value == "="){
          answer = calculate(in_text);
          
          getElem("value-output").innerText = answer;
        }
        else if(!digits.includes(parseInt(value))){
          //make sure last chsr is not an operator
          if(!opr_chars.includes(last_char)){
            in_text += value;
            last_char = value;
            getElem("value-input").innerText = in_text;
          }
        }
        //as digits get inputed, parse the digit string to integer
        else{
          in_text += value;
          last_char = value;
          getElem("value-input").innerText = in_text;
          //carry out computation based on opr
          }
      });
    }
    
  });

function calculate(str){
  console.log(str)
  var digits = [0,1,2,3,4,5,6,7,8,9];
  var opr_chars = ["*","+","-","/","^"]
  
  str_arr = str.split("") 
  var fd = 0;
  var opr
  var digit = ""
  
  for(i = 0; i <str_arr.length; i++){
    
    last_char = str_arr[i]
    //console.log(last_char);
    
    if(digits.includes(parseInt(last_char))){
      digit += last_char; 
      
      console.log("opr: "+opr)
      switch(opr){
       case "+" :
        fd = fd + parseInt(digit); 
        digit = ""+fd
        break;
       case "-" : 
        fd = fd - parseInt(digit); 
        digit = ""+fd
        break;
       case "*" : 
        fd = fd * parseInt(digit); 
        digit = ""+fd
        break;
        case "/" : 
        fd = fd / parseInt(digit); 
        digit = ""+fd
        break;
        case "^" : 
        fd = fd ** parseInt(digit); 
        digit = ""+fd
        break;
    }
    }
    if(opr_chars.includes(last_char)){
      opr = last_char 
      fd = parseInt(digit);
      digit = ""
      console.log("FD: "+fd)
    }
    
    
  }
    console.log("FD: "+fd)
       return fd
}
//////////////////////////////////////////////////////////////////////
//Functions to handle copying of text to clipboard(tested and working)
function handleCopy(id) {
  const area = getElem(id)
  area.select();
  document.execCommand('copy')
}

function triggerCopy(id) {
  const element = getElem(id);
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
}




