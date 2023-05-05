const pasword=document.getElementById("myinput");
const yeni=document.getElementById("nil");
function showhide(){
    if(pasword.type==='password'){
        pasword.setAttribute('type','text');
        yeni.classList.add('hide')
        yeni.classList.remove('hide')

    }
    else{
        pasword.setAttribute('type','password')
        yeni.classList.remove('hide')
        
    
    
    
    }}
        