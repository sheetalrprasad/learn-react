import './about.css'
import working from '../static/working.jpg'

export function About(){
    return ( 
        <div>
            <div className="row">
                <div className="col about-me">
                    <div className='working-img'>
                        <img src={working} alt='working' />
                    </div>
                    <div className='para'>
                        <p>A Software Engineer having professional experience in business management software development. I focus on back-end development to bring the best of system for a splendid user experience. I’m a detail-oriented person with get-it-done and eager-to-learn spirit. My current areas of interest are Machine Learning and Data Engineering. I'm continuously learning and keen to work in these fields. </p>
                        <p>Throughout my career, I’ve had the great fortune to work on some truly inspiring projects, while meeting many influential and creative individuals along the way. </p>
                        <p><b>"Passionately curious"</b>, is how I'll describe myself.</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <h2>Skills</h2>
                <div className='skills'>
                    <div className='box'>
                        <p>ajhfksj</p>
                    </div>
                    <div className='box'>

                    </div>
                    <div className='box'>

                    </div>
                    <div className='box'>

                    </div>
                    <div className='box'>

                    </div>
                    <div className='box'>

                    </div>
                </div>
                <div className='skills'>
                    <div className='box'>

                    </div>
                    <div className='box'>

                    </div>
                    <div className='box'>

                    </div>
                    <div className='box'>

                    </div>
                    <div className='box'>

                    </div>
                    <div className='box'>

                    </div>
                </div>
                <div className='skills'>
                    <div className='box'>

                    </div>
                    <div className='box'>

                    </div>
                    <div className='box'>

                    </div>
                    <div className='box'>

                    </div>
                    <div className='box'>

                    </div>
                    <div className='box'>

                    </div>
                </div>
            </div>
        </div>
    );
}
