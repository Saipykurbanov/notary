const esp = {
    header: {
        links: {
            home: "Esp",
            about: "About",
            services: "Services",
            contacts: "Contacts"
        },
        button: "Contacts"
    },
    home: {
        slider: [
            {
                title: 'Notary Organization',
                description: 'At Empire Tax Advisors, we understand that managing your finances can be a daunting task, and we’re here to simplify the process for you. Our team of highly trained and experienced accountants are dedicated to helping individuals and businesses alike achieve their financial goals.',
                button: 'Contacts',
                link: '/#contacts'
            },
            {
                title: 'Notary Organization2',
                description: 'At Empire Tax Advisors, we understand that managing your finances can be a daunting task, and we’re here to simplify the process for you. Our team of highly trained and experienced accountants are dedicated to helping individuals and businesses alike achieve their financial goals. At Empire Tax Advisors, we understand that managing your finances can be a daunting task.',
                button: 'Our services',
                link: '/#services'
            },
            {
                title: 'Notary Organization3',
                description: 'At Empire Tax Advisors, we understand that managing your finances can be a daunting task, and we’re here to simplify the process for you. Our team of highly trained and experienced accountants are dedicated to helping individuals and businesses alike achieve their financial goals. At Empire Tax Advisors, we understand that managing your finances can be a daunting task.',
                button: 'Our services',
                link: ''
            },
        ],
        specialist: {
            name: 'Yessica Guevara',
            position: 'Tax Advisor'
        }
    },
    about: {
        title: 'About us',
        description: `
            NYC Mobile Notary Service provides top-tier travel notary
             services throughout the five boroughs of New York City. 
             As native New Yorkers we understand the fast-paced nature
              of the city. We are available all year round, committed 
              to accommodating all our clients’ notarial needs in a New 
              York-minute. NYC Mobile Notary Service is strictly mobile 
              and by appointment only, we do not have a physical location. 
              We specialize in, but are not limited to, General Notarizations, 
              Power of Attorney, Estate Planning, Trusts, and Wills. We look 
              forward to being your preferred notary service.
        `,
        offer: 'OR OFFER'
    },
    services: {
        title: 'Services',
        items: [
            {
                title: 'Tax Preparation',
                fill: 'We provide the latest strategies to help you save thousands in your taxes and save you from the headache of navigating it all yourself.'
            },
            {
                title: ' ITIN Service',
                fill: 'We provide the latest strategies to help you save thousands in your taxes and save you from the headache of navigating it all yourself.',
            },
            {
                title: 'Notary Service',
                fill: 'We provide the latest strategies to help you save thousands in your taxes and save you from the headache of navigating it all yourself.',
            },
            {
                title: 'Auditing Service',
                fill: 'We provide the latest strategies to help you save thousands in your taxes and save you from the headache of navigating it all yourself.',
            },
            {
                title: 'Tax Preparation',
                fill: 'We provide the latest strategies to help you save thousands in your taxes and save you from the headache of navigating it all yourself.',
            },
            {
                title: 'Auditing Service2',
                fill: 'We provide the latest strategies to help you save thousands in your taxes and save you from the headache of navigating it all yourself.',
            },
            {
                title: 'Tax Preparation2',
                fill: 'We provide the latest strategies to help you save thousands in your taxes and save you from the headache of navigating it all yourself.',
            },
            {
                title: ' ITIN Service',
                fill: 'We provide the latest strategies to help you save thousands in your taxes and save you from the headache of navigating it all yourself.',
            },
        ],
        button: 'Other accounting services',
        allServicesTitle: 'All services',
        allServicesFill: `
            Make the process of notarizing your documents 
            simple and stress free with NYC Mobile Notary Service.
              Our Mobile Notaries travel to the location of your choice 
              – home, office, hotel, airport, nursing home, hospital, 
              restaurant, coffee shop, etc. Just have your valid ID and 
              documents ready and we can perform our notarial services, 
              which include: witnessing the signing of sensitive documents, 
              identifying participants, and administering oaths when necessary.
        `,
        documentsTitle: 'Acceptable Certified Documents',
        documentsFill: 'You must have at least one (1) of these Certified Identification documents to receive services:',
        documentsItems: [
            'Driver License',
            'Passport',
        ]
    },
    contacts: {
        title: 'Contact us',
        offer: 'We are looking forward to hearing from you soon',
        placeholders: {
            name: 'NAME',
            email: 'EMAIL',
            phone: 'PHONE',
            address: 'ADDRESS',
            message: 'MESSAGE',
        },
        address: {
            title: 'Address',
            companyName: 'Company "YourC"',
            street: '275 7th Ave',
            floor: '7th Floor',
            city: 'New York',
            country: 'NY USA'
        },
        button: 'SEND',
        error: {
            require: 'This field is required.',
            phoneValidate: 'A phone number cannot contain less than 10 characters.',
            emailValidate: 'Please enter valid Email.'
        }
    },
    footer: {
        slogan: 'Slogan company',
        services: {
            title: 'services',
            button: 'show more'
        },
        navigation: {
            button: 'BACK TO UP',
            links: {
                aboutUs: 'about us',
                services: 'services',
                contactUs: 'contact us'
            }
        },
        copyright: '©Copyright All rights reserved.',
    },
}

export default esp;