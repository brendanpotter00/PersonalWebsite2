import React from 'react'
import Title from '../Components/Title'
import InterestsSection from '../Components/InterestsSection'
import interests from '../Components/allinterests';
//portfolios allportfolios
import Categories from '../Components/CategoriesI';
import MenuItems from '../Components/MenuItemsI';
import { useState } from 'react';

const allCategories = ['All', ...new Set(interests.map(item => item.category))];

function InterestsPage() {
    
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(interests);
    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(interests)
            return;
        }
        const filteredData  = interests.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="InterestsPage">
            <div className="title">
            <Title title={'Projects'} span={'Projects'} />
            </div>

            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default InterestsPage
