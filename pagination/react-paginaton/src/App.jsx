
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Pagination from './components/Pagination'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  
  // Fetch data from API on component mount
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data)
        setCurrentPage(response.data.slice(0, 10)) // Set the initial page data (first 10 items)
      })
  }, [])
  
  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    const startIndex = (pageNumber - 1) * 10;
    const endIndex = startIndex + 10;
    setCurrentPage(data.slice(startIndex, endIndex));
  } 

  return (
    <>
      <div>
        {data.length > 0 ? (
          <div>
            <h2>Posts Data From API</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
              {currentPage.map(page => (
                <div className="post" key={page.id}>
                  {page.id}: {page.title}
                </div>
              ))}
            </div>
            <Pagination data={data} onPageChange={handlePageChange} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  )
}

export default App
