
import { DropDownButton } from "../button";
import { ItemList } from "../itemList";

export const PakigingList = ({ item, setItemArr }) => {
  console.log(item, "=====>>> item")
  return (
      <div className="PakigingList">
          <ItemList item={item} setItemArr={setItemArr} />
      <DropDownButton />
      </div>
  )
}
