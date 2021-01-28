import s from './style.module.css';


const Layout = ({id,title,descr,urlBg,colorBg}) => {
    return  (
        <section
            className={s.root} 
            id= { id || null}
            style={{
                backgroundImage: urlBg ? `url(${urlBg})` : null,
                backgroundColor: colorBg || null ,
                backgroundSize: 'cover'
            }}
        >
        <div class={s.wrapper}>
            <article>
                <div className={s.title}>
                    { title ? <h3>{title}</h3> : null }
                    <span className={s.separator}></span>
                </div>
                <div className={s.desc + ' '+ s.full}>
                    { descr ? <p>{descr}</p> : null}
                </div>
            </article>
        </div>
    </section>
    )
}

export default Layout;