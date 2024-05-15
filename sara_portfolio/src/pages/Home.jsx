import Style from "./page.module.css";

export default function Home() {
    return (
        <>
            <div className={Style.container}>
                <div className={Style.text}>
                    <h1 className={Style.title}>Hi, I'm Sara</h1>
                    <p className={Style.paragraph}>I'm a senior Computer Science student passionate about software development. I'm currently pursuing a Bachelor's Degree. </p>
                </div>
                <div className={Style.image}>
                    <img src="/profile.jpg" alt="Sara" />
                </div>
            </div>
        </>
    )
}