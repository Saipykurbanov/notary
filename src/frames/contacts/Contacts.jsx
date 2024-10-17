import React from 'react';
import './css/contacts.css';
import Input from './components/Input';


const Contacts = ({lang}) => {
    return (
        <div className='contacts_frame' id='#contacts'>
            <div className="container padding">
                <h2 className="gold_title">{lang.title}</h2>
                <div className="offer">{lang.offer}</div>

                <div className="contacts_wrapper">
                    <div className="address">
                        <div className="address_wrapper">
                            <h3>{lang.address.title}:</h3>
                            <p>{lang.address?.companyName}</p>
                            <p>{lang.address?.street}</p>
                            <p>{lang.address?.floor}</p>
                            <p>{lang.address?.city}</p>
                            <p>{lang.address?.country}</p>
                        </div>
                        <div className="messangers">
                            <svg width="56.000122" height="56.013855" viewBox="0 0 56.0001 56.0139" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <defs/>
                                <path id="path" d="M28 1.33C13.33 1.33 1.33 13.3 1.33 28.05C1.33 41.38 11.09 52.45 23.84 54.45L23.84 35.78L17.06 35.78L17.06 28.05L23.84 28.05L23.84 22.16C23.84 15.46 27.81 11.78 33.91 11.78C36.82 11.78 39.86 12.29 39.86 12.29L39.86 18.87L36.5 18.87C33.2 18.87 32.16 20.93 32.16 23.04L32.16 28.05L39.57 28.05L38.37 35.78L32.16 35.78L32.16 54.45C38.44 53.46 44.16 50.25 48.29 45.41C52.42 40.57 54.68 34.41 54.66 28.05C54.66 13.3 42.66 1.33 28 1.33Z" fill="#131313" fillOpacity="1.000000" fillRule="nonzero"/>
                                <path id="path" d="M1.33 28.05C1.33 41.38 11.09 52.45 23.84 54.45L23.84 35.78L17.06 35.78L17.06 28.05L23.84 28.05L23.84 22.16C23.84 15.46 27.81 11.78 33.91 11.78C36.82 11.78 39.86 12.29 39.86 12.29L39.86 18.87L36.5 18.87C33.2 18.87 32.16 20.93 32.16 23.04L32.16 28.05L39.57 28.05L38.37 35.78L32.16 35.78L32.16 54.45C38.44 53.46 44.16 50.25 48.29 45.41C52.42 40.57 54.68 34.41 54.66 28.05C54.66 13.3 42.66 1.33 28 1.33C13.33 1.33 1.33 13.3 1.33 28.05Z" stroke="#131313" strokeOpacity="1.000000" strokeWidth="2.666667"/>
                            </svg>
                            <svg width="55.000000" height="55.000000" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <defs/>
                                <path id="Whatsapp" d="M27.49 0C12.33 0 0 12.33 0 27.49C0 33.51 1.93 39.09 5.23 43.61L1.8 53.83L12.38 50.45C16.72 53.33 21.91 55 27.5 55C42.66 55 55 42.66 55 27.5C55 12.33 42.65 0 27.49 0ZM19.81 13.96C19.28 12.69 18.87 12.64 18.06 12.61C17.79 12.59 17.48 12.57 17.14 12.57C16.09 12.57 14.99 12.88 14.33 13.56C13.52 14.38 11.52 16.31 11.52 20.25C11.52 24.2 14.4 28.01 14.78 28.55C15.19 29.08 20.39 37.29 28.47 40.64C34.79 43.26 36.67 43.02 38.11 42.71C40.21 42.26 42.84 40.7 43.5 38.83C44.17 36.95 44.17 35.35 43.97 35.01C43.78 34.67 43.24 34.48 42.44 34.08C41.63 33.67 37.7 31.73 36.96 31.47C36.23 31.2 35.54 31.29 34.99 32.07C34.21 33.15 33.45 34.25 32.84 34.92C32.35 35.43 31.56 35.5 30.9 35.22C30.01 34.85 27.52 33.98 24.45 31.25C22.07 29.13 20.46 26.49 19.99 25.7C19.52 24.89 19.94 24.42 20.31 23.99C20.71 23.49 21.1 23.13 21.51 22.66C21.91 22.19 22.14 21.95 22.4 21.4C22.67 20.87 22.48 20.32 22.28 19.91C22.09 19.51 20.47 15.56 19.81 13.96Z" fill="#131313" fillOpacity="1.000000" fillRule="evenodd"/>
                                <path id="Whatsapp" d="M0 27.49C0 33.51 1.93 39.09 5.23 43.61L1.8 53.83L12.38 50.45C16.72 53.33 21.91 55 27.5 55C42.66 55 55 42.66 55 27.5C55 12.33 42.65 0 27.49 0C12.33 0 0 12.33 0 27.49ZM18.06 12.61C17.79 12.59 17.48 12.57 17.14 12.57C16.09 12.57 14.99 12.88 14.33 13.56C13.52 14.38 11.52 16.31 11.52 20.25C11.52 24.2 14.4 28.01 14.78 28.55C15.19 29.08 20.39 37.29 28.47 40.64C34.79 43.26 36.67 43.02 38.11 42.71C40.21 42.26 42.84 40.7 43.5 38.83C44.17 36.95 44.17 35.35 43.97 35.01C43.78 34.67 43.24 34.48 42.44 34.08C41.63 33.67 37.7 31.73 36.96 31.47C36.23 31.2 35.54 31.29 34.99 32.07C34.21 33.15 33.45 34.25 32.84 34.92C32.35 35.43 31.56 35.5 30.9 35.22C30.01 34.85 27.52 33.98 24.45 31.25C22.07 29.13 20.46 26.49 19.99 25.7C19.52 24.89 19.94 24.42 20.31 23.99C20.71 23.49 21.1 23.13 21.51 22.66C21.91 22.19 22.14 21.95 22.4 21.4C22.67 20.87 22.48 20.32 22.28 19.91C22.09 19.51 20.47 15.56 19.81 13.96C19.28 12.69 18.87 12.64 18.06 12.61Z" stroke="#000000" strokeOpacity="0" strokeWidth="1.333333"/>
                            </svg>
                        </div>
                    </div>

                    <form action="">
                        <div className="inputs_block">
                            <Input type={'text'} placeholder={lang.placeholders.name}/>
                            <Input type={'email'} placeholder={lang.placeholders.email}/>
                            <Input type={'tel'} placeholder={lang.placeholders.phone}/>
                            <Input type={'text'} placeholder={lang.placeholders.address}/>
                        </div>
                        <textarea name="" id="" placeholder={lang.placeholders.message} rows={5}></textarea>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;