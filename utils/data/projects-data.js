import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Trip Advisor - AI ChatBot',
        description: "Designed and developed an AI model utilizing ChatGPT (GPT-3.5-turbo model), introduced a module for user-driven data training, and smoothly integrated it into a Python-based chatbot using the Flask framework",
        tools: ['Python', 'GPT-3.5-turbo', 'MongoDB', 'Flask', 'API Integration', 'System Design'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'PoS Integration (Clover) - boons delivery system',
        description: "Collaborated with team in building the Microservice, which will handle end to end process of order creation, payment update and order completion. Clover API Integration in the boons delivery system to automate the end to end order completion process",
        tools: ['Node.js', 'Hapi.js', 'MongoDB', 'AWS', 'API Integration', 'Joi', 'System Design'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 3,
        name: 'Delivery Management Dashboard',
        description: 'I have designed and developed a full-stack web app for managing deliveries, the application is responsible to show realtime delivery updates and other transactions, the application has the user authentication module which will enable the role based access to the delivery data',
        tools: ['Angular', 'Node.js', "Express.js", "Google Maps", "TypeScript", "MongoDB", "AWS", "API Integration", "Middleware"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 4,
        name: 'Web Scraper - Desktop Tool',
        description: 'Application is responsible for extracting data from the web page. Input for the tool will be list of URLs (Master URLs), stored in the database, columned with URL_ID and URL_Name. URL_ID will be used as reference_id for the extracted data from respective input URL, Tool will extract, URLs from the anchor tag(=href Attribute) in the web page and its content from the anchor tag, Tool will ignore the links which have been stored as discarded urls in the database. Extracted data will be stored in the database columned with Extracted date, URL_ID, Link, and Content',
        tools: ['Python', 'Tkinter', 'MySQL', 'Beautifulsoup', 'Express', 'Selenium', 'Webdriver', 'PyCharm'],
        code: '',
        role: 'Application Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 5,
        name: 'Yagoot-Ware',
        description: "-	Desktop based application, Responsible for processing the input files (*.pch, *.set, *.bdf), which has data in string format, gather required data from the file as per the requirements and process the mathematical calculations and give the results in excel format",
        tools: ['Python', 'Tkinter', 'PyCharm'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Application Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },