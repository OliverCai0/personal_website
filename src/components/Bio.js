export default function Bio(props) {
    return (
        <div>
        <div style={{
            marginLeft: '20%',
            marginRight: '20%',
            marginTop: '5%'
        }}>
            <p style={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Roboto,san-serif',
                fontWeight: 500,
                fontSize: 25,
                wordWrap: 'normal'
            }}> 
                I'm a third-year at the University of Chicago studying computer science
                and mathematics, currently working as a software engineer intern for Pie for Providers
                and an assistant researcher for UChicago SUPERgroup. 
            </p>

        </div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <img src={require('../uchicago.webp')} alt={'UChicago Logo'} 
                 style={{
                    width: '25%',
                    objectFit: 'contain',
                 }}/>
            <img src={require('../pie_for_providers.png')} 
                 alt={'Pie for Providers Logo'}
                 style={{
                    width: '25%',
                    objectFit: 'contain'
                 }}/>
        </div>
        <div style={{
            marginTop: '5%',
            marginLeft: '10%'
        }}>
            <p style={{
                color: 'white',
                textAlign: 'left',
                fontFamily: 'Roboto,san-serif',
                fontWeight: 500,
                fontSize: 25
            }}> 
                I'm also a part of these student organizations:
            </p>

        </div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div style={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <img src={require('../uchicago_robotics.png')} style={{height: '65%'}} alt={'UChicago Robotics'}/>
            <p style={{color: 'white', fontSize: 20, textAlign: 'center', fontFamily: 'Roboto,san-serif',}}>UChicago Robotics</p>
            </div>
            <div style={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <img src={require('../ILC.png')} style={{height: '65%', width: '50%', objectFit:'contain'}} alt={'UChicago Robotics'}/>
            <p style={{color: 'white', textAlign: 'center', fontSize: 20, fontFamily: 'Roboto,san-serif',}}>ILC: Entrepreneurship and Technology</p>
            </div>
        </div>
        </div>
    )
}