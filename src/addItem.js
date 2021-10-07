import { addScore } from "./handleAPI";

const addItem = () => {
    const score = document.getElementById('score');
    const user = document.getElementById('user');

    addScore(score.value, user.value);
}

export default addItem;