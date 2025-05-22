import React from 'react';

function ListItem({item,index}) {
    return (
        <>
<tr className="bg-base-200">
    <th>{index}</th>
    <th>{item.name}</th>
    <td>
        {item.amount}
    </td>
</tr>

        </>
    );
}

export default ListItem;