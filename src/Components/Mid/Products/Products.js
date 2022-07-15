
 
 import styles from './Products.module.scss'
 
 const Products = (props) => {
      return (
            <div className={styles.wrapper}>
            {props.products.map(item =>(
                  <div className={styles.products} key={item.id}>
                  <h1 className={styles.title}>{item.title}</h1>
                  <p className={styles.info}>{item.info}</p>
                  <div>
                  <p className={styles.price}>${item.price}</p>
                  </div>
                  
            </div>
            ))}
            
          
            
            </div>
      )
 }

// {props.users.map(users => (
//       <div className={styles.output} key={users.id}>
//         <li>{users.Name}</li>
//         <li>{users.Age}</li>
//         </div>  


//     ))}
//        </div>

 export default Products;