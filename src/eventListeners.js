import refreshList from "./handleRefresh";
import handleSubmit from "./handleSubmit";

const addListeners = () => {

    const updateButton = document.getElementById("update");
    const submitButton = document.getElementById("submit");

    updateButton.addEventListener('click', () => {
        refreshList();
    });

    submitButton.addEventListener('click', () => {
        handleSubmit();
    });

}

export default addListeners;
