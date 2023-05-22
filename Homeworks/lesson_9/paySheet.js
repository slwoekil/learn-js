function displayPaySheet(courier, coefficient){
    const globalPaySheet = [
        { name: 'Ivan', date: '22.05.2022', sum: 100 },
        { name: 'Oleg', date: '22.05.2022', sum: 200 },
        { name: 'Petr', date: '23.05.2022', sum: 300 },
        { name: 'Ivan', date: '23.05.2022', sum: 400 },
        { name: 'Vlad', date: '23.05.2022', sum: 500 }
    ];

    const personalPaySheet = globalPaySheet
        .filter(workedCourier => workedCourier.name === courier)
        .map(workedCourier => {
            return {
                date: workedCourier.date,
                sum: workedCourier.sum * coefficient
            }
        })
    console.log(personalPaySheet);
}
displayPaySheet("Ivan", 2);