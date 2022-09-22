"use strict"


$(document).ready(function(){
     let weight = $('#kg');
     let feet = $('#feet');
     let years = $('#years');

     $("button").on("click", function(){
          let gender = $(".main_wrapper .inputs .gender select").val();
          
          if(weight.val() !== "" && feet.val() !== "" && years.val() !== ""){
               let feet_to_cm = feet.val() * 30.48;
               let BMR;
                
               if(gender === "Male"){
                    BMR = 66 + (13.7 * weight.val()) + (5 * feet_to_cm) - (6.8 * years.val());
               }else{
                    BMR = 655 + (9.6 * weight.val()) + (1.8 * feet_to_cm) - (4.7 * years.val());
               }

               swal(`Your BMR is: ${Math.floor(BMR)} Calorie/day`);
               weight.val('');
               feet.val('');
               years.val('');

          }else{
               alert("Please fill all the feilds")
          }
     })
})