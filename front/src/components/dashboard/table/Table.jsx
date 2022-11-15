import React, { Fragment, useEffect } from 'react'
import { Link } from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux';
import { getBooks } from '../../../actions/bookActions';
import { useAlert } from 'react-alert';
import { MDBDataTable } from 'mdbreact' 
import MetaData from '../../layouts/Metadata';


const DataTable = () => {

  const { loading, books, error} = useSelector(state=> state.books)
    const alert= useAlert();

    const dispatch = useDispatch();
    useEffect(() => {
        if (error){
            return alert.error(error)
        }

        dispatch(getBooks());
    }, [dispatch])


  const setBooks = () => {
    const data = {
      columns: [
      
        {
          label: 'ISBN',
          field: 'isbn',
        },

        {
          label: 'Title',
          field: 'title',
          sort: 'asc'
        },
        
        {
          label: 'Author',
          field: 'author',
          sort: 'asc'
        },
        
        {
          label: 'Pages',
          field: 'pages',
        },
        {
          label: 'Status',
          field: 'status',
        },
        {
          label: 'Actions',
          field: 'actions',
        }
      
      ],
      rows: []
    }

    // books.forEach(book => {
    //   data.rows.push({
    //     isbn: book.isbn,
    //     title: `$${book.title}`,
    //     author: book.author,
    //     pages: book.pages,
    //     status: book.status,
    //     actions: <Fragment>
    //       <Link to={`/book/${book._id}`} className="btn btn-primary py-1 px-2">
    //         <i className="fa fa-eye"></i>
    //       </Link><Link to="/" className="btn btn-warning py-1 px-2">
    //         <i class="fa fa-pencil"></i>
    //       </Link>

    //       <Link to="/" className="btn btn-danger py-1 px-2">
    //         <i className="fa fa-trash"></i>
    //       </Link>
                      

    //     </Fragment>
    //   })
    // })

    // return data;
  }

    return (
          <Fragment>
            <MetaData title={'All Books'} />
            <div className='row'>
                

                <div className= 'col-12 col-md-10'>
                    <Fragment>
                        
                        {loading ? <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i> :(
                              <MDBDataTable
                                  data={setBooks()}
                                  className="px-3"
                                  bordered
                                  striped
                                  hover
                              />
                          )}
                            
                        
                    </Fragment>
                </div>
            </div>
          </Fragment>
    )
}
  export default DataTable