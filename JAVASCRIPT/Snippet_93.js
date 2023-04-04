class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    getMake() {
        return {make : this.make};
    }
    getModel() {
        return {model : this.model};
    }
    driveForward() {
        console.log("Driving Car forwards");
    }
    driveBackward(){
        console.log("Driving Car backwards");
    }
    brake() {
        console.log("Braking Car");
    }
}
export default Car;