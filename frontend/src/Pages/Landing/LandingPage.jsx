import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import HeaderPage from '../../components/Header/HeaderPage';
import {v4 as uuidv4} from 'uuid';
import fetchDefinition from '../../api/define'
import 'react-loading-skeleton/dist/skeleton.css'
import './LandingPage.css';

const LandingPage=()=>{

    const [title, setTitle]=useState('Aithor')
    const [definition, setDefinition]=useState('Aithor is an intelligent, AI-powered word exploration and definition tool designed to help users understand language in a deeper, more interactive way. With just a click or search, Aithor fetches detailed, contextual explanations of any word using cutting-edge generative AI models. It transforms passive reading into an engaging learning experience by allowing users to explore definitions inline without leaving the page. Fast, intuitive, and beautifully animated, Aithor is ideal for students, writers, and curious minds who want to expand their vocabulary and comprehension effortlessly.')
    const [loader, setLoader]=useState(false)
    const [searchInputValue, setSearchInputValue]=useState('')

    const capitalizeFirstLetter = (word) => {
        if (!word) return '';
        return word.charAt(0).toUpperCase() + word.slice(1);
      };

     
    const handleSearchInput=(e)=>{
        if (e.key==='Enter'){
        if (searchInputValue){
        handleWordClick(searchInputValue)
        }
        setSearchInputValue('')
    }
    }

    const handleWordClick= async (clickedWord)=>{
        try {
            const cleanedWord=clickedWord.replace(/[-,\.?\(\)\[\]\{\}:;'"\/\\`+=_<>\*&\^%$#@!~]/g, '');
            const capitalizedWord=capitalizeFirstLetter(cleanedWord)
            setTitle(capitalizedWord);
            setDefinition('');
            setLoader(true);
           
            const newDefinition = await fetchDefinition(capitalizedWord);
            console.log('Received definition:', newDefinition);
            setLoader(false)
            if (newDefinition && newDefinition !== 'Unable to fetch definition') {
                
                setDefinition(newDefinition);
            } else {
                console.error('Failed to get definition for:', capitalizedWord);
            }
        } catch (error) {
            console.error('Error in handleWordClick:', error);
        }
    }
    
    return (
        <>
        <HeaderPage />
        <div className="landing-container">
            <div className='input-container'>
            <input type='search' value={searchInputValue} className='search' placeholder='Search any word' onChange={(e)=>setSearchInputValue(e.target.value)} onKeyDown={handleSearchInput} />
            </div>
            <div className="landing-content">
                <h1>{title}</h1>

                { loader &&
                <div className='skeleton'>

                    <Skeleton height={25} width='100%' className="skeleton-line"></Skeleton>
                    <Skeleton height={25} width='90%' className="skeleton-line"></Skeleton>
                    <Skeleton height={25} width='100%' className="skeleton-line"></Skeleton>
                    <Skeleton height={25} width='70%' className="skeleton-line"></Skeleton>
                    <Skeleton height={25} width='90%' className="skeleton-line"></Skeleton>

                </div>
                }

                <p className='paragraph'>
                    
                    {definition && definition.split(' ').map((eachWord, index) => (
                        <a href='#' 
                        key={uuidv4()}
                        onClick={(e)=>{
                            e.preventDefault(); 
                            handleWordClick(eachWord);
                        }}>{eachWord} </a>
                    ))}
                </p>
            </div>
            
        </div>
        </>
        
    )
}

export default LandingPage;