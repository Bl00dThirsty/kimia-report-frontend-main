const BASE_URL = "http://185.193.17.106:8000"

const apiUrl = {
    AUTH_SERVICE: `${BASE_URL}/api/v1/auth`, 
    PERSON_SERVICE: `${BASE_URL}/api/v1/persons`,
    USER_SERVICE: `${BASE_URL}/api/v1/users`,
}

const environment  = { apiUrl }

export default environment 