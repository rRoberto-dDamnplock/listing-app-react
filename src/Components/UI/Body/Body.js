import styles from './Body.module.scss'

import Button from '../Button/Button';

const Body = () => {
      return (
            <div className={styles.body}>
           <div className={styles.content}>     
<h1 className='text-5xl'>Start shopping now</h1>

<p style={{margin: '.5rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non nisi. Dui faucibus in ornare quam viverra orci sagittis. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Urna id volutpat lacus laoreet non. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Ornare arcu dui vivamus arcu felis. Commodo sed egestas egestas fringilla phasellus. Sed nisi lacus sed viverra tellus in. Consectetur adipiscing elit duis tristique sollicitudin. Nibh cras pulvinar mattis nun</p>
<Button className={styles.btn}/>
</div>
<div className={styles.card}>
<h1  style={{borderBottom: '1px solid grey'}}>Purpose?</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

</div>


            </div>
      )
}

export default Body;