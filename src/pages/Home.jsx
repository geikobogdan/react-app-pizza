import React from "react";
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock,  } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import  {addPizzaToCart}  from "../redux/actions/cart";

const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const sortItems = [
  { name: "популярности", type: "popular", order : 'desc' },
  { name: "цене", type: "price", order : 'desc' },
  { name: "алфавит", type: "name", order : 'asc'  },
]


function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const cartItems = useSelector(({ cart }) => cart.items);
  const {category, sortBy} = useSelector(({ filters }) => filters);
 
 

  React.useEffect(()=>{
    
    dispatch(fetchPizzas(sortBy,category));
   }, [category, sortBy]);
 


  
  const onSelectCategory =React.useCallback ((index) => {
    dispatch(setCategory(index));
  },[])

  const onSelectSortType =React.useCallback ((type) => {
    dispatch(setSortBy(type));
  },[])
  const handleAddPizzaToCart =React.useCallback ((obj) => {
    dispatch(addPizzaToCart(obj));
    //console.log(obj);
  },[])

 


  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategory={onSelectCategory}
          items={categoryNames}
          activeCategory={category}
        />

        <SortPopup
         activeSortType={sortBy.type} items={sortItems}
         OnClickSortType = {onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ? items.map((obj) => 
        <PizzaBlock key={obj.id} 
        addedCount={cartItems[obj.id]&& cartItems[obj.id].length }
       
        {...obj} 
        onClickAddPizza={handleAddPizzaToCart} />) :  Array(4).fill(0).map((_, index)=><PizzaLoadingBlock key = {index}/>)
        }
      </div>
    </div>
  );
}

export default Home;


