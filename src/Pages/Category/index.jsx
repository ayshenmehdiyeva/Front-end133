import React, { useState } from 'react'
import './style.css'
import Shadow from '../../assets/shadow.png';
import Gas from '../../assets/gas-station.png';
import Carrol from '../../assets/Car.png';
import Profileuser from '../../assets/profile-2user.png';
import { Link } from 'react-router-dom';

const Category = () => {
    const  data = [{
        id: "1",
        name: "Koenigsegg",
        type: "sport",
        steering: "Manual",
        img: "https://morent-website.vercel.app/_next/image?url=%2Fimages%2Fpopular-cars%2Fcar1.png&w=256&q=75",
        gasoline: "80",
        capacity: "2 people",
        price: "$99.00"
    },
    {
        id: "2",
        name: "Nissan GT-R",
        type: "sport",
        steering: "Manual",
        img: "https://morent-website.vercel.app/_next/image?url=%2Fimages%2Fpopular-cars%2Fcar2.png&w=256&q=75",
        gasoline: "90",
        capacity: "2 people",
        price: "$99.00"

    },
    {
        id: "3",
        name: "Rolls - Royce",
        type: "sedan",
        steering: "Manual",
        img: "https://morent-website.vercel.app/_next/image?url=%2Fimages%2Fpopular-cars%2Fcar3.png&w=256&q=75",
        gasoline: "70",
        capacity: "4 people",
        price: "$96.00"
    },
    {
        id: "4",
        name: "All New Rush",
        type: "SUV",
        steering: "Manual",
        img: "https://morent-website.vercel.app/_next/image?url=%2Fimages%2Frecomendation-cars%2Fcar-1.png&w=256&q=75",
        gasoline: "70",
        capacity: "6 people",
        price: "$72.00"
    },
    {   
        id: "5",
        name: "CR - V",
        type: "SUV",
        steering: "Manual",
        img: "https://morent-website.vercel.app/_next/image?url=%2Fimages%2Frecomendation-cars%2Fcar-2.png&w=256&q=75",
        gasoline: "80",
        capacity: "6 people",
        price: "$80.00"
    },
    {   
        id: "6",
        name: "All New Terios",
        type: "SUV",
        steering: "Manual",
        img: "https://morent-website.vercel.app/_next/image?url=%2Fimages%2Frecomendation-cars%2Fcar-3.png&w=256&q=75",
        gasoline: "90",
        capacity: "6 people",
        price: "$74.00"
    },
    {   
        id: "7",
        name: "MG ZX Exclusice",
        type: "Hatchback",
        steering: "Manual",
        img: "https://morent-website.vercel.app/_next/image?url=%2Fimages%2Frecomendation-cars%2Fcar-4.png&w=256&q=75",
        gasoline: "70",
        capacity: "4 people",
        price: "$76.00"
    },
    {
        id: "8",
        name: "New MG ZS",
        type: "SUV",
        steering: "Manual",
        img: "https://morent-website.vercel.app/_next/image?url=%2Fimages%2Frecomendation-cars%2Fcar-5.png&w=256&q=75",
        gasoline: "80",
        capacity: "6 people",
        price: "$80.00"
    }
]



    const [item, setItem] = useState(data)


    function Sport() {
        const updateFilter = data.filter((select) => {
            return select.type === "sport"
        });
        setItem(updateFilter)

    }
    function SUV(info) {
        const updateFilter = data.filter((select) => {
            return select.type === info
        });
        setItem(updateFilter)
    }
    function Sedan(info) {
        const updateFilter = data.filter((select) => {
            return select.type === info
        });
        setItem(updateFilter)
    }
    function Hack(info) {
        const updateFilter = data.filter((select) => {
            return select.type === info
        });
        setItem(updateFilter)
    }


    return (
        <div className='category d-flex flex-row m-auto h-100'>
            <div className='select'>
                <div>
                    <div className='type'>
                        <span>TYPE</span>
                        <p><input className='checkbox' type='checkbox'
                            onClick={() => Sport()} /> Sport (3)</p>
                        <p><input className='checkbox' type='checkbox' name='' id='suv' onClick={() => SUV("SUV")} /> SUV (6)</p>
                        <p><input className='checkbox' type='checkbox' name='' id='sedan' onClick={() => Sedan("Sedan")} /> Sedan (1)</p>
                        <p><input className='checkbox' type='checkbox' name='' id='hatch' onClick={() => Hack("Hatchback")} /> Hatchback (2)
                        </p>
                    </div>
                    <div className='capacity'>
                        <span>CAPACITY</span>
                        <p><input type='checkbox' name='' id='two' value='2' />2 Person (3)</p>
                        <p><input type='checkbox' name='' id='four' value='4' /> 4 Person (3)</p>
                        <p><input type='checkbox' name='' id='six' value='6' /> 6 Person (6)</p>
                    </div>
                    <div className='max-price'>
                        <span>PRICE</span>
                        <input type='range' name='' id='' />
                        <p>Max. $100.00</p>
                    </div>
                </div>
            </div>
            <div className='cars' id='section'>
                {item.map((car, index) => {
                    return <div className="container" key={index}>
                        <div className="boxcar">
                            <div className="head">
                                <div>
                                    <Link to={`/detail/${car.ld}`}><h4>{car.name}</h4> </Link>
                                    <p>{car.type}</p>
                                </div>
                                <div><svg class="stroke stroke-secondary-300 " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                            </div>
                            <div>
                                <img src={car.img} alt="" />
                                <img src={Shadow} alt="" />
                            </div>
                            <div className="features">
                                <div><img src={Gas} alt="" />{car.gasoline}</div>
                                <div><img src={Carrol} />{car.steering}</div>
                                <div><img src={Profileuser} />{car.capacity}</div>
                            </div>
                            <div className="price-box">
                                <div className="price">{car.price}/ day</div>
                                <div><Link className="btn rentbnt" to={`/payment/${car.id}`}>Rent Car</Link></div>
                            </div>
                        </div>
                    </div>

                })}
            </div>
        </div>
    )
}

export default Category
