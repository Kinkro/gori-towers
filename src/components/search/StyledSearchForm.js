import { styled } from "styled-components";


export const StyledForm = styled.form`
    display: ${({showsearch})=> showsearch};
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    /* transition: all 1s linear !important; */
    /* justify-content: space-around; */
    align-items: center;
    width:50vw;
    min-width: 400px;
    height: 30vh;
    margin: auto;
    border: 1px solid black;
    padding: 2.5rem 1.5rem;
`;

export const StyledInputContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin:auto;
    width: 80%;
    min-width: ${({space})=> space==='true' ? '220px' : '150px'};
    padding: 0.5rem 0;
    /* border: 1px solid black; */
    label {
        font-size: 14px;
        font-weight:600;
        margin-bottom: 0.5rem;
        white-space: nowrap;
    }
    select{
        width: ${({space})=> space==='true' ? '100px' : '110px'};
        
        height: 30px;
        border: 2px solid grey;
        border-radius: 5px;
        outline: none;
        flex-flow: ${({space})=> space==='true' ? 'row nowrap' : null};
    }
`;

export const StyledSearchBar = styled.div`
  /* width:100%; */
    display: flex;
    justify-content: center;
`;

export const StyledHeading = styled.div`
    width:50%;
    min-width: 360px;
    cursor: pointer;
    border-radius: 2rem;
    display: flex;
    background-color: #503D3F;
    align-items: center;
    justify-content: center;

    h2{
        color: #f0f0f0;
        font-size: 1.5rem;
        font-weight: 400;
        white-space: nowrap;
    }

    svg{
        color: #f0f0f0;
        padding-left: 0.5rem;
        scale: 1.5;
    }

    &:hover{
        background-color: #539987;
    }
`;