import { useState } from 'react';

const NameList = () => {
    const [list, setList] = useState(["Jack", "Jill", "John"]);
    const [name, setName] = useState(() => "Jack");

    const onAddName = () => {
        setList([...list,name]);
        setName("");
    };

    return (
        <div>
            <ul>
                {list.map((name) => {
                    return (
                        <li key={name}>{name}</li>
                    )
                })}
            </ul>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <button
              onClick={onAddName}
            >
                Add Name
            </button>
        </div>
    )
}

export default NameList;