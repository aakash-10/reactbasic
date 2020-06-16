import http from "../http-common";



const getAll = () => {
    return http.get("/getall");
};

const create = data => {
    return http.post("/insert", data);
};

export default {
    getAll,
    create
};