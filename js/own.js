/*

  This function does the toggle for obscuring password

*/

$(".toggle-password").click(function() {																																																																				

  $(this).toggleClass("fa-eye fa-eye-slash");
  
  let input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") 
  {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});