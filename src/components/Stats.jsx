import React from 'react'

const Stats = ({ title, icon, status, percentage }) => {
  return (
    <div className='status-parent'>
      <div className='status-header'>
        <p className='title-stat'>{title}</p>
        <p className='icon-stat'>{icon}</p>
      </div>
      <p className='status-stat' style={{ textAlign: 'center', fontSize: '1.1rem', fontWeight:'bold' }}>{status}</p>
      <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style={{ width: `${percentage}` }}>{percentage}</div>
      </div>
    </div>
  )
}

export default Stats