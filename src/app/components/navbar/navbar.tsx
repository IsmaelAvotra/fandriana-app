import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='navbar px-8 py-6 bg-slate-400'>
      <div className='navbar-content flex items-center justify-between max-w-[1500px] mx-auto'>
        <div className='navbar-logo'>
          <Image
            src='/logo.png'
            alt='original logo'
            width={72}
            height={72}
          ></Image>
        </div>
        <div className='navbar-links'>
          <nav>
            <ul className='flex gap-12'>
              <li>
                <a href='#'>idee cadeaux</a>
              </li>
              <li>
                <a href='#'>Vos weekends</a>
              </li>
              <li>
                <a href='#'>Place aux professionnels</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='nav-icons flex gap-8'>
          <div className='nav-icon flex items-center flex-col'>
            <img src='./profil.svg' alt='profile icon' />
            <p>Connexion</p>
          </div>
          <div className='nav-icon flex items-center flex-col'>
            <img src='./heart.svg' alt='favorite icon' />
            <p>Favoris</p>
          </div>
          <div className='nav-icon flex items-center flex-col'>
            <img src='./shopping.svg' alt='shoping cart icon' />
            <p>Panier</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
