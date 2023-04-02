function pow(x: number, y:number): string {
    return Math.pow(x,y).toString();
}
const arrn: string[] = [];
arrn.push(pow(1,3));
arrn.push(pow(2,3));
arrn.push(pow(3,3));
arrn.push(pow(4,3));
arrn.push(pow(5,3));
arrn.push(pow(6,3));
console.log(arrn);

