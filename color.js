let buttons = document.querySelectorAll(".box")
buttons.forEach(function (box) {
    box.addEventListener('click',function (e){
        if (e.target.id == "grey"){
            document.body.style.background = e.target.id;
            confirm(`are you sure can we change background color to ${e.target.id} `)
            alert(`"background color is changed to" ${e.target.id}` )
        } else if (e.target.id == "yellow"){
            document.body.style.background = e.target.id;
             confirm(`are you sure can we change background color to ${e.target.id} `)
            alert(`"background color is changed to" ${e.target.id}` )
        } else if (e.target.id == "blue"){
            document.body.style.background = e.target.id
             confirm(`are you sure can we change background color to ${e.target.id} `)
            alert(`"background color is changed to" ${e.target.id}` )
        } else if (e.target.id == "white"){
            document.body.style.background = e.target.id
        } else{
            document.body.style.background = e.target.id
        }
    })
    
})
