import React, { useState, useEffect } from 'react'

export const UserInput = ({ handleSubmit, isAnagram }) => {
    
    const [str1, setStr1] = useState('')
    const [str2, setStr2] = useState('')
    
    // user inputs string 1 and string 2 clicks 'run' 
    // anagram function runs and determines if user input is an anagram
    
    // const handleSubmit = (e) => {
    //     e.preventDefault()
        
    // }

    const changeStr1 = (e) => {
        setStr1(e.target.value)
    }
    
    const changeStr2 = (e) => {
        setStr2(e.target.value)
    }
    
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, str1, str2)}>
                <label>
                    input 1
                <input
                    type="text"
                    onChange={changeStr1}
                    value={str1}
                    placeholder="...String 1"

                />

                </label>
                <label>
                    input 2
                    <input
                        type="text"
                        onChange={changeStr2}
                        value={str2}
                        placeholder="...String 2"
                    />
                </label>
                <button
                    type="submit"
                >Run
                </button>
                    

                
            </form>
        </div>
    )
}
