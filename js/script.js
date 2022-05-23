$("#date").attr('max', new Date().toISOString().split('T')[0])

// https://api.nasa.gov/planetary/apod?api_key=Lz4FMIyYzMnu6k72C479hHA2DkfJDeaHNKjw7g74
//Lz4FMIyYzMnu6k72C479hHA2DkfJDeaHNKjw7g74

$("#btn").on('click', function() {
    
    var dt = $("#date").val();
    
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=Lz4FMIyYzMnu6k72C479hHA2DkfJDeaHNKjw7g74&date=${dt}`, 
        success: function(response) {
            var name = response.title
            var date = response.date 
            var explanation = response.explanation
            var mediaUrl = response.url
            var mediaType = response.media_type

            $('#picname').html(name)
            $('#date').html(date)
            $('#explanation').html(`<span>Explanation: </span>` +explanation)
            $('h4').html(date)

            // $('#picname').html(mediaType)

            if (mediaType === 'video') {
                $('.media').html(`<iframe width="560" height="315" src="${mediaUrl}" frameborder="0" allow="accelerometer; allowfullscreen=""></iframe>`)
            } else {
                $('.media').html(`<img src="${mediaUrl}">`)
            }

            console.log(nameImg)
            console.log(mediaType)
        }
    })
})