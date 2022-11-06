import API from "../constant";
const relicsService = {
    getInfo() {
        return fetch(`${API}/relics/intro`).then(res => res.json());
    }
};

export default relicsService;