import axios from "axios";

export default {
    search: function () {
        return axios.get("https://randomuser.me/api/?results=50&inc=gender,name,email,picture,phone,dob");
    }
}