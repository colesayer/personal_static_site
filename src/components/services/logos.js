import React from 'react';

export function logos(idxArray){
  const logos = {react: 'http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1516994905/react_zc470d.svg', redux: 'http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1516994905/redux_yxtpx6.svg', rails: 'http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1516994905/rails-1_k82xah.svg', postgresql: 'http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1516994905/postgresql_tist9h.svg', cloudinary: 'http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1516994905/cloudinary_vertical_logo_for_white_bg_qwgjbs.png', threejs: 'http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1516994905/020b4bf5260882fa7b29b4aba7c3ff2c8e46aad0_jpjhco.png', blender: 'http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1516995294/blender-1_gsiddv.svg', css3: 'http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1516995299/css-3_bmhgny.svg', bootstrap: 'http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1516995381/bootstrap-icon_trpklf.svg', jwt: 'http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517011212/jwt_logo_izhqkk.svg'}
  const icons = idxArray.map((name, idx) => <li key={idx}><img src={logos[name]} style={{height: '2rem'}}/></li>)
  return(
    <div className="logos">
    <ul>
      {icons}
    </ul>
    </div>
  )
}
