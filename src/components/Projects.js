import {AiFillGithub, AiOutlineLink} from 'react-icons/ai'
export default function Projects(props) {
    const newUrl = (e,url) => {
        e.preventDefault();
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    const projects = [
        {
            'Name' : 'Fenyx',
            'Url' : 'https://productive-cs-students.herokuapp.com/',
            'Thumbnail' : 'fenyxScreen.png',
            'Description' : 'A UChicago CS course webapp that aims to improve \
                            accessibility to class grading and reviews. \
                            Built with React.js and Node.js with an SQLite3 \
                            backend.\
                            ',
            'FeaturedLinks' : 'https://bit.ly/3zePWtH',
            'GitUrl' : 'https://github.com/OliverCai0/less_toxic_facebook'
        },
        {
            'Name' : 'Fancy Rails Blog',
            'Url' : 'https://oliverrailsblog.herokuapp.com/',
            'Thumbnail' : 'rubyBlog.png',
            'Description' : 'A blog webapp built with Ruby on Rails and JQuery. Features include\
                            article creation, commenting, and article lookup by tag. User authentication\
                            is handled by Devise.',
            'FeaturedLinks': null,
            'GitUrl' : 'https://github.com/OliverCai0/rails_blog'
        },
        {
            'Name' : 'IGBF (IGBFF on App Store)',
            'Url' : 'https://apps.apple.com/us/app/igbff/id1635373087',
            'Thumbnail' : 'IGBF.png',
            'Description' : 'A camera app that aims to allow photographers to recreate iconic\
                            poses with a flexible image overlay. Built with React Native. Features include \
                            working camera with flash and zoom, a draggable and expandable image component,\
                            and a dashboard to save and delete photos taken.',
            'FeaturedLinks' : null,
            'GitUrl' : 'https://github.com/OliverCai0/IGBF'
        }
    ];

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {projects.map(
                project => 
                <div style={{width: '40%', 
                             minHeight: '50%', 
                             backgroundColor: 'rgba(47,79,79,.5)', 
                             margin: '2%', 
                             marginTop: '0',
                             borderRadius: '15px',
                             padding: '1%'
                             }}>
                    <div style={{display: 'flex'}}>
                    <h2 style={{
                        color: 'white',
                        fontFamily: 'Roboto,san-serif',
                        
                    }}>{project.Name}</h2>
                    <a  href={project.GitUrl}
                        onClick={e => newUrl(e,project.GitUrl)}
                        style={{display: 'flex', alignItems: 'center', marginLeft: '2%'}}
                    >
                            <AiFillGithub style={{color: 'white'}}/></a>
                    <a href={project.GitUrl}
                       onClick={e => newUrl(e,project.Url)}
                       style={{display: 'flex', alignItems: 'center' , marginLeft: '2%'}}
                    ><AiOutlineLink style={{color: 'white'}}/></a>
                    </div>
                    <img src={require('../'+ project.Thumbnail)} alt='fenyxProjectImage'
                         style={{maxHeight: '300px', objectFit: 'contain', width: '100%'}}></img>
                    <p style={{
                        textAlign: 'center',
                        color: 'white',
                        fontFamily: 'Roboto,san-serif',
                        fontSize: 20,
                    }}> {project.Description}</p>
                </div>
            )}
        </div>
    )
    
}