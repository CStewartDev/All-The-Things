const formCategory = (cat) => {
    const option = document.createElement('option');
    option.value = `${cat}`;
    option.text = `${cat}`;
    return option;
}

export {formCategory}








{/* 
    <select id='category-form'> 
        <option value=""  selected>---Categories---</option>
        <option value="Bananas">Bananas</option>
        <option value="Asparagus">Asparagus</option>
    </select> */}