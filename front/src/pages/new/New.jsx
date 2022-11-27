import React from 'react'
import Sidebar from '../../components/dashboard/sidebar/Sidebar'
import SearchBar from '../../components/dashboard/searchbar/SearchBar'
import NewBook from '../../components/dashboard/new/NewBook'

const NewBookView = () =>{
  return (
    <section >
     <div className="cont">
      <div className = 'cont-glass d-flex'>
          <Sidebar />          
            <div>
              <div className='flex justify-center mt-4'>
              <SearchBar />
              <div className="listContainer overflow-auto my-3">
                <div className="">                  
                  <NewBook/>
                </div>
              </div>                                  
            </div>        
          </div>    
        </div>
      </div>
    </section>
  )
}
export default NewBookView

