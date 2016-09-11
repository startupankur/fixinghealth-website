

    $(document).ready(function($) {
        $(".jumper1").on("click", function(e) {

            e.preventDefault();

            $("body, html").animate({
                scrollTop: $("#landing-page1").offset().top
            }, 600);

        });
    });
    $(document).ready(function($) {
        $(".jumper2").on("click", function(e) {

            e.preventDefault();

            $("body, html").animate({
                scrollTop: $("#landing-page2").offset().top
            }, 600);

        });
    });
    $(document).ready(function($) {
        $(".jumper3").on("click", function(e) {

            e.preventDefault();

            $("body, html").animate({
                scrollTop: $("#landing-page3").offset().top
            }, 600);

        });
    });

    $(function() {
        var hello = ['built', 'revealed', ' conceived'];
        var used = ['conceived'];
        var greeting = $('#what');
        var item;

        function hey() {
            item = hello[Math.floor(Math.random() * hello.length)];
            if (hello.length != used.length) {
                while (jQuery.inArray(item, used) != -1) {
                    item = hello[Math.floor(Math.random() * hello.length)];
                }
                used.push(item);
            } else {
                used.length = 0;
                item = hello[Math.floor(Math.random() * hello.length)];
                used.push(item);
            }
            greeting.html(item);
            greeting.animate({
                "opacity": "1"
            }, 1000);
        }

        window.setInterval(function() {

            greeting.animate({
                "opacity": "0"
            }, 500);
            setTimeout(hey, 500);
        }, 1800);

    });

/*function validateemail()  
{  
  var name=document.myform.name.value;  
  if (name==null || name==""){  
   $('.alert-name').text('Please enter your name');
  return false; 
}
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  $('.alert-email').text('Please enter correct email');
  return false;  
  }  
};  
*/
(function($) {
  window.fnames = new Array(); 
  window.ftypes = new Array();
  fnames[1]='NAME';
  ftypes[1]='text';
  fnames[0]='EMAIL';
  ftypes[0]='email';
}
(jQuery));var $mcj = jQuery.noConflict(true);



function myFunction() {
    document.getElementById('mce-NAME').value = "";
}
function myFunction1() {
    document.getElementById('mce-EMAIL').value = "";
}