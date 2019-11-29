export const ApiMethod = Object.freeze({
    GET: 'GET',
    POST: 'POST',
});

class Api {
    static async makeRequest(url, method = ApiMethod.GET) {
        console.log('method:', method, 'url:', url);
        try {
            const response = await fetch(url);
            const responseJson = await response.json();

            return responseJson;
        } catch (error) {
            throw error;
        }
    }
}

export default Api;
