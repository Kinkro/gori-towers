import  {useForm} from 'react-hook-form';
import { StyledForm, StyledHeading, StyledInputContainer, StyledSearchBar } from './StyledSearchForm';
import { FaSearch } from 'react-icons/fa';
import {useState} from 'react';

const SearchForm = () => {
  const [showSearch, setShowSearch] = useState(false);
  const {register, handleSubmit} = useForm();
  const minmax = true;

  const onSubmit = (data)=>{
    console.log(data);
  }

  const handleClick = ()=>{
    setShowSearch(prev=> !prev);
  }
    console.log(showSearch);
  return (
    <>
    <StyledSearchBar >
      <StyledHeading onClick = {handleClick} >
        <h2>Find Your Future Apartment</h2>
        <FaSearch />
      </StyledHeading>
    </StyledSearchBar>
      <StyledForm onSubmit = {handleSubmit(onSubmit)} showsearch = {showSearch ? 'grid' : 'none'}> 
        <StyledInputContainer>
          <label htmlFor='project'>Select Project</label>
          <select id='project' {...register('project')}>
            <option  value=''>
              Projects
            </option>
            <option value='project1'>Project 1</option>
            <option value='project2'>Project 2</option>
            <option value='project3'>Project 3</option>
          </select>
        </StyledInputContainer>
        <StyledInputContainer space = {minmax ? 'true': 'false'}>

          <label htmlFor='space'>Select Space</label>
          <div>

            <select id='space' {...register('space')}>
              <option  value=''>
                Min.Space
              </option>
              <option value='35'>35</option>
              <option value='50'>50</option>
              <option value='80'>80</option>
            </select>
            <select id='space' {...register('space')}>
              <option  value=''>
                Max.Space
              </option>
              <option value='50'>50</option>
              <option value='80'>80</option>
              <option value='100'>100</option>
            </select>
          </div>
        </StyledInputContainer>
        <StyledInputContainer>
          <label htmlFor='bedroom'>Select Bedroom</label>
            <select id='bedroom' {...register('bedroom')}>
              <option  value=''>
                Bedroom
              </option>
              <option value='0'>0</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
        </StyledInputContainer>
        <StyledInputContainer space = {minmax ? 'true': 'false'}>
          <label htmlFor='price'>Select price</label>
          <div>

            <select id='price' {...register('price')}>
              <option  value=''>
                Min.Price $
              </option>
              <option value='35000'>35 000</option>
              <option value='50000'>50 000</option>
              <option value='80000'>80 000</option>
              <option value='100000'>100 000</option>
            </select>
            <select id='price' {...register('price')}>
              <option  value=''>
                Max.Price $
              </option>
              <option value='50000'>50 000</option>
              <option value='80000'>80 000</option>
              <option value='100000'>100 000</option>
              <option value='150000'>150 000</option>
            </select>
          </div>
        </StyledInputContainer>
        <button>Search</button>
      </StyledForm>
    </>
  )
}

export default SearchForm