class Car {
    constructor(
        private make: string = "New",
        private model: string = "Car",
        public year: number = 2023,
        public color: string = "White"
        ) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    public getMake() {
        return {make : this.make};
    }
    public getModel() {
        return {model : this.model};
    }
    driveForward() {
        console.log(`Driving ${this.model} forwards`);
    }
    driveBackward(){
        console.log(`Driving ${this.model} backwards`);
    }
    brake() {
        console.log(`Braking ${this.model}`);
    }
}
export default Car;