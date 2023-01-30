//estamos creando la estrcutura de HTML para implementarla o agregarla al DOM
export default (date) => {
    const dateElement = document.createElement("Li")
    dateElement.classList.add("date");
    dateElement.innerHTML = date;
    return dateElement;
};