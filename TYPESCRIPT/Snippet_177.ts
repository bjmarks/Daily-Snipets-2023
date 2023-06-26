interface Rectangle {
    height: number,
    width: number
}
interface ColoredRectangle extends Rectangle {
    color: string
}
const redRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};