import * as React from 'react';

export interface Props {
    name: String;
    enthusiasmLevel?: number;
}

function Hello({name, enthusiasmLevel = 1}: Props) {
    if (enthusiasmLevel <= 0){
        return new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    );
}
export default Hello;

//helpers
function getExclamationMarks(numChars: number){
    return Array(numChars + 1).join("!");
}

