import Style from "./page.module.css";

// home component
export default function Home() {
    return (
        <>
            <div className={Style.container}>
                <div className={Style.text}>
                    <h1 className={Style.title}>Hi, I'm Sara</h1>
                    <p className={Style.paragraph}>I'm a senior Computer Science student at CSUF, deeply passionate about software development. Currently working towards my Bachelor's Degree, I'm excited about the endless possibilities in the world of technology.</p>
                </div>
                <div className={Style.image}>
                    <img src="/profile.jpg" alt="Sara" />
                </div>
            </div>
        </>
    )
}