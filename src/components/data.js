import java from  "../java.jpg"
import ctt from  "../c++.png"
import swift from  "../swift.jpeg"
import csharp from  "../csharp.png"
import acv from  "../acv.jpeg"
import react from   "../react.svg"
const data = [
    {
        text: ' Created a trivia game with C# aimed to help students study for their exam. Constructed with event-oriented programming concepts',
        date: '2016',
        image: csharp,
        link: {
            url:
                'https://github.com/LamiaUddin/trivia',
            text: 'Check it out on GitHub'
        }
    },
    {
        text: 'Collaboratively developed an interactive game called SPLAT using Java where user accumulates points by collecting objects. Implemented using object-oriented programming, designed with GUI using the Swing and AWT toolkit; includes multiple classes, abstract classes and inheritance concepts',
        date: '2018',
        image: java,
        link: {
            url:
                'https://github.com/LamiaUddin/splat',
            text: 'Check it out on GitHub'
        }
    },
    {
        text: 'Created a program that encrypts plaintext into cipher-text and vice versa using a randomly generated one-time pad. Created with C++ using bit-shift operators, pointers, and dynamically allocated arrays',
        date: '2019',
        image: ctt,
        link: {
            url:
                'https://github.com/LamiaUddin/Ascii85',
            text: 'Check it out on GitHub'
        }
    },
    {
        text: 'Made a an app called Bullseye using Swift',
        date: '2020',
        image: swift,
        link: {
            url:
                'https://github.com/LamiaUddin/bullseye',
            text: 'Check it out on GitHub'
        }
    },
    {
        text: 'Made my portfolio site using React, HTML and CSS',
        date: '2020',
        image: react,
        link: {
            url:
                'https://github.com/LamiaUddin/LamiaUddin.github.io',
            text: 'Check it out on GitHub'
        }
    },
    {
        text: 'Interned at ACV Auctions as a software engineer. During my time there, I created a website for them using React, Javascript, PostreSQL, Node.js, and Express',
        date: 'Jan 2020 - Apr 2020',
        image: acv,
    }
];

export default data;