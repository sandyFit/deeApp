import React, { Fragment, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { getBooks } from '../../../actions/bookActions';
import { useAlert } from 'react-alert';
import {MDBDataTable} from 'mdbreact'
import MetaData from '../../layouts/Metadata'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './table.css'

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
          label: 'Title',
          field: 'title'        
        },
          
        {
          label: 'Author',
          field: 'author',
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

    books.forEach(book => {
      data.rows.push({
        title: book.title,
        author: book.author,       
        pages: book.pages,       
        status: book.status,
        actions:
          <Fragment>
            <Link to={`/book/${book._id}`} className="btn btn-primary py-1 px-2">
              <VisibilityIcon/>
            </Link>
            <Link to="/" className="btn btn-warning py-1 px-2">
              <EditIcon/>
            </Link>

            <Link to="/" className="btn btn-danger py-1 px-2">
              <DeleteForeverIcon/>
            </Link>                    
        </Fragment>
      })
    })

    return data;
  }

    return (
          <Fragment>
            <MetaData title={'All Books'} />
            <div className='row'>                
                <div className= 'col-12 col-md-12'>
                    <Fragment>                        
                        {loading ? <AutorenewIcon/> :(
                          <MDBDataTable 
                            className='p-3'
                            responsive 
                            hover
                            data={setBooks()} 
                            entriesOptions={[5, 8]}
                            // pagesAmount={4}                       
                            noBottomColumns={true}
                            info={false}
                            searching={false}
                            onSort={value =>  console.log(value)}
                            bordered                            
                            small                          
                          />
                          )}                                                    
                    </Fragment>
                </div>
            </div>
          </Fragment>
    )
}
  export default DataTable