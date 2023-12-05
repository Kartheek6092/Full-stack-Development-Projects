import styled from 'styled-components'

export const Container = styled.div `
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #100f17;
    color: red;
`
export const WelcomeHeader = styled.h1 `
    font-size: 60px;
    color: #05071c;
	/* -webkit-text-stroke: 1px #F8F8F8; */
	text-shadow: 0px 1px 4px #F8F8F8;
`
export const HeaderSpanEl = styled.span `
    font-size: 58px;
    color: #41fae7;
    text-shadow: 0px 1px 4px #928aff;
`

export const LoginForm = styled.form `
    width: 35vw;
    min-height: 500px;
    background-color: #050312;
    border-radius: 15px;
    border: 1px solid #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2%;
    color: #F8F8F8;
    align-items: center;
`

export const FormTitle = styled.h1 `
    color: antiquewhite;
`

export const CustomInputContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const CustomLabel = styled.label `
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 15px;
`

export const CustomInput = styled.input `
    margin-left: 5px;
    flex-grow: 0;
    width: 70%;
    color: #00eaff;
    padding: 10px;
    outline: none;
    background-color: transparent;
    border-radius: 8px;
    border: 1px solid #F8F8F8;
`

export const CustomSelect = styled.select `
    margin-left: 5px;
    width: 73%;
    color: #00eaff;
    padding: 10px;
    outline: none;
    background-color: transparent;
    border-radius: 8px;
    border: 1px solid #F8F8F8;
`

export const CustomOption = styled.option `
    padding: 5px;
    color: #000;
    background-color: #050312;
    color: #00eaff;
    width: 100%;
`

export const SubmitBtn = styled.button `
    background-color: #2effa8;
    color: #05071c;
    outline: none;
    border-style: none;
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
    font-weight: 700;
    width: 100px;
    /* margin: auto; */
    text-shadow: #05071c;
`

export const SkipBtn = styled.button `
    background-color: transparent;
    color: #ffb303;
    font-weight: 700;
    align-self: center;
    display: flex;
    outline: none;
    border-style: none;
    align-items: center;
`

export const PopupContainer = styled.div  `
    /* background-color: transparent;
    border-radius: 15px;
    border: 1px solid #fff; */
    align-self: self-end;
`

export const FamiliarContainer = styled.p `
    width: 100%;
    font-size: 12px;
    align-self: center;
`

export const LoginBtn = styled.button `
    color: blue;
    background-color: transparent;
    border-style: none;
    outline: none;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    text-decoration: underline;
`