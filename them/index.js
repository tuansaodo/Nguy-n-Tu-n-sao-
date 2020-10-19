$(document).ready(function(){
    $("ul.list-menu-2 li a").click(function(){
      $(this).closest('li').find(".menu-detail").toggleClass('active')
    });
  });