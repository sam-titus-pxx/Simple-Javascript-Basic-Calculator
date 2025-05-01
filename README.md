# T.I.F.P CALCULATOR BY FATHERLY P. TITUS
______________________

## Basic Operations Calculator

#### This calculator was created using HTML / CSS for the frontend layout and styling; Javascript ECMA-5 for the backend logic computation.

## Operations Capable:
> ** Addition  
> ** Subtraction  
> ** Multiplication  
> ** Division  
> ** Exponential  


### *** The methpd order of calculation is in linear sequence from left to right and does not perform computation in BODMAS specification


>
> ** Code Snippet
>
> btn.addEventListener("click", function(){ 
>       
>        in_text = getElem("value-input").innerText;
>        value = this.getAttribute("data-value");
>        
>        
>        if(value == "del"){
>          in_text = in_text.substr(0,in_text.length-1);
>          getElem("value-input").innerText = in_text;
>        }
>        else if(value == "="){
>          answer = calculate(in_text);
>          
>          getElem("value-output").innerText = answer;
>        }
>        else if(!digits.includes(parseInt(value))){
>          //make sure last chsr is not an operator
>          if(!opr_chars.includes(last_char)){
>            in_text += value;
>            last_char = value;
>            getElem("value-input").innerText = in_text;
>         }
>        }
>
