import React from 'react';
import './css/contacts.css';
import Input from './components/Input';
import useFeedback from './hooks/useFeedback';
import Button from '../../components/button/Button';
import TextArea from './components/TextArea';
import Addres from './components/Addres';
import mark from './icons/mark.svg'


const Contacts = ({lang}) => {

    const feedback = useFeedback(lang.error)

    return (
        <div className='contacts_frame' id='contacts'>
            <div className="container padding">
                <h2 className="gold_title">{lang.title}</h2>
                <div className="offer">{lang.offer}</div>

                <div className="contacts_wrapper">
                    <Addres address={lang.address}/>

                    <form action="" onSubmit={feedback.sendForm}>
                        <div className="inputs_block">
                            <Input error={feedback.error.name} type={'text'} placeholder={lang.placeholders.name} value={feedback.input.name} callback={feedback.changeValue} name={'name'}/>
                            <Input error={feedback.error.email} type={'text'} placeholder={lang.placeholders.email} value={feedback.input.email} callback={feedback.changeValue} name={'email'}/>
                            <div className="input_field">
                                <input type="tel" className={feedback.error.phone ? 'error' : ''} value={feedback.input.phone} placeholder={lang.placeholders.phone} onPaste={feedback.onPhonePaste} onKeyDown={feedback.onPhoneKeyDown} onChange={feedback.onPhoneInput}/>
                                <div className='error_mess'>{feedback.error.phone}</div>
                            </div>
                            <Input error={feedback.error.address} type={'text'} placeholder={lang.placeholders.address} value={feedback.input.address} callback={feedback.changeValue} name={'address'}/>
                        </div>
                        <TextArea placeholder={lang.placeholders.message} value={feedback.input.textarea} error={feedback.error.textarea} callback={feedback.changeValue} name={'textarea'}/>
                        <Button 
                            mode={`fill ${feedback.disable ? 'load_btn' : 'stop_animation'}`} 
                            content={feedback.success === 'success' ? 
                                <>
                                    <svg fill="#000000" width="20px"  viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1827.701 303.065 698.835 1431.801 92.299 825.266 0 917.564 698.835 1616.4 1919.869 395.234z" fill-rule="evenodd"/>
                                    </svg>
                                </>
                            :feedback.success === 'error' ? <div className='cross'></div> 
                            :<span>{lang.button}</span>} 
                            type={'submit'}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;