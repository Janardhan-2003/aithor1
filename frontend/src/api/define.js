
const fetchDefinition = async (word) => {
    try {
        const response = await fetch('https://aithor-pedv.onrender.com/api/define', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ word })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error);
        }
        
        return data.definition || 'Definition not available';
        
    } catch (error) {
        console.error('Error fetching definition:', error);
        return 'Unable to fetch definition';
    }
}

export default fetchDefinition