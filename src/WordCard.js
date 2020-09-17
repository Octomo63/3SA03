import React, { useEffect, useState } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';

import _ from 'lodash';
//import {useEffect,useState} from '../node_modules/fast-glob/out/managers/options';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
    word,
    chars,
    attempt: 1,
    guess: '',
    completed: false
    }
}
export default function WordCard(props){
const[state,setState] = useState({
        word: '',
        chars: '',
        attempt: 1,
        guess: '',
        completed: false
        })
    useEffect(() =>{
        let data = prepareStateFromWord(props.value)
        setState({
        ...state,
        word: data.word,
        chars: data.chars,
        attempt: data.attempt,
        guess: data.attempt,
        completed: data.completed
        })
    },[])
    
    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        let guess = state.guess + c
        setState({...state, guess})
        if(guess.length == state.word.length){
        if(guess == state.word){
        console.log('yeah!')
        window.alert("You Are Winner") //Show alert box
        setState({...state, guess: '', completed: true})
        }else{
        console.log('reset')
        setState({...state, guess: '', attempt: state.attempt + 1})
        }
        }
    }
 return (
 <div>
    { Array.from(state.chars).map((c, i) => <CharacterCard value={c} key={i}
    activationHandler = {activationHandler}
    attempt = {state.attempt}/> )}
 </div>
 );
}