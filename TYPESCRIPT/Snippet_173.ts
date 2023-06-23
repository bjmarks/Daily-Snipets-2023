interface Square {
    kind: 'square';
    size: number;
}
interface Rectanagle {
    kind: 'rectangle';
    width: number;
    height: number;
}
type Shape = Square | Rectanagle;
function area(s: Shape) {
    if (s.kind === 'square') {
        return s.size * s.size;
    }
    else if (s.kind === 'rectangle') {
        return s.width * s.height;
    }

    const _ensurALLCasesAreHandled: never = s;
}