import React from 'react'

export const DisplayAnagramResults = ({ isAnagram }) => {
    
    const isFalse = () => {

        return (
            <h1>Is not an anagram</h1>
        )

    }

    const isTrue = () => {

        return (
            <h1>Is an anagram</h1>
        )


    }
    
    return !isAnagram ? (
        <>
            {isFalse()}
            {console.log('false', isAnagram)}
        </>
        ) : (
        <>
            {isTrue()}
            {console.log('true', isAnagram)}
        </>
        )
}
