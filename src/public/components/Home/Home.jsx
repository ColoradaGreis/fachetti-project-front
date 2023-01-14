import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getImportantPubs } from '../../../redux/publications/publicationsActions'
import image1 from '@/assets/images/landing1.jpg'
import image2 from '@/assets/images/landing2.jpg'
import image3 from '@/assets/images/landing3.jpg'
import './home.scss'
import { BsCircle } from 'react-icons/bs'

export default function Home () {
  const dispatch = useDispatch()
  /* const ImportantPublications = useSelector(state => state.ImportantPublications) */

  useEffect(() => {
    dispatch(getImportantPubs())
  }, [])
  return (
    <div className='container__slider'>
      {/* {Array.isArray(ImportantPublications) && ImportantPublications.map(p => ( */}
      <div className='container'>
        <input type='radio' name='slider' id='item-1' />
        <input type='radio' name='slider' id='item-2' />
        <input type='radio' name='slider' id='item-3' />

        <div className='cards'>
          <label className='card' htmlFor='item-1' id='selector-1'>
            <img className='imgLanding' src={image1} alt='image1' />
          </label>
          <label className='card' htmlFor='item-2' id='selector-2'>
            <img className='imgLanding' src={image2} alt='image2' />
          </label>
          <label className='card' htmlFor='item-3' id='selector-3'>
            <img className='imgLanding' src={image3} alt='image3' />
          </label>
        </div>
        <div className='buttonImages'>
          <label className='bsCircle' htmlFor='item-1' id='selector-1'>
            <BsCircle className='bsCircle' />
          </label>
          <label className='bsCircle' htmlFor='item-2' id='selector-2'>
            <BsCircle className='bsCircle' />
          </label>
          <label className='bsCircle' htmlFor='item-3' id='selector-3'>
            <BsCircle className='bsCircle' />
          </label>
        </div>
      </div>
      {/* ))} */}
    </div>
  )
}
