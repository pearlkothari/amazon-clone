import axios  from "axios";

const instance =axios.create({
    baseUrl:'http://localhost:5001/clone-8646f/us-central1/api' 
    // The Api cloud function URL
});

export default instance;