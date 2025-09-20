// @FXML private  TextArea t5,t1;
	
	
// 	private static final Map<Character, String> MO= new HashMap<>();
	
// 	static {
// 		MO.put('W', "UP");
// 		MO.put('A',"LEFT");
// 		MO.put('S', "DOWN");
// 		MO.put('D',"RIGHT");
// 		MO.put('I', "UP"    );   //*7
// 		MO.put('J',"LEFT"  );
// 		MO.put('K', "DOWN");
// 		MO.put('L',"RIGHT");
// 		MO.put('8', "UP");
// 		MO.put('4',"LEFT");
// 		MO.put('6', "RIGHT");
// 		MO.put('2',"DOWN");
// 		    /*-+7**/
// 	}  //*7 ? “œ	>? //*a7}S/faystem.out.print(Map);
	
// 	public static   String  texctomn(String text){
		
// 		try {StringBuilder out = new StringBuilder();
// 		String upper  =  text.toUpperCase();
		
// 	     boolean ftoken  =   true;
// 	           for(int i = 0; i<text.length();  i++) {
// 	        	      char ch =   upper.charAt(i); /*7**/System.out.print(ch);
	        	      
// 	        	      if(   ch  == ' ') {
// 	        	    	     out.append("   ");
// 	        	    	       ftoken= true;
// 	        	    	            continue;
// 	        	      }
// 	        	          String codf=  MO.get(ch);
// 	        	            if( codf!=  null)  {
	        	            	
	        	            	
	        	            	
// 	        	            	   if(!ftoken  ) out.append(' ');/*+741-*7**/
// 	        	            	   out.append(codf);
// 	        	            	      ftoken =  false;
// 	        	            }
// 	        	            }
// 	           return out.toString();//}
// 		}catch(Exception e) {
			
			
// 			System.out.print(e);return "Error";
// 		}

// Map<CharacterData, String>=? MO;//= new HashMap<>();

// MO.put('W', "UP");
//  		MO.put('A',"LEFT");
//  		MO.put('S', "DOWN");
//  		MO.put('D',"RIGHT");
//  		MO.put('I', "UP"    );   //*7
//  		MO.put('J',"LEFT"  );
//  		MO.put('K', "DOWN");
// /*---*/		MO.put('L',"RIGHT");
//  		MO.put('8', "UP");
// 		   MO.put('4',"LEFT");
//  		MO.put('6', "RIGHT");
//  		MO.put('2',"DOWN");
//         console.log(MO)




  const MO= {'W': "UP"  /*-+7**/,
  'A':   "LEFT",
    'S':   "DOWN"    ,/*7--p *7kl**/
 /*--*/'D':"RIGHT"

}
console.log(       MO)  ;

//*7 ,vb?c      S/tring text   = t1.gettex

// for(int i=0; i<text.length();  i++) {
//     	        	      char ch =   upper.charAt(i); /*7**/System.out.print(ch);
                          
//     	        	      if(   ch  == ' ') {
//     	        	    	     out.append("   ");
//     	        	    	       ftoken= true;
//     	        	    	            continue;
//     	        	      }
//     	        	          String codf=  MO.get(ch);
//     	        	            if( codf!=  null)  {
                                    
                                    
                                    
//     	        	            	   if(!ftoken  ) out.append(' ');/*+741-*7**/
//     	        	            	   out.append(codf);
//     	        	            	      ftoken =  false;
//     	        	            }
//     	        	            }
//     	           return out.toString();
const injf = document.getElementById("t1").value
function texctomn(){

    //*7value.toUppercase() ;//*.nodeValue.getElementById("t1")
    //*-7console.log(  injf)

    //boolean fttoken;
	          /*-7**/// for(int i; i<injf.length()  i++) {
	        	      
	        	      
	        	      let ch  = "";
                  for(let char of injf){
                    if(MO[char])  {

                        ch+=  MO[char] /*-- +7 ***/+"  ";
                    }
                  }    document.getElementById("t5"  ).value=    ch.trim(	);
				  console.log(  document.getElementById("t5"  ).value)
	        	    	//      out.append("   ");
	        	    	//        ftoken= true;
	        	    	//             continue;
	        	      // }
	        	      //     string codf=  MO.get(ch);
	        	      //       if( codf!=  null)  {
	        	            	
	        	            	
	        	            	
	        	      //       	   if(!ftoken  ) out.append(' ');/*+741-*7**/
	        	      //       	   out.append(codf);
	        	      //       	      //ftoken =  false;
	        	      //       }
	        	            }
	           //*7Xreturn out.toString();//}
		//}
    
//*7 >/v ccS}
const	 tbv   =       document.getElementById("t5").value    .trim()  ;/*-fal pcigjsp ok **-+87 ***/   /*--97
*-+7  984  *- **/
function ttot() {
	console  .log(tbv);  //*7 fopaio  oskll  )
}
     const move1= document.getElementById("move1")
/*7faconst	 tbv   =       document.getElementById("t5").trim()  .value    ;/*-fal pcigjsp ok **-+87 ***/   /*--97
 *///7
const Mva= 20;

let      x=  0;

let y   =0   ;

document.addEventListener   ("keydown",  event   =>
{

	if (event.key.startsWith("Arrow")) {
		switch(event.key){
			case  "ArrowUp"  :


			y-=Mva
			 console.log("? /")
			      //*7 ?“”‘°/-7/tbv.setAttribute(y)
			break;


			case  "ArrowDown"  :
			y+=Mva;    console.log("? /")
			break;



			  case  "ArrowLeft"        :
			x-=Mva




			console.log("? /")
			break;


			case  "ArrowRight"  :
			x  +=Mva;   /**7 **/// */
			      console.log("? /")
			break;



			case  "ArrowUp" &&   "ArrowRight":

			x  +=Mva;   /**7 **/// */
			y-=Mva
			 console.log(    "? /")
			      //*7 ?“”‘°/-7/tbv.setAttribute(y)
			break;


			case  "ArrowDown"  &&   "ArrowRight"     :
			y+=Mva;    console.log("? /")


			x    +=     Mva;
			break      ;



			  case  "ArrowDown"  &&  "ArrowLeft"        :
			x-=Mva;    x    -=     Mva;//   ;  //*/-7\' ???




			console.log("? /")
			break;


			case  "ArrowDown"  &&   "ArrowRight"    :
			x  +=Mva;   /**7 **///     /
			      console.log("? /");     y+=Mva;    console.log("? /")

			break;


			// altd*-/*------98

			default: window.alert(1)
		}

		move1.style.top=  `${y}px`;/*---*//*7 ?‘/f*a7 7894 **/   move1.style.left=  `${x}px`
	}
});  //*-fa7 ?‘“”§m1095654  mnzdzSzdCSEWWQAWSasfigft beklow ads acz abovc lorevcmm, 