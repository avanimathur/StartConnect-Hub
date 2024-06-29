import React from 'react';
import styled from 'styled-components';
import 'path/to/font-awesome/css/font-awesome.min.css';

const startups = () => {
  return (
    <Wrapper className='wrapper'>
      <i id='left' className='fa-solid fas fa-angle-left'></i>
      <ul className='carousel'>
        <li className='card'>
          <div className='img'>
            <img src='' alt='' draggable='false' />
          </div>
          <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
            <a href='#'>Heartfelt Ventures</a>
          </h2>
          <span>Building Dreams, Bridging Realities</span>
        </li>
        <li className='card'>
          <div className='img'>
            <img src='' alt='' draggable='false' />
          </div>
          <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
            <a href='#'>Understanding United</a>
          </h2>
          <span>Together, We Thrive: Understanding United</span>
        </li>
        <li className='card'>
          <div className='img'>
            <img src='' alt='' draggable='false' />
          </div>
          <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
            <a href='#'>SheSpark Innovations</a>
          </h2>
          <span>Empowering Unity, Empowering Tomorrow</span>
        </li>
        <li className='card'>
          <div className='img'>
            <img src='' alt='' draggable='false' />
          </div>
          <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
            <a href='#'>Hope Phoenix</a>
          </h2>
          <span>Embracing Tomorrow's Promise</span>
        </li>
        <li className='card'>
          <div className='img'>
            <img src='' alt='' draggable='false' />
          </div>
          <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
            <a href='#'>Just Brew</a>
          </h2>
          <span>Turning Ideas into Impact</span>
        </li>
        <li className='card'>
          <div className='img'>
            <img src='' alt='' draggable='false' />
          </div>
          <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
            <a href='#'>EmpowerHer Co.</a>
          </h2>
          <span>Bringing Flavor to Every Bite</span>
        </li>
      </ul>
      <i id='right' className='fa-solid fas fa-angle-right'></i>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .wrapper {
    max-width: 1100px;
    width: 100%;
    position: relative;
  }

  .wrapper i {
    height: 50px;
    width: 50px;
    background: rgb(206, 152, 206);
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 50%;
    font-size: 1.25rem;
    transform: translateY(-50%);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .wrapper i:first-child {
    left: -22px;
  }

  .wrapper i:last-child {
    right: -22px;
  }

  .wrapper .carousel {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: calc((100% / 3) - 12px);
    gap: 16px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }

  .carousel::-webkit-scrollbar {
    display: none;
  }

  .carousel :where(.card, .img) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel.dragging {
    scroll-snap-type: none;
    scroll-behavior: auto;
  }

  .carousel.no-transition {
    scroll-behavior: auto;
  }

  .carousel.dragging .card {
    cursor: grab;
    user-select: none;
  }

  .carousel .card {
    scroll-snap-align: start;
    height: 340px;
    list-style: none;
    background: #fff;
    border-radius: 8px;
    display: flex;
    cursor: pointer;
    width: 98%;
    padding-bottom: 15px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .card {
    scroll-snap-align: start;
    height: 340px;
    list-style: none;
    background: #fff;
    border-radius: 8px;
    display: flex;
    cursor: pointer;
    width: 98%;
    padding-bottom: 15px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: transform 0.3s ease;
  }

  .card:hover,
  .card:focus {
    transform: translateY(-20px);
  }

  .card .img {
    background: rgb(206, 152, 206);
    width: 145px;
    height: 145px;
    border-radius: 50%;
  }

  .card .img img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #fff;
  }

  .card h2 {
    font-weight: 500;
    font-size: 1.56rem;
    margin: 30px 0 5px;
    text-decoration: underline;
  }

  .card h2:hover {
    transform: scale(1.1);
  }

  .card span {
    color: #6a6d78;
    font-size: 1rem;
    text-align: center;
    margin: auto;
  }

  @media screen and (max-width: 900px) {
    .wrapper .carousel {
      grid-auto-columns: calc((100% / 2) - 9px);
    }
  }

  @media screen and (max-width: 600px) {
    .wrapper .carousel {
      grid-auto-columns: 100%;
    }
  }
`;

export default startups;