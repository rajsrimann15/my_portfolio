import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://drive.google.com/file/d/1ITQzZCnOI7FStCaChrR5Q3MR4_qMvZbN/view?usp=drive_link',
      name: 'Microsoft Azure AZ-900',
      role: 'Cyber Security Engineer . Improving open-source projects, one commit at a time.',
      test: 'Through the Azure Fundamentals AZ-900 certification, I gained a comprehensive understanding of core cloud concepts, including scalability, reliability, and cost efficiency. I explored Azure architecture and key services, enhancing my knowledge of virtual networks, storage, and compute. Additionally, I developed expertise in Azure management and governance, emphasizing security and compliance practices.',
    },
    {
      id: 2,
      link: 'https://drive.google.com/file/d/1AVK3iyZujmD5fHWvrH28B7NtB9oMuZkD/view?usp=drive_link',
      name: 'DSA in Java',
      role: 'Full-stack developer | Technical Support Engineer at Microverse',
      test: "By studying Data Structures and Algorithms (DSA) in Java, I developed a solid understanding of fundamental concepts, including arrays, linked lists, trees, graphs, and hashmaps. I honed my problem-solving skills through algorithmic techniques such as sorting, searching, and dynamic programming, leveraging Java's robust features to write efficient and scalable code.",
    },
    
  ];
  return (
    <section id="testmonials">
      
      <h2>Certification</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <h2>{test.name}</h2>
          <h5 className='client__name'>
              <a href={test.link} target="_blank" rel="noopener noreferrer">VIEW</a>
          </h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials