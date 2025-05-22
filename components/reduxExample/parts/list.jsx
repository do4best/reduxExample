import React from 'react';
import ListItem from "./listItem.jsx";

function List({items}) {

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                  <tbody>
                  {items.map((item,index)=><ListItem index={index+1} item={item} key={index}/>)}
                  </tbody>
                </table>
            </div>



                    </>
    );
}

export default List;