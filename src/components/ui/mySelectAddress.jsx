import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import React, { useState, useEffect } from 'react';

const AddressSelect = React.forwardRef(({ variant, link, change }, ref) => {
    const [selectedOption, setSelectedOption] = useState([]);

    if (link) {
        useEffect(() => {
            fetch(link)
                // console.log(fetch)
                .then(response => response.json())
                .then(data => {
                    setSelectedOption(data);
                })
                .catch(error => {
                    console.error('Error fetching municipalities:', error);
                });
        }, []);
    }

    return (
        <div>
            {/* <label htmlFor="municipality">Select Municipality:</label> */}
            <select
                id={variant}
                className='bg-transparent text-center cursor-pointer h-6 overflow-auto'
                onChange={change}
            >
                <option hidden={true}>Select</option>
                {selectedOption
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((item) => (
                        <option
                            key={item.code}
                            value={item.name}
                            className={"text-center text-black cursor-pointer"}>
                            {item.name}
                        </option>
                    ))}
            </select>
        </div>

    );
})

export default AddressSelect;
