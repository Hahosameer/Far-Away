export const ItemList = ({ item, setItemArr }) => {



  return (
      <div className="itemList">
          {
              item?.map((singleItem, indx) => (
                  <Item
                      itemList={item}
                      setItemArr={setItemArr}
                      haroon={singleItem}
                      number={indx}
                  />
              ))
          }
      </div>
  )
}
const Item = ({ haroon, number, setItemArr, itemList }) => {

  const packedHandler = (packingValue, itemNumber) => {   //false
      
      const merayItems = [...itemList]  
      merayItems[number].packed = !packingValue  //true
      setItemArr(merayItems)
      
  }
  return (
      <div className="list">
          <input type="checkbox" checked={haroon.packed} onChange={() => packedHandler(haroon.packed, number)} />
          <p style={{
              color: "#dbc69b",
              textDecoration: haroon.packed ? "line-through" : "none"
          }}>
              {
                  `${haroon.quantity} ${haroon.name}`
              }
          </p>
          <p style={{color: "red"}}>X</p>
      </div>
  )
}