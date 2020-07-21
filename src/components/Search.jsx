import React , { useState }from 'react';
import { Form, Input} from 'reactstrap';

const Search = ({searchHandler}) => {
    const[searchValue, setSearchValue]= useState("");

    const searchValueUpdateHandler = (e) => {
        setSearchValue(e.target.value)
        
    };
    const formSubmitHandler = (e)=>{
        e.preventDefault();
        if(searchValue.replace(/\s/,"").length > 0 ){
            searchHandler(searchValue);
            setSearchValue("");
        }
    };
        return(
            <Form className="search-form" >
                <Input 
                    placeholder="Search..."
                    type="text"     
                    value = {searchValue}
                    onChange = {searchValueUpdateHandler} 
                />
                    
                <Input type="submit" value="search" onClick={formSubmitHandler}/>
            </Form>
        )     
}
export default Search;