export function App () {
  return (
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
            className="tw-followCard-avatar"
            alt="Imagen de perfil" 
            src="https://unavatar.io/sindresorhus@gmail.com"/> 
            <div className="tw-followCard-info">
                <strong>Nelson Navarro</strong>
                <span className="tw-followCard-infoUserName">@nelson</span>
            </div>
        </header>

        <aside>
            <button className="tw-followCard-button">
                Seguir
            </button>
        </aside>
    </article>
  )
}