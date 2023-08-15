import juet from '../assets/pdf/juet.png'
import sms from '../assets/pdf/sms.png'
import resume from '../assets/pdf/resume.jpg'
import color from '../assets/pdf/color.png'
import todo from '../assets/pdf/todo.png'
import paw from '../assets/pdf/paw.png'
import git from '../assets/pdf/git.jpg'
import fit from '../assets/pdf/fit.png'
import cinema from '../assets/pdf/cinema.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'JUET Rollcall',
        projectDesc: 'The developed system will use QR codes to mark the attendance in University. Project has two modules App and Website.',
        tags: ['Flutter', 'Nodejs', 'Mysql', 'Express'],
        code: 'https://github.com/Pakhi-v/Juet-Rollcall',
        demo: 'https://github.com/Pakhi-v/Juet-Rollcall',
        image: juet
    },
    {
        id: 2,
        projectName: 'Cinemava',
        projectDesc: 'This is a completely responsive web app based on TMDB API, build using React js.',
        tags: ['ReactJS', 'TMDB API', 'Javascript', 'Material UI'],
        code: 'https://github.com/Pakhi-v/Cinemava',
        demo: 'https://watch-cinemava.netlify.app/',
        image: cinema
    },
    {
        id: 3,
        projectName: 'Fitflex',
        projectDesc: 'A destination to empower individuals with all fitness levels.',
        tags: ['ReactJS', 'Rapid API', 'Material UI'],
        code: 'https://github.com/Pakhi-v/FitFlex',
        demo: 'https://fitflex-pakhi.netlify.app/',
        image: fit
    },
    {
        id: 4,
        projectName: 'SMS-Spam-Detection',
        projectDesc: 'Developed a machine learning model for accurately detecting spam messages in SMS communications.',
        tags: ['Python', 'Pandas', 'matplotlib', 'ML'],
        code: 'https://github.com/Pakhi-v/sms-spam-detection',
        demo: 'https://github.com/Pakhi-v/sms-spam-detection',
        image: sms
    },
    {
        id: 5,
        projectName: 'Resume Builder',
        projectDesc: 'A+ resume builder is an online tool that you can use to quickly create a resume.',
        tags: ['HTML', 'CSS', 'Material Ui', 'JS'],
        code: 'https://github.com/Pakhi-v/Resume-Builder',
        demo: 'https://resumebuilderaplus.netlify.app/',
        image: resume
    },
    {
        id: 6,
        projectName: 'Color-detection-using-OpenCV',
        projectDesc: 'Made a basic Object Detector by color using OpenCV python. Here we implemented the Color detection and Segmentation Technique.',
        tags: ['Python', 'OpenCV'],
        code: 'https://github.com/Pakhi-v/Color-detection-using-OpenCV',
        demo: 'https://github.com/Pakhi-v/Color-detection-using-OpenCV',
        image: color
    },
    {
        id: 7,
        projectName: 'Todo-Application',
        projectDesc: 'A project built using React and Firebase to store/edit/delete Todo',
        tags: ['React', 'Firebase'],
        code: 'https://github.com/Pakhi-v/TODO-App-React',
        demo: 'https://addnotestodo.netlify.app/',
        image: todo
    },
    {
        id: 8,
        projectName: 'Paw-Order',
        projectDesc: 'A simple dynamic E-commerce website front-end designed for Pet Stuff',
        tags: ['HTML, CSS, JS'],
        code: 'https://github.com/Pakhi-v/Paw-Order',
        demo: 'https://pakhi-v.github.io/Paw-Order/',
        image: paw
    },
    {
        id: 9,
        projectName: 'Github',
        projectDesc: 'To have look on some more of my projects do visit my Github account',
        tags: ['Projects', 'Github'],
        code: 'https://github.com/Pakhi-v',
        demo: 'https://github.com/Pakhi-v',
        image: git
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/