
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarksAsRead = time => {
    // console.log('marking as read', time); 
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }


  return (
    <>

      <Header></Header>
      <div className='md:flex container mx-auto'>
        <Blogs 
        handleAddToBookmark={handleAddToBookmark}
        handleMarksAsRead={handleMarksAsRead}
        ></Blogs>
        <Bookmarks 
        bookmarks = {bookmarks} 
        readingTime = {readingTime}
        ></Bookmarks>
      </div>

    </>
  )
}

export default App
