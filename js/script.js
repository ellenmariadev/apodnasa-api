$("#date").attr("max", new Date().toISOString().split("T")[0])
$("#date").attr("min", new Date("1995-06-16").toISOString().split("T")[0])

$(document).ready(function() {
    $("#btn").click(function() {
        getApi();
    })
})

 function getApi() {
    
    var dt = $("#date").val();
    
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=Lz4FMIyYzMnu6k72C479hHA2DkfJDeaHNKjw7g74&date=${dt}`, 
        success: function(response) {
            var name = response.title
            var date = response.date 
            var explanation = response.explanation
            var mediaUrl = response.url
            var mediaType = response.media_type

            $("#name").html(name)
            $("#date").html(date)
            $("#explanation").html(`<span>EXPLANATION: </span>` + explanation)
            $("h4").html(date)

            if (mediaType === "video") {
                $(".media").html(`<iframe width="560" height="315" src="${mediaUrl}" frameborder="0"  allowfullscreen=""></iframe>`)
            } else {
                $(".media").html(`<img src="${mediaUrl}">`)
            }
        }
    })
}

getApi();