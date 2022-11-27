import React from 'react'
import './list.css'
import Sidebar from '../../components/dashboard/sidebar/Sidebar';
import SearchBar from '../../components/dashboard/searchbar/SearchBar';
import DataTable from '../../components/dashboard/table/Table';

export default function 
() {
  return (
    <section >
     <div className="cont">
      <div className = 'cont-glass d-flex'>
          <Sidebar />
          
            <div>
              <div className='flex justify-center mt-4'>
              <SearchBar />
              <div className="listContainer overflow-auto my-3">
                <div className="listTitle">
                  <h1 className='text-center my-2 mb-4'>My Books</h1>
                  
                  <DataTable/>
                </div>
              </div>
              
                    
            </div>        
          </div>    
        </div>
      </div>
    </section>
  )
}
