export const DropDownButton = () => {

const ClearItem = (itemList) =>{
itemList([])


}

    return (
      <div className="sortDrop">
        <select>
          <option>SORT BY INPUT ORDER</option>
          <option>SORT BY DESCRIPTION</option>
          <option>SORT BY PAKED STATUS</option>
        </select>
        <button className="listBtn" onClick={ClearItem}>  CLEAR LIST</button>

      </div>
    );
  };
  