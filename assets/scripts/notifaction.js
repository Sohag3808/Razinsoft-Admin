
$(function () {


    toastr.options.onclick = function(e) {alert(this.data.Message); }
    
        $('#success').click(function () {
            // make it not dissappear
            toastr.options = {
                "positionClass": "toast-top-left",
              }
            toastr["success"]("Lorem Ipsum is simply dummy text of industry. ", "Default")
        });
        $('#info').click(function () {
               // title is optional               
               toastr.options = {
                "positionClass": "toast-bottom-left",
              }
              toastr["info"]("Lorem Ipsum is simply dummy text of industry. ", "Info")
        });
        $('#warning').click(function () {
            toastr.warning("Warning");
        });
        $('#').click(function () {
            toastr.success("YYEESSSSSSS");
        });
    });