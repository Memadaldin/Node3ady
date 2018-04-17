$.ajax('/api/users',{
accepts: 'application/json',
success: function(data, status){
    var body = $('body');
    data.forEach((user)=>{
        var elem = '<div>'+ user.userName+'- '+ user.age +'</div>'
        body.append(elem);
        })
debugger;
},
error: function(ajax, status, err){
    debugger;
}
});

$('#submitBtn').on('click', function(e){
    var username = $('input[name="username"]').val();
    var age = $('input[name="age"]').val();
    debugger;
    console.log(JSON.stringify({
        userName: username,
        age: age

    }))
    $.ajax('/api/users/getData',{
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            userName: username,
            age: age

        }),
        success: function(data, status){
            debugger;
       
        },
        error: function(ajax, status, err){
            debugger;
            
        }
        });
})