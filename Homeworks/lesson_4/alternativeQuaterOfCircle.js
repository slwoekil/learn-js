function quaterOfCircle(degree) {
    let quater = degree % 360;

    if (quater < 0) {
        quater += 360;
    }

    if (quater === 0) {
        return "Граница I/IV"
    } else if (quater < 90) {
        return "I";
    } else if (quater === 90) {
        return "Граница I/II";
    } else if (quater < 180) {
        return "II";
    } else if (quater === 180) {
        return "Граница II/III";
    } else if (quater < 270) {
        return "III";
    } else if (quater === 270) {
        return "Граница III/IV";
    } else return "IV";
}