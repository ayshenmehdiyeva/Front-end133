import React, { useState } from 'react'
import './style.css'

import Cahr from '../../assets/car1.webp';
import Rolly from '../../assets/car3.webp';
import Nissan from '../../assets/car2.webp';
import Shadow from '../../assets/shadow.png';
import Gas from '../../assets/gas-station.png';
import Carrol from '../../assets/Car.png';
import Profileuser from '../../assets/profile-2user.png';
import { Link } from 'react-router-dom';


const Home = () => {
    const data = [{
        ld: "1",
        name: "Koenigsegg",
        type: "sport",
        img: "https://morent-website.vercel.app/_next/image?url=%2Fimages%2Fpopular-cars%2Fcar1.png&w=256&q=75",
        gasoline: "80",
        capacity: "2 people",
        price: "$99.00"
    },
    {
        ld: "2",
        name: "Nissan GT-R",
        type: "sport",
        img: "https://morent-website.vercel.app/_next/image?url=%2Fimages%2Fpopular-cars%2Fcar2.png&w=256&q=75",
        gasoline: "90",
        capacity: "2 people",
        price: "$99.00"

    },
    {
        ld: "3",
        name: "Rolls - Royce",
        type: "sedan",
        img: "https://morent-website.vercel.app/_next/image?url=%2Fimages%2Fpopular-cars%2Fcar3.png&w=256&q=75",
        gasoline: "70",
        capacity: "4 people",
        price: "$96.00"
    },
    {
        ld: "4",
        name: "All New Rush",
        type: "SUV",
        img: "https://morent-website.vercel.app/_next/image?url=%2Fimages%2Frecomendation-cars%2Fcar-1.png&w=256&q=75",
        gasoline: "70",
        capacity: "6 people",
        price: "$72.00"
    },
    {   
        ld: "5",
        name: "CR - V",
        type: "SUV",
        img: "https://morent-website.vercel.app/_next/image?url=%2Fimages%2Frecomendation-cars%2Fcar-2.png&w=256&q=75",
        gasoline: "80",
        capacity: "6 people",
        price: "$80.00"
    },
    {   
        ld: "6",
        name: "All New Terios",
        type: "SUV",
        img: "https://morent-website.vercel.app/_next/image?url=%2Fimages%2Frecomendation-cars%2Fcar-3.png&w=256&q=75",
        gasoline: "90",
        capacity: "6 people",
        price: "$74.00"
    },
    {   
        ld: "7",
        name: "MG ZX Exclusice",
        type: "Hatchback",
        img: "https://morent-website.vercel.app/_next/image?url=%2Fimages%2Frecomendation-cars%2Fcar-4.png&w=256&q=75",
        gasoline: "70",
        capacity: "4 people",
        price: "$76.00"
    },
    {
        ld: "8",
        name: "New MG ZS",
        type: "SUV",
        img: "https://morent-website.vercel.app/_next/image?url=%2Fimages%2Frecomendation-cars%2Fcar-5.png&w=256&q=75",
        gasoline: "80",
        capacity: "6 people",
        price: "$80.00"
    }];
    

 return (
            <>
            <section>
                <div className='boxes'>
                    <div className=' box-1'>
                        <div className='text'>
                            <h3>The Best Platform for Car Rental</h3>
                            <p>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                            <div><Link className='btn rentbnt' to="/detail/2">Rental Car</Link></div>
                        </div>
                    </div>
                    <div className='box-2'>
                        <div className='text'>
                            <h3>Easy way to rent a car at a low price</h3>
                            <p>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                            <div><Link className='btn rentbnt' to="/detail/1">Rental Car</Link></div>
                        </div>

                    </div>
                </div>
            </section>
            <div className='popular-car'>
                <div>Popular car</div>
                <div className='view-all'><Link to="/category">View all</Link></div>
            </div>
            <section>
                <div className="row">
                    <div className='popular'>
                    <div className='boxcar'>
                        <div className='head'>
                            <div>
                               <Link to="./detail/1"><h4>Koenigsegg</h4></Link> 
                                <p>sport</p>
                            </div>
                            <div><svg className='stroke stroke-secondary-300 ' wldth='24' height='24' viewBox='0 0 24 24'
                                fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z'
                                    stroke-wldth='1.5' stroke-linecap='round' stroke-linejoin='round'></path>
                            </svg></div>
                        </div>
                        <div className='img'>
                            <img src={Cahr} alt="" />
                        </div>
                        <div className='features'>
                            <div><img src={Gas} alt="" />80L</div>
                            <div><img src={Carrol} />Manual</div>
                            <div><img src={Profileuser} />2 people</div>
                        </div>
                        <div className='price-box'>
                            <div className='price'>$99.00/ day</div>
                            <div ><Link className='btn rentbnt' to="/payment/1">Rent Car</Link></div>
                        </div>
                    </div>
                    <div className='boxcar'>
                        <div className='head'>
                            <div>
                                <Link to="./detail/2"><h4>Nissan GT-R</h4></Link>
                                <p>sport</p>
                            </div>
                            <div><svg className='stroke stroke-secondary-300 ' wldth='24' height='24' viewBox='0 0 24 24'
                                fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z'
                                    stroke-wldth='1.5' stroke-linecap='round' stroke-linejoin='round'></path>
                            </svg></div>
                        </div>
                        <div className='img'>
                            <img src={Nissan} alt="" />
                        </div>
                        <div className='features'>
                            <div><img src={Gas} alt="" />80L</div>
                            <div><img src={Carrol} />Manual</div>
                            <div><img src={Profileuser} />2 people</div>
                        </div>
                        <div className='price-box'>
                            <div className='price'>$80.00/ day</div>
                            <div><Link className='btn rentbnt' to="/payment/2">Rent Car</Link></div>
                        </div>
                    </div>
                    <div className='boxcar'>
                        <div className='head'>
                            <div>
                               <Link to="./detail/3"> <h4>Roll-Royce</h4></Link>
                                <p>sedan</p>
                            </div>
                            <div><svg className='stroke stroke-secondary-300 ' wldth='24' height='24' viewBox='0 0 24 24'
                                fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z'
                                    stroke-wldth='1.5' stroke-linecap='round' stroke-linejoin='round'></path>
                            </svg></div>
                        </div>
                        <div className='img'>
                            <img src={Rolly} alt="" />
                        </div>
                        <div className='features'>
                            <div><img src={Gas} alt="" />70L</div>
                            <div><img src={Carrol} />Manual</div>
                            <div><img src={Profileuser} />4 people</div>
                        </div>
                        <div className='price-box'>
                            <div className='price'>$96.00/ day</div>
                            <div><Link className='btn rentbnt' to="/payment/3">Rent Car</Link></div>
                        </div>
                    </div>
                    <div className='boxcar'>
                        <div className='head'>
                            <div >
                                <Link to="./detail/2"><h4>Nissan GT-R</h4></Link>
                                <p>sport</p>
                            </div>
                            <div><svg className='stroke stroke-secondary-300 ' wldth='24' height='24' viewBox='0 0 24 24'
                                fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z'
                                    stroke-wldth='1.5' stroke-linecap='round' stroke-linejoin='round'></path>
                            </svg></div>
                        </div>
                        <div className='img'>
                            <img src={Nissan} alt="" />
                        </div>
                        <div className='features'>
                            <div><img src={Gas} alt="" />80L</div>
                            <div><img src={Carrol} />Manual</div>
                            <div><img src={Profileuser} />2 people</div>
                        </div>
                        <div className='price-box'>
                            <div className='price'>$80.00/ day</div>
                            <div><Link className='btn rentbnt' to="/payment/2">Rent Car</Link></div>
                        </div>
                    </div>
                </div></div>
                
            </section>
            <div className='popular-car'>
                <div>Recomennded car</div>
                <div className='view-all'><Link to="/category">View all</Link></div>
            </div>
            <div className='section'>
                {data.map((car, index) => {
                    return <div className="boxcar" key={index}>
                        <div className="head">
                            <div>
                            <Link to={`/detail/${car.ld}`}><h4>{car.name}</h4></Link>
                                <p>{car.type}</p>
                            </div>
                            <div></div>
                        </div>
                        <div>
                            <img src={car.img} alt="" />
                            <img src={Shadow} alt="" />
                        </div>
                        <div className="features">
                            <div><img src={Gas} alt="" />{car.gasoline}</div>
                            <div><img src={Carrol} />Manual</div>
                            <div><img src={Profileuser} />{car.capacity}</div>
                        </div>
                        <div className="price-box">
                            <div className="price">{car.price}/ day</div>
                            <div><Link className="btn rentbnt" to={`/payment/${car.ld}`}>Rent Car</Link></div>
                        </div>
                    </div>
                })}
            </div>
           </>
    )
}
export default Home;