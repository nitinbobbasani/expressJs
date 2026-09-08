
import { useEffect, useState } from 'react'
import './App.css'
import { ChildA } from './components/ChildA'
import { ThemeContext, UserContext } from './context/context';
import { addBook } from './store/slice/SocialSlice';
import {useSelector, useDispatch} from 'react-redux'

function App() {
  const [user, setUser] = useState({name: ''})
  const [userError, setUserError] = useState('')
  const [theme, setTheme] = useState('light')
  const books = useSelector(state => state.Social.books)
  const dispatch = useDispatch()
  function addBookToSlice(){
    dispatch(addBook("New Social Book 2"))
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const data = await response.json()
        setUser(data)
      } catch (error) {
        setUserError('Unable to load user information right now.')
        console.error('Failed to fetch user:', error)
      }
    }

    fetchUser()
  }, [])

  function printBooks(){

    console.log("print books", books)

  }

  return (
    <main className={`app-shell ${theme === 'dark' ? 'is-dark' : ''}`}>
      <header className="topbar">
        <div className="brand-mark" aria-label="Social Shelf home">SS</div>
        <div>
          <p className="overline">Personal collection</p>
          <h1>Social Shelf</h1>
        </div>
        <span className="status-pill">{theme} mode</span>
      </header>

      <UserContext.Provider value={{user, setUser}}>
        <ThemeContext.Provider value={{theme, setTheme}}>
          <section className="hero-row">
            <div>
              <p className="overline">A quiet corner for good ideas</p>
              <h2>Books worth keeping close.</h2>
              <p className="intro">A tiny reading room powered by Context and Redux.</p>
            </div>
            <div className="theme-card container" style={{backgroundColor: theme === 'light' ? 'pink' : 'beige'}}>
              <span className="theme-card__label">Theme control</span>
              <ChildA />
            </div>
          </section>
        </ThemeContext.Provider>
      </UserContext.Provider>

      <section className="library-panel" aria-labelledby="library-heading">
        <div className="section-heading">
          <div>
            <p className="overline">Your current shelf</p>
            <h2 id="library-heading">Saved books</h2>
          </div>
          <span className="book-count">{books.length} titles</span>
        </div>

        <ul className="book-list">
          {books.map((book, index) => (
            <li className="book-row" key={`${book}-${index}`}>
              <span className="book-number">{String(index + 1).padStart(2, '0')}</span>
              <span>{book.trim()}</span>
            </li>
          ))}
        </ul>

        <div className="action-row">
          <button className="button button--primary" aria-label="Add Book to the Slice" onClick={addBookToSlice}>Add book</button>
          <button className="button button--quiet" onClick={printBooks}>Get books</button>
        </div>
              <div>
        {user?.name && (
          <div>
            <h3>User Info</h3>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ) }
        {userError && <p role="alert">{userError}</p>}
      </div>
      </section>


      <footer className="footer-note">Current theme: <strong>{theme}</strong></footer>
    </main>
  )
}

export default App;


