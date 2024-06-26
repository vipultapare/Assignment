import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import category, { addCategory } from '../Redux/category';

const useCategory = () => {
   
  const dispatch = useDispatch();
  const categories = useSelector(store => store?.category?.getcategory);





  const getCategories = async() =>{
    const url = 'https://api.escuelajs.co/api/v1/categories';
    try {
      const response = await fetch(url);
      const result = await response.json();
      dispatch(addCategory(result));
      console.log(result);
    } catch (error) {
      console.error(error);
  }
  

 
}
useEffect(() =>{
  if(!categories)
    {
      getCategories();
    }
 
},[]);
}

export default useCategory;
