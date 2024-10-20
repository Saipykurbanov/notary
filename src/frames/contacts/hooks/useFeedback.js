import { useState } from "react";
import Api from "../../../utils/Api";


export default function useFeedback(errors) {
    const [success, setSuccess] = useState(false)
    const [disable, setDisable] = useState(false)
    const [info, setInfo] = useState()
    const [input, setInput] = useState({
        name: undefined,
        email: undefined,
        phone: undefined,
        address: undefined,
        textarea: undefined
    })
    const [error, setError] = useState({
        name: undefined,
        email: undefined,
        phone: undefined,
        address: undefined,
        textarea: undefined
    })

    const changeValue = (value, type) => {
        setSuccess(prev => prev === false ? prev : false)

        if(type === 'textarea') {
            if(value.length > 300) return
        } else {
            if(value.length > 50) return
        }

        let words = value.trim().split(/\s+/);

        if (words.length > 3) return

        if(type === 'email') {
            validateEmail(value, type)
        } else {
            validateName(value, type)
        }
        setInput(prev => ({...prev, [type]: value}))
    }

    const validateName = (value, type) => {
        if(!value) {
            setError(prev => ({...prev, [type]: errors.require}))
            return 'error'
        } else {
            setError(prev => ({...prev, [type]: ''}))
        }
    }

    const validateEmail = (value, type) => {
        const reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

        if(!value) {
            setError(prev => ({...prev, [type]: errors.require}))
            return 'error'
        } else if(!reg.test(value)) {
            console.log('error')
            setError(prev => ({...prev, [type]: errors.emailValidate}))
            return 'error'
        } else {
            setError(prev => ({...prev, [type]: ''}))
        }
    }

    const validatePhone = (value) => {
        
        if(!value) {
            setError(prev => ({...prev, phone: errors.require}))
            return 'error'
        } else if (value.length < 10) {
            setError(prev => ({...prev, phone: errors.phoneValidate}))
            return 'error'
        } else {
            setError(prev => ({...prev, phone: ''}))
        }
    }

    var onPhonePaste = function (e) {
        setSuccess(prev => prev === false ? prev : false)

        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                setInput(prev => ({...prev, phone: inputNumbersValue}))
                return;
            }
        }
    }

    var onPhoneInput = function (e) {
        setSuccess(prev => prev === false ? prev : false)

        var input = e.target,
        inputNumbersValue = getInputNumbersValue(input),
        selectionStart = input.selectionStart,
        formattedInputValue = "";

        if (!inputNumbersValue) {
            return setInput(prev => ({...prev, phone: ''}));
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                setInput(prev => ({...prev, phone: inputNumbersValue}))
            }
            return;
        }
       
        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "+7" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
        
        validatePhone(formattedInputValue)
        setInput(prev => ({...prev, phone: formattedInputValue}))
    }

    var onPhoneKeyDown = function (e) {
        setSuccess(prev => prev === false ? prev : false)

        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            setInput(prev => ({...prev, phone: ''}))
        }
    }

    const sendForm = async (e) => {
        e.preventDefault()

        if(disable) {
            return
        }
        
        let errorChange = 0
        
        if(validateName(input.name, 'name') === 'error') {
            errorChange += 1
        }

        if(validateEmail(input.email, 'email') === 'error') {
            errorChange += 1
        }

        if(validateName(input.address, 'address') === 'error') {
            errorChange += 1
        }

        if(validateName(input.textarea, 'textarea') === 'error') {
            errorChange += 1
        }


        if(validatePhone(input.phone) === 'error') {
            errorChange += 1
        }
        
        if(errorChange > 0) {
            return
        }

        setDisable(prev => prev = true)

        let res = await Api.post('feedback', input)

        if(res === 'success') {
            setSuccess('success')
            setError({
                name: undefined,
                email: undefined,
                phone: undefined,
                address: undefined,
                textarea: undefined
            })
            setInput({
                name: undefined,
                email: undefined,
                phone: undefined,
                address: undefined,
                textarea: undefined
            })
        } else {
            setSuccess('error')
        }

        setDisable(prev => prev = false)
    }

    var getInputNumbersValue = function (input) {
        return input.value.replace(/\D/g, '');
    }

    return {success, disable, info, input, validateName, changeValue, error, onPhoneInput, onPhoneKeyDown, onPhonePaste, sendForm }
}