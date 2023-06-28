const car1: { type: string, mileage: number } = { // Returns Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
    type: "Toyota",
};
car1.mileage = 2000;
const car2: { type: string, mileage?: number } = { // Returns no error because of optional property
    type: "Toyota"
};
car2.mileage = 2000;