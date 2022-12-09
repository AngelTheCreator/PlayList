import { useState } from "react"
import Form from 'react-bootstrap/Form';

export default function SearchCatalogue(){
    
    return(
        <div>
            <div style={{width: "100%", marginTop: "2px"}}>
              <Form style={{width: "100%"}}>
                  <Form.Control
                    style={{height: "60px", backgroundImage: "linear-gradient(220deg, red 2%, black 98%)", color: 'rgb(219, 217, 217)', border: '0px'}}
                    type="search"
                    placeholder="Search for games here"
                    aria-label="Search"
                  />
              </Form>
            </div>
            <h2>Search Catalogue goes here</h2>
            <a href={'/catalogue'}>
                <button>
                        Return
                </button>
            </a>
        </div>
    )
}