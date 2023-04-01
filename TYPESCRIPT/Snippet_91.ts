type Status = "ADMIN" | "USER" | "GUEST"
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    isActive: boolean;
    status: Status;

}
let bjmarks13: Person = {
    firstName: "Benjamin",
    lastName: "Marks",
    age: 26,
    isActive: true,
    status: "ADMIN"
}
console.log(bjmarks13);