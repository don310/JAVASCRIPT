class RailwayForm{
    constructor(givenname, trainno){
        console.log("CONSTRUCTOR CALLED......" + givenname + " " + trainno)
        this.name = givenname
        this.trainno = trainno
    }
    submit(){
        alert(this.name + " : Your form is Submitted for train number: " + this.trainno)
    }
    cancel(){
        alert(this.name + " : This form is cancelled for train number: " + this.trainno)
    }
}

let deepakForm = new RailwayForm("Deepak", 2224546)
//Create a form for deepak
let rohanForm = new RailwayForm("Rohan", 121212)

deepakForm.submit() 
rohanForm.submit()
rohanForm.cancel()


