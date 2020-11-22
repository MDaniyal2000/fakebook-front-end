window.onload = function() {
    //Login form
    $('#showToggle').on("click", function(e){
        e.preventDefault();
        if($('#passInput').attr("type") == "text")
        {
            $('#passInput').attr('type','password');
            $('#showToggle i').removeClass('fa-eye');
            $('#showToggle i').addClass('fa-eye-slash');
        }
        else{
            $('#passInput').attr('type','text');
            $('#showToggle i').addClass('fa-eye');
            $('#showToggle i').removeClass('fa-eye-slash');
        }
    })

    //Registeration form
    $('#showToggle1').on("click", function(e){
        e.preventDefault();
        if($('#pass1Input').attr("type") == "text")
        {
            $('#pass1Input').attr('type','password');
            $('#showToggle1 i').removeClass('fa-eye');
            $('#showToggle1 i').addClass('fa-eye-slash');
        }
        else{
            $('#pass1Input').attr('type','text');
            $('#showToggle1 i').addClass('fa-eye');
            $('#showToggle1 i').removeClass('fa-eye-slash');
        }
    })

    $('#showToggle2').on("click", function(e){
        e.preventDefault();
        if($('#pass2Input').attr("type") == "text")
        {
            $('#pass2Input').attr('type','password');
            $('#showToggle2 i').removeClass('fa-eye');
            $('#showToggle2 i').addClass('fa-eye-slash');
        }
        else{
            $('#pass2Input').attr('type','text');
            $('#showToggle2 i').addClass('fa-eye');
            $('#showToggle2 i').removeClass('fa-eye-slash');
        }
    })

    $( function() {
        $( "#datepicker" ).datepicker(
            {
                changeMonth: true,
                changeYear: true,
                maxDate: new Date("2002-12-31")
            }
        );
    } );
}

//Registeration Form Validation
$('#registerSubmit').on('click', function(e){
    e.preventDefault();
    first_name = $('#firstName').val();
    last_name = $('#lastName').val();
    email = $('#emailInput').val();
    pass1 = $('#pass1Input').val();
    pass2 = $('#pass2Input').val();
    gender = $("input[name='gender']:checked").val();
    dob = $('#datepicker').val();

    if(first_name == '')
    {
        $('#firstName').addClass('is-invalid');
    }
    else{
        $('#firstName').removeClass('is-invalid');
    }
    if(last_name == '')
    {
        $('#lastName').addClass('is-invalid');
    }
    else{
        $('#lastName').removeClass('is-invalid');
    }
    if(email == '')
    {
        $('#emailInput').addClass('is-invalid');
    }
    else{
        $('#emailInput').removeClass('is-invalid');
    }
    if(pass1 == '')
    {
        $('#pass1Input').addClass('is-invalid');
    }
    else{
        $('#pass1Input').removeClass('is-invalid');
    }
    if(pass2 == '')
    {
        $('#pass2Input').addClass('is-invalid');
    }
    else{
        $('#pass2Input').removeClass('is-invalid');
    }
    if(!gender)
    {
        $('#genderHidden').addClass('is-invalid');
    }
    else{
        $('#genderHidden').removeClass('is-invalid');
    }
    if(dob == '')
    {
        $('#datepicker').addClass('is-invalid');
    }
    else{
        $('#datepicker').removeClass('is-invalid');
    }

    if ( first_name && last_name && email && pass1 && pass2 && gender && dob )
    {
        if( pass1 != pass2)
        {
            $('#errorMessage').removeClass('d-none');
        }
        else{
            window.location.href = '/index.html'
        }
    }
})

//Login Form Validation
$('#loginSubmit').on('click',function(e){
    e.preventDefault();
    if( $('.login_form #emailInput').val() == ''){
        $('.login_form #emailInput').addClass('is-invalid');
    }
    else{
        $('.login_form #emailInput').removeClass('is-invalid');
    }
    if( $('.login_form #passInput').val() == ''){
        $('.login_form #passInput').addClass('is-invalid');
    }
    else{
        $('.login_form #passInput').removeClass('is-invalid');
    }
    if ( ( $('.login_form #emailInput').val() != '') && ($('.login_form #passInput').val() != ''))
    {
        let email = $('.login_form #emailInput').val()
        let password = $('.login_form #passInput').val()
        if (email == "amdaniyal2000@gmail.com" && password == "9815")
        {
            window.location.href = './index.html';
        }
        else{
            $('#errorMessage').removeClass('d-none');
            $('.login_form #emailInput').val('')
            $('.login_form #passInput').val('');
        }
    }
})
