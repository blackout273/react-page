import style from "./About.module.css"
const About = () => {
    return (
        <>
            <article className={style.articleContainer}>
                <section className={style.sectionContainer} >
                    <p>
                        <b>Author: </b>Dankuid <br />
                        <b>GitHub: </b> <a href="https://github.com/blackout273" target="_blank">@blackout</a>
                    </p>

                </section>
                <section className={style.sectionContainer}>
                    <b>Sponsors: </b> <br />

                    <img src="https://i.kym-cdn.com/photos/images/newsfeed/002/422/232/02b.gif" width={480}></img>
                </section>

            </article>
        </>
    )
}
export default About