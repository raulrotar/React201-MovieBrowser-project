import Hero from './Hero'

const AboutView = () => {
    return (
        <>
            <Hero text="About"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                        <h2>Movie browser project</h2>
                            <p className="lead">
                                This is my first ReactJS project
                            </p>
                            <p className="lead">
                                Your can search for movies and see details about
                            </p>
                            </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutView
