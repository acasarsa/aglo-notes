import React, { useState, useEffect } from 'react'
import { UserInput } from './UserInput'
import { DisplayAnagramResults } from './DisplayAnagramResults'

const Anagram = () => {
    
    // const [str1, setStr1] = useState('andez')
    // const [str2, setStr2] = useState('daend')
    const [isAnagram, setAnagram] = useState()
    
    const handleSubmit = (e, str1, str2) => {
        e.preventDefault()
        validAnagram(str1, str2)
    }
    
    const validAnagram = (str1, str2) => {
        if (str1.length <= 0 && str2.length <= 0) {
            console.log('empty')
        }
        
        if (str1.length !== str2.length) {
            return setAnagram(false) 
        }
        
        // go through each stray and check to make sure 
            // that str1 and str2 have the same amount of each letter in them. 
                // count each letter in str1 and str2
                    // track that count by setting letter to key and count to value 
                    // each element in stray becomes a key 
                    // str1[el] = 0 + 1 
                // check if counts match
        
        let charCounter1 = {}
        let charCounter2 = {}
        //////////
            // use for of loop for each string to create an object that counts letters
            //////////
        for (let el of str1) {
            charCounter1[el] = (charCounter1[el] || 0) + 1
            // key's value either equals its current value + 1 or it's initialized at 0 + 1
        }
        
        for (let el of str2) {
            charCounter2[el] = (charCounter2[el] || 0) + 1
        }
        
        ////////////
            // check the objects to see if they match
            ////////////
        
        for (let key in charCounter1) {
            // if str1 has a value that is not in str2
                // if cc1 has key that is not in cc2
                // check that cc2 has the same keys as cc1
            if (!(key in charCounter2)) {

                return setAnagram(false)
            }
            // if length is equal and str2 has all letters that are in str1 but str2 has a letter that is not in str1
                // OR
                // if '' and cc2 has a key that is not found in cc1
                // check that cc2's key values match with cc1's key values
            if (charCounter2[key] !== charCounter1[key]) {

                return setAnagram(false)
            }
        }

        return setAnagram(true)
        
    }
    
    // useEffect(() => {
    //     validAnagram()
    // }, [])
    

    
    // console.log(isAnagram)
    return (
        <>
        <div>
            <UserInput
                handleSubmit={handleSubmit}
            />
        </div>
        
        <div>
            <DisplayAnagramResults
                isAnagram={isAnagram}
            />
        </div>
        </>
    )

}

export default Anagram
