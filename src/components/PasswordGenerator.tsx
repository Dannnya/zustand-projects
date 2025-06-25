import { usePasswordStore } from '../store';

export const PasswordGenerator = () => {

    const {
        length,
        setLength,
        includeNumbers,
        toggleNumbers,
        includeSymbols,
        toggleSymbols,
        includeUppercase,
        toggleUppercase,
        includeLowercase,
        toggleLowercase,
        generatedPassword,
        generatePassword
    } = usePasswordStore();

    const handleGeneratePassword = () => {
        generatePassword()
    };

    return (
        <div>
            <h4>Password Generator</h4>
            <div>
                <label htmlFor='length'>
                    <strong>Password Length: </strong>
                </label>
                <input type='number' id='length' value={length} onChange={(e) => setLength(+(e.target.value))} min={4} max={64} />
            </div>

            <div className="flex items-center">
                <input type='checkbox' checked={includeNumbers} onChange={toggleNumbers} />
                <label>Include Numbers</label>
            </div>
            <div className="flex items-center">
                <input type='checkbox' checked={includeSymbols} onChange={toggleSymbols} />
                <label>Include Symbols</label>
            </div>
            <div className="flex items-center">
                <input type='checkbox' checked={includeUppercase} onChange={toggleUppercase} />
                <label>Include Uppercase</label>
            </div>
            <div className="flex items-center">
                <input type='checkbox' checked={includeLowercase} onChange={toggleLowercase} />
                <label>Include Lowercase</label>
            </div>
            <button onClick={handleGeneratePassword}>Generate</button>
            
            {generatedPassword && (
                <div>
                    <p>{ generatedPassword }</p>
                </div>
            )}
        </div>
    )
};
