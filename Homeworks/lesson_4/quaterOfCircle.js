
function quaterOfCircle(degree) {
    const circle = 360;
    const quater = ((degree / circle + 1) % 1);

    if (quater > 0 && quater < 0.25) {
        return "I";
    } else if (quater > 0.25 && quater < 0.5) {
        return "II";
    } else if (quater > 0.5 && quater < 0.75) {
        return "III";
    } else if (quater > 0.75 && quater < 1) {
        return "IV";
    } else if (quater === 0.25) {
        return "Граница I/II";
    } else if (quater === 0.5) {
        return "Граница II/III";
    } else if (quater === 0.75) {
        return "Граница III/IV";
    } else return "Граница I/IV"
}