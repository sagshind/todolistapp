import React, { useState, useEffect } from 'react';

function MyComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/test');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                debugger;
                setData(jsonData.message);
            } catch (error) {
                console.error('Error:', error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Data from API:</h2>
            <ul>
                {data}
            </ul>
        </div>
    );
}

export default MyComponent;
