$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
        fname:{
            required:true,
            minlength:4
        },
        sname:{
            required:true,
            minlength:4
        },
        emailAddress:{
            required:true,
            email:true

        },
        password_validation:{
            required: true
            
        },
        confirm_password:{
            required: true,
            equalTo:"#password_validation"
        },
        day:{
            required:true
        },
        month:{
            required:true
        },
        year:{
            required:true
        },
        gender:{
            required:true
            
        }
    },
    messages:{
        
        confirm_password:{
            equalTo:"Password not matching."
        }
    }
    
    })
     
    $('#password_validation').on('focus',function(){
        $('.password_required').slideDown();
    })>>
    $('#password_validation').on('blur',function(){
        $('.password_required').slideUp();
    })
    
    $('#password_validation').on('keyup',function(){
        passValue = $(this).val();

        if(passValue.match(/[a-z]/g)){
            $('.Lowercase').addClass('active');
        }else{
            $('.lowercase').removeClass('active');
        }

        if(passValue.match(/[A-Z]/g)){
            $('.upperCase').addClass('active');
        }else{
            $('.upperCase').removeClass('active');
        }

        if(passValue.match(/[0-9]/g)){
            $('.Number').addClass('active');
        }else{
            $('.Number').removeClass('active');
        }

        if(passValue.match(/[~!@#$%^&*]/g)){
            $('.Special').addClass('active');
        }else{
            $('.Special').removeClass('active');
        }

        if(passValue.length == 8||passValue.length >8){
            $('.Least').addClass('active');
        }else{
            $('.Least').removeClass('active');
        }
    })

})