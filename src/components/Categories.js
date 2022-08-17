import '../styles/Categories.css'

function Categories({categories, selectedCat, setSelectedCat}) {
    return (
        <div className="lmj-categories">
            <select value={selectedCat}
                onChange={(e)=>setSelectedCat(e.target.value)}
                className='lmj-categories-select'
			>
                <option value="All" key="All">All</option>
                {categories.map((cat)=>(
                <option key={cat} value={cat}>{cat}</option>))}
            </select>
            <button onClick={()=>setSelectedCat('All')}>Reset</button>
        </div>
    )
}

export default Categories
