
import{useSelector} from 'react-redux'
function Copyright() {
 

  const currentYear = new Date().getFullYear();
  const theme = useSelector(state => state.theme);  // Доступ к текущей теме

  return (
    <p className={'copyright ${theme}'}>&#169; Learning project. All rights reserved. {theme}</p>
  )
}

export default Copyright;