import '../stylesheets/Navbar.css';

export default function Navbar(props) {
    const newPage = (pageNumber) => {
        console.log(pageNumber);
        if (props.page != pageNumber){
            props.setPage(pageNumber)
        }
    }

    const newUrl = (e, url) => {
        e.preventDefault();
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <div class="container topBotomBordersOut" style={{padding: '2%'}}>
            <a onClick={() => newPage(1)}>About Me</a>
            <a onClick={() => newPage(2)}>Projects</a>
            <a onClick={e => newUrl('https://drive.google.com/file/d/1cMdRxR7YXX7iMsmKTC9vtuhAqXv6QEfx/view?usp=sharing')}>Resume</a>
        </div>
    )
}