
import axios from 'axios'
const URL = 'https://expressmobileapp-e798f-default-rtdb.firebaseio.com';
const collectionName = 'expenses'
export function postRequest(data) {
    axios.post(URL + '/expenses.json',
        data
    )


}
export async function getRequest() {

     const response = await axios.get(`${URL}/${collectionName}.json`)
    return response.data


}
export async function deleteRequest({ id }) {
    console.log('Deleting id:', id);

     const response = await axios.delete(`${URL}/expenses/${id}.json`);

    console.log('Deleted:', response.status); // Optional
}
