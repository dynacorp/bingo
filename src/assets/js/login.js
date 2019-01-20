$(document).ready(function(){
    $('#signIn').on('click', function(e){
        e.preventDefault();
        $.loadingBlockShow({
            imgPath: 'images/load.gif',
			text: 'Loading ...',
            style: {
                position: 'fixed',
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, .8)',
                left: 0,
                top: 0,
                zIndex: 10000
            }
        });

        var email = $('#email').val();
        var password = $('#password').val();
        var url = config.root+"admin/login";
        
        var data = 
            '{"data":{'+
                '"username":"'+email+'",'+
                '"password":"'+password+'"'+
            '}}'
        console.log("Email: "+ email +" Password: "+ password+" Data "+data);
        $.ajax({
            url:url,
            type:"POST",
            data:data,
            contentType:"application/json; charset=utf-8",
            dataType:"json",
            success: function(mdata){
                if(mdata.error.status== 0){
                    localStorage.setItem("loginData", JSON.stringify(mdata.content.data[0]));
                    window.location.href = "index.html";
                }else{
                    $("#message").text(mdata.error.message);
                   //console.log(data);
                    //console.log(mdata);
                    $.loadingBlockHide();
                   // window.location.href = "page-login.html"
                }
                //localStorage.setItem("loginData", mdata);
              //console.log(mdata.content.data[0].fullname);
            }
          })
    })
});