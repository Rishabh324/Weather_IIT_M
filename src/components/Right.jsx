import React from 'react'
import ChartComponent from './Chartcomponent'
import Stats from './Stats'

const Right = () => {
    return (
        <div className='right'>
            <div className='right-top'>
                <div className='top-greet'>
                    <p className='greet' style={{ fontWeight: 'bold', margin: '0' }}>Welcome back Rishabh!</p>
                    <p className='check' style={{ margin: '0', fontSize: '0.9rem' }}>Check out today's weather information</p>
                </div>
                <div className='top-utils'>
                    <i className="fa-solid fa-ellipsis"></i>
                    <i className="fa-solid fa-user"></i>
                </div>
            </div>
            <div className='chart'>
                <div className='chart-utils'>
                    <p>Upcoming Hours</p>
                    <div>
                        <select className='sort-type' name="rain" id="rain" style={{
                            color: '#CFCFCF',
                            marginRight: '10px'
                        }}>
                            <option value="precipitation">Rain Precipitation</option>
                        </select>
                        <select className='day-type' name="day" id="day" style={{ color: 'black' }}>
                            <option value="next">Next days</option>
                        </select>
                    </div>
                </div>
                <ChartComponent />
            </div>
            <div className='stats'>
                <p className='stat-head' style={{ fontWeight: 'bold' }}>More details of today's weather</p>
                <div className='stats-cont'>
                    <Stats title="Humidity" icon={<i className="fa-solid fa-droplet"></i>} status="82%" percentage="82%" />
                    <Stats title="Wind" icon={<i class="fa-solid fa-wind"></i>} status="8km/h" percentage="20%" />
                    <Stats title="Precipitation" icon={<i class="fa-solid fa-cloud-showers-heavy"></i>} status="1.4cm" percentage="14%" />
                    <Stats title="UV index" icon={<i class="fa-regular fa-sun"></i>} status="4 medium" percentage="25%" />
                    <Stats title="Feels like" icon={<i class="fa-solid fa-temperature-empty"></i>} status="30°" percentage="60%" />
                    <Stats title="Chances of rain" icon={<i class="fa-solid fa-umbrella"></i>} status="42%" percentage="42%" />
                </div>
            </div>
        </div>
    )
}

export default Right