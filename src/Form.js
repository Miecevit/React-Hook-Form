import { useState } from 'react';

function Form(){

    const [input, setInput] = useState("");


    const degistiginde = (event) => {

        const input_name = event.target.name; 
        const input_value = event.target.value; 

        setInput(values => ({...values, [input_name]: input_value }))
                                                //isim: Mert

    }

    const submitFonk = function(event) {
        event.preventDefault();

        console.log(input);

    }


    return (
        <>
        <form onSubmit={submitFonk}>
            <label>İsmini Gir:
                <input 
                    type="text"
                    name="isim"
                    value={input.isim || ""}
                    onChange={degistiginde}/>
            </label>
            <br/>
            <label>Yaşını Gir:
                <input 
                    type="number"
                    name="yas"
                    value={input.yas || ""}
                    onChange={degistiginde}
                    />
            </label>
            <br/>
            <label>Başvuru Amacı:
                <br/>
                <textarea 
                    name="amac"
                    value={input.amac || ""}
                    onChange={degistiginde}
                />
            </label>
            <br/>
            <label>Burs İsteği
                <select
                    name="burs"
                    value={input.burs || ""}
                    onChange={degistiginde}
                >
                    <option value="0">
                        Burs İstemiyorum
                    </option>
                    <option value="1">
                        Burs İstiyorum
                    </option>
                </select>
            </label>
            <input type="submit"/>
        </form>
        </>
    );
}
export default Form;