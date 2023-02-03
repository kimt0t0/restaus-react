import DishItem from './DishItem'

function DishesList ({ dishes }) {
  console.log('plats: ', dishes)
  return (
    <>
      <div className='dishes-list-ctn'>
        {
                    dishes.data.map(dish => {
                      return (
                        <DishItem key={dish.id} dish={dish} />
                      )
                    })
                }
      </div>
    </>
  )
}

export default DishesList
