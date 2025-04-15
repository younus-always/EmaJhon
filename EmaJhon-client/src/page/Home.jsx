import React, { useEffect } from 'react'

export const Home = () => {

      useEffect(() => {
            fetch('http://localhost:4000/products')
                  .then(res => res.json())
                  .then(data => console.log(data))
      }, [])


      return (
            <div>


            </div>
      )
}
