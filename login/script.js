// function valid(e){
    // e.preventDefault();
//      unm=document.getElementById("uname").value;
//      pswd=document.getElementById("psd").value
//     if(unm=="arif"&&pswd=="12345" ){
//        return 
     
//     }
//     else if(unm=="" && pswd == "") {
//         e.preventDefault();
  
//         alert("Error:please enter user name and password")
//         return
        
//     }
//     else if(unm!="" && pswd == "") {
//         e.preventDefault();
  
//         alert("Error:please enter  password")
//         return
        
//     }
//     else if(unm=="" && pswd !== "") {
//         e.preventDefault();
  
//         alert("Error:please enter user name")
//         return
        
//     }
//     else{
//         e.preventDefault();
  
//         alert("Error:either user name or password")
//         return
        
//     }
// }



    let sbmt=document.getElementById("sbmt")
    
    let unm=document.getElementById("uname").value;
    let psd=document.getElementById("psd").value
   
    if(psd.length<2){
        console.log(sbmt)
        e.preventDefault();
        console.log(sbmt)
        // e.preventDefault();
        // alert("increse length of password")
        console.log(sbmt)
    }
    else{
        e.preventDefault();
        for(var i=0; i<psd.length;i++){
           var ch=psd.charAt(i)
           if(!isNaN(ch*1)){
          var  number=1
            console.log("no.found")
           }
           else if( ch===ch.toUpperCase() && ch!='@'&& ch!='/'&& ch!='!'&& ch!='$'&& ch!='#'&& ch!='%'&& ch!='*'){
            // e.preventDefault();
              var uppercase=1
               console.log("upper case found")
              
            }
            else if( ch===ch.toLowerCase() && ch!='@'&& ch!='/'&& ch!='!'&& ch!='$'&& ch!='#'&& ch!='%'&& ch!='*'){
               
                var lowercase=1
                console.log("lower case found")
               
            }
            else {
                
                var  spl=1
                console.log("spl case found")
            }
        }
    }
    sbmt.addEventListener("click",(e)=>{
        e.preventDefault()
        if((lowercase && uppercase&& number&& spl  && psd =="Arif@123") ==false){
            e.preventDefault()
            console.log("every thing found correctly")
            // sbmt.removeEventListener("click", valid);
        }
    

    })
    


