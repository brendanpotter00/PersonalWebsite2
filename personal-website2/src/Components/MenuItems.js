import React from 'react'

function MenuItems({menuItem}) {
    return (
        <div className="portfolis">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div className="card">
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1}>{item.icon1}</a>
                                </li>
                            </ul>
                        </div>
                        <h7>
                            {item.title}
                        </h7>
                        <p className="cap"> {item.caption} </p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;
