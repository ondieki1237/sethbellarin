import React from 'react';

const WhatIDo = () => {
  const iconStyle = {
    width: '40px',
    height: '40px',
    marginBottom: '8px'
  };

  const labelStyle = {
    color: '#593c2a',
    fontSize: '14px',
    margin: '0',
    fontFamily: 'sans-serif',
    fontWeight: '500',
    textAlign: 'center'
  };

  const cardStyle = {
    background: '#e5e5e5',
    padding: '40px',
    borderRadius: '20px',
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    color: '#593c2a',
    fontFamily: 'sans-serif',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap', // allows stacking on small screens
    boxShadow: '8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,1)'
  };

  const textSectionStyle = {
    flex: '1 1 100%',
    paddingRight: '20px',
    marginBottom: '30px'
  };

  const titleStyle = {
    fontSize: '2.2rem',
    fontWeight: '700',
    color: '#593c2a',
    marginBottom: '16px',
    textShadow: '1px 1px 0 rgba(255,255,255,0.6)'
  };

  const descStyle = {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '24px',
    color: '#593c2a'
  };

  const skillsTitleStyle = {
    fontSize: '1.6rem',
    fontWeight: '600',
    color: '#593c2a',
    marginBottom: '20px'
  };

  const skillsContainerStyle = {
    flex: '1 1 100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '16px',
    justifyItems: 'center'
  };

  const skillItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#e5e5e5',
    padding: '16px',
    borderRadius: '12px',
    boxShadow: '4px 4px 8px rgba(0,0,0,0.1), -4px -4px 8px rgba(255,255,255,1)',
    transition: 'all 0.3s ease'
  };

  const buttonStyle = {
    padding: '0.7rem 1.6rem',
    borderRadius: '0.8rem',
    fontWeight: '500',
    background: 'linear-gradient(180deg, #faba00 0%, #f6a800 100%)',
    color: '#593c2a',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '0.9rem'
  };

  return (
    <div style={{ 
      background: '#e5e5e5', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={cardStyle}>
        {/* Text Section */}
        <div style={textSectionStyle}>
          <h2 style={titleStyle}>What I Do</h2>
          <p style={descStyle}>
            I'm Seth Makori Bellarin, a creative graphic designer and full-stack web developer based in Kenya. 
            I specialize in branding, UX/UI design, and building fast, accessible digital experiences for clients around the globe.
          </p>
          <h3 style={skillsTitleStyle}>Skills</h3>
          <a
            href="https://github.com/ondieki1237"
            style={buttonStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        {/* Skills Grid */}
        <div style={skillsContainerStyle}>
          <div style={skillItemStyle}>
            <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" style={iconStyle} />
            <p style={labelStyle}>React</p>
          </div>
          <div style={skillItemStyle}>
            <img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Designing" style={iconStyle} />
            <p style={labelStyle}>Designing</p>
          </div>
          <div style={skillItemStyle}>
            <img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node" style={iconStyle} />
            <p style={labelStyle}>Node</p>
          </div>
          <div style={skillItemStyle}>
            <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" style={iconStyle} />
            <p style={labelStyle}>Python</p>
          </div>
          <div style={skillItemStyle}>
            <img src="https://cdn.simpleicons.org/camera/000000" alt="Photography" style={iconStyle} />
            <p style={labelStyle}>Photography</p>
          </div>
          <div style={skillItemStyle}>
            <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" style={iconStyle} />
            <p style={labelStyle}>JavaScript</p>
          </div>
          <div style={skillItemStyle}>
            <img src="https://cdn.simpleicons.org/linux/FCC624" alt="Linux" style={iconStyle} />
            <p style={labelStyle}>Linux</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
