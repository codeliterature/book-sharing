import { dataStore } from "../stores/dataStore";

export async function load({fetch}) {
    const response = await fetch("http://localhost:5000/api/v1/books/allbooks");
    const data = await response.json()
    dataStore.set(data);
    return { data };
}