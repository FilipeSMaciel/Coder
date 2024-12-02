export async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export function extractObject(data, key) {
    for (const item of data) {
        if (item[key]) {
            return item[key];
        }
    }
    return [];
}