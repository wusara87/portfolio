import Style from "./page.module.css";

export default function Home() {
    return (
        <>
            <div className={Style.container}>
                <div className={Style.text}>
                    <h1 className={Style.title}>Hi, I'm Sara</h1>
                    <p className={Style.paragraph}>I'm a senior Computer Science student passionate about software development. Welcome to my portfolio, where I showcase my projects and skills. Explore and get to know more about my journey in computer science!</p>
                </div>
                <div className={Style.image}>
                    <img src="/profile.jpg" alt="Sara" />
                </div>
            </div>
        </>
    )
}