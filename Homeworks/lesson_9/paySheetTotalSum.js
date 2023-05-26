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
                sum: workedCourier.sum * coefficient
            }
        })
        .reduce((TotalSum, workedCourier) => TotalSum + workedCourier.sum, 0)

    console.log(personalPaySheet);
}
displayPaySheet("Ivan", 2);