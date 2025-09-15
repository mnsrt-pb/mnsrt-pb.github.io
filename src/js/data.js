export default [
    {
        title: 'TheaterTainment',
        description: 'A web-based application designed to emulate the functionalities of Cinemark.\
            TheaterTainment is a theater with a single, unspecified location, offering a comprehensive \
            online experience similar to that of Cinemark.',
        achievements: [
            {
                title: 'Technical Achievements',
                data: [
                    'Built comprehensive role-based authentication system supporting both customer and employee workflows',
                    'Designed scalable database architecture with 15+ interconnected SQL models using SQLAlchemy ORM',
                    'Implemented complete CRUD functionality for movie/showtime management with real-time updates',
                    'Integrated payment processing system with secure credit card management and receipt generation',
                    'Achieved 95%+ test coverage with comprehensive pytest unit testing suite',
                    'Optimized API performance by switching from direct calls to tmdbsimple wrapper, reducing load times',
                ]   
            },
            {
                title: 'Business/Functional Achievements',
                data: [
                    'Replicated complex cinema booking flow including seat selection, pricing tiers, and confirmation system',
                    'Built employee management dashboard enabling staff to manage theater operations efficiently',
                    'Implemented user watchlist and purchase history features for enhanced customer experience',
                    'Designed responsive UI that works seamlessly across desktop and mobile devices'
                ]   
            }
        ],
        technologies: ['Flask', 'SQLAlchemy', 'TMDB API', 'tmdbsimple', 'pytest', 'Bootstrap'],
        website: 'https://mnsrt-pb.github.io/theatertainment-showcase/',
        github: 'https://github.com/mnsrt-pb/TheaterTainment'
    },
    {
        title: 'Network',
        description: 'Network is an interactive blogging web app that allows users to share any \
        and all inspirational ideas. In addition, users can easily add their friends and any \
        other authors to stay up to date on what others want to share.',
        achievements: [
            {
                title: 'Technical Achievements',
                data: [
                    'Designed comprehensive user authentication system with JWT token generation, bcrypt password hashing, and secure session management',
                    'Built complete account management backend including registration, login, profile editing with file upload capabilities',
                    'Implemented robust data validation using express-validator with custom validation rules for usernames, emails, and file types',
                    'Created flexible user profile system with multiple layout options (list, grid, masonry) and customizable bio/profile picture functionality',
                    'Developed extensive test suite covering authentication, profile management, and social features with chai/mocha'
                ]
            }, 
            {
                title: 'Security & Data Management',
                data: [
                    'Designed role-based access control using JWT authentication middleware and protected routes',
                    'Built comprehensive friend/social system with friend requests, blocking functionality, and relationship status tracking'
                ]
            }
        ],
        technologies: ['React', 'Express.js', 'MongoDB', 'Node.js', 'mongoose', 'passport-jwt', 'axios', 'multer', 'chai', 'mocha', 'DigitalOcean'],
        github: 'https://github.com/agiledev-students-fall2024/4-final-project-network'
    },
    {
        title: 'Bunny☆Match',
        description: 'A delightful memory card game featuring adorable bunny emotes with various expressions. \
        Test your memory by matching pairs of bunnies showing the same emotion - from happy and sad to \
        love-struck and sleepy expressions.',
        achievements: [
            {
                title: 'Key Achievements',
                data: [
                    'Built complete PWA with offline functionality using service workers',
                    'Implemented complex game state management with React useReducer',
                    'Created responsive grid layouts adapting to different card counts',
                    'Integrated Web Audio API for background music with browser compatibility handling',
                    'Developed multiplayer turn-based game logic with score tracking',
                    'Added persistent user preferences with localStorage'
            ]
            }
        ],
        technologies: ['React', 'TypeScript', 'PWA', 'Vite', 'CSS3 animations'],
        website: 'https://mnsrt-pb.github.io/bunny-match/',
        github: 'https://github.com/mnsrt-pb/bunny-match'     
    },
    {
        title: 'Card☆Symphony',
        description: 'Memory card game with early 2000s anime aesthetic.',
        achievements: [
            {
                title: 'Key Achievements',
                data: [
                    'Built complete PWA with offline functionality using service workers',
                    'Implemented complex game state management with React useReducer',
                    'Created responsive grid layouts adapting to different card counts',
                    'Integrated Web Audio API for background music with browser compatibility handling',
                    'Developed multiplayer turn-based game logic with score tracking',
                    'Added persistent user preferences with localStorage'
            ]
            }
        ],
        technologies: ['React', 'TypeScript', 'PWA', 'Vite', 'CSS3 animations'],
        github: 'https://github.com/mnsrt-pb/card-symphony-showcase'      
    },
    {
        title: 'Hello, Adventure',
        description: <span>A storytelling game designed to introduce young audiences to fundamental concepts
        in computer science. The game eases students into these concepts through engaging examples and
        intuitive game mechanics, rather than focusing on the full extent of algorithms. 
        <br /><br /> 
        As part of a full-stack application, the game collects data on student progression, 
        which is transmitted and stored in a database for tracking and analysis. When loading the game, 
        data from the database is used to allow students to continue from where they left off, providing
        a seamless experience.
        <br /><br />
        </span>,
        achievements: [
            {
                title: 'Key Achievements',
                data: [
                    'Developed educational game targeting K-12 students to introduce fundamental computer science concepts through interactive gameplay',
                    'Collaborated in 4-person multidisciplinary team working across game development and web application components',
                    'Implemented real-time data integration between GameMaker game engine and companion web application for student progress tracking',
                    'Designed comprehensive project documentation including UML diagrams and Software Project Management Plan',
                    'Applied Agile development methodology in team-based environment with version control and collaborative workflows',
                ]
            }
        ],
        technologies: ['GameMaker'],
        github: 'https://github.com/nyu-team-b18/Game_GameMaker'
    },
    {
        title: 'Cherry Blossom',
        description: 'An animation depicting the seasonal changes of a cherry blossom tree.',
        achievements: [
            {
                title: 'Key Achievements',
                data: [
                    'Developed interactive seasonal animation using P5.js with complete seasonal cycle from spring blooms to winter snow',
                    'Implemented complex state management system tracking 15+ variables to control seasonal transitions and visual elements',
                    'Created realistic natural animations including falling petals, growing leaves, snowfall, and melting effects with randomized positioning',
                    'Built modular class-based architecture with comprehensive methods for each season and visual effect',
                    'Implemented proper reset functionality allowing seamless cycle repetition without memory leaks',
                    'Used efficient rendering techniques with appropriate use of stroke/noStroke and fill operations for performance'
            ]
            }
        ],
        technologies: ['P5.js'],
        demo: <iframe src="https://editor.p5js.org/mns13/full/eK1BPjwwn" height={450} width={400}></iframe>,
        source: 'https://editor.p5js.org/mns13/sketches/eK1BPjwwn'
    },
];