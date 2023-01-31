export const uniqueDates = (tasks) => {
    const unique = []
    tasks.forEach((task) => {
        if (!unique.includes(task.dateFormat)) unique.push(task.dateFormat)
        
    });
    return unique;
};

//la vonstante que recibe arreglo de fechas    
export const orderDates = (dates) => {
    return dates.sort((a, b) => {
        const firsDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(b, "DD/MM/YYYY");
        return firsDate - secondDate;
        /*console.log(a);
        console.log(b);*/
    });

}