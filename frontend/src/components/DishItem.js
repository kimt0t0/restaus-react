function DishItem ({ dish }) {
  const { attributes } = dish
  console.log(attributes)
  return (
    <div className='card'>
      <div className='card-header'>
        <img className='card-img' src={`${process.env.REACT_APP_IMG_URL}${attributes.photo.data.attributes.url}`} alt='' />
        <div className='overlay'>
          <h2 className='card-title'>{attributes.name}</h2>
        </div>
      </div>
      <div className='card-content'>
        <p>{attributes.description}</p>
      </div>
    </div>
  )
}

export default DishItem
