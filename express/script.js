    $(document).ready(function () {
        $('.w3-round').on({
           mouseover:function() {
               $(this).css({
                   'height':220,
                   'width':220,
               });
           },
            mouseout:function(){
               $(this).css({
                  'height': 150,
                  'width': 150
               });
           }
        });
        $('.w3-wide').css('color', 'darkgreen')
        $(".w3-hover-opacity").on("mouseenter", function () {
            $(this).css("display", "none");
            $(this).fadeTo("fast", 0.1);
            $(this).css("display", "10");
            $(this).fadeTo("fast", 1.0);
        });


    });