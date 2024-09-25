class RailwayForm{
    submit(){
        alert(this.name + ": Your form is Submitted for train number: " + this.trainno)
    }
    cancel(){
        alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    }
    fill(givenname, trainno){
        this.name = givenname
        this.trainno = trainno
    }
}

//Create a form for deepak
let deepakForm = new RailwayForm()
//Fill the form with deepak's details
deepakForm.fill("Deepak", 232323)

let rohanForm = new RailwayForm()
rohanForm.fill("Rohan", 121212)

deepakForm.submit()
rohanForm.submit()
rohanForm.cancel()