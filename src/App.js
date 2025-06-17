import React, { useState, useEffect } from 'react';

const Resume = () => {
  const [lang, setLang] = useState('en');
  const [isMobile, setIsMobile] = useState(false);

  const isEn = lang === 'en';

  const toggleLang = () => setLang(isEn ? 'mn' : 'en');

  // Detect mobile screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionStyle = { marginBottom: '2rem' };
  const containerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    height: isMobile ? 'auto' : '100vh',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#324B48',
    position: 'relative',
  };
  const toggleButtonStyle = {
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    zIndex: 999,
    backgroundColor: '#f6dd52',
    color: '#3d5752',
    border: 'none',
    borderRadius: '6px',
    padding: '0.5rem 1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  };
  const leftPanelStyle = {
    flex: isMobile ? 'none' : '0 0 320px',
    width: isMobile ? '100%' : undefined,
    backgroundColor: '#3d5752',
    color: '#fff',
    padding: isMobile ? '1.5rem 1rem 2rem' : '2rem 2rem 4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    clipPath: isMobile
      ? 'none'
      : 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
  };
  const profileImageStyle = {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    border: '4px solid #f6dd52',
    marginBottom: '2rem',
    objectFit: 'cover',
  };
  const nameStyle = {
    fontSize: '2.2rem',
    fontWeight: '700',
    letterSpacing: '0.15em',
    marginBottom: '0.3rem',
    lineHeight: '1.1',
    textAlign: 'center',
  };
  const titleStyle = {
    fontSize: '1.1rem',
    color: '#f6dd52',
    marginBottom: '3rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.07em',
  };
  const contactTitleStyle = {
    fontWeight: '700',
    fontSize: '1rem',
    marginBottom: '0.8rem',
    borderBottom: '1px solid #fff',
    width: '100%',
  };
  const contactItemStyle = {
    marginBottom: '0.4rem',
    fontSize: '0.9rem',
  };
  const rightPanelStyle = {
    flex: 1,
    backgroundColor: '#e6efef',
    padding: isMobile ? '2rem 1.5rem' : '3rem 4rem',
    overflowY: 'auto',
  };
  const sectionTitleStyle = {
    fontWeight: '700',
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#324B48',
    borderBottom: '2px solid #324B48',
    paddingBottom: '0.3rem',
  };
  const paragraphStyle = {
    color: '#666',
    lineHeight: 1.5,
    marginBottom: '1rem',
  };
  const subheadingStyle = {
    fontWeight: '700',
    fontSize: '1.2rem',
    marginBottom: '0.3rem',
    color: '#324B48',
  };
  const ulStyle = {
    paddingLeft: '1.2rem',
    marginBottom: '1.5rem',
    color: '#555',
  };
  const liStyle = { marginBottom: '0.4rem' };

  return (
    <>
      <button style={toggleButtonStyle} onClick={toggleLang}>
        {isEn ? 'Монгол' : 'English'}
      </button>

      <div style={containerStyle}>
        <aside style={leftPanelStyle}>
          <img src="/йййй.jpg" alt="Profile" style={profileImageStyle} />

          <div style={nameStyle}>
            Adiyabat<br />Ariunbuyan
          </div>
          <div style={titleStyle}>{isEn ? 'Fullstack Developer' : 'Fullstack Хөгжүүлэгч'}</div>

          <div style={{ ...contactTitleStyle, marginTop: '2rem' }}>
            {isEn ? 'Contact' : 'Холбоо барих'}
          </div>
          <div style={contactItemStyle}>{isEn ? 'Phone' : 'Утас'}: +976-99246123</div>
          <div style={contactItemStyle}>Email: abuynaa1211@gmail.com</div>
        </aside>

        <main style={rightPanelStyle}>
          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle}>{isEn ? 'About Me' : 'Миний Тухай'}</h2>
            <p style={paragraphStyle}>
              {isEn
                ? "I am 22 years old and a graduate of the School of Information and Communication Technology at the Mongolian University of Science and Technology. I completed my bachelor's degree in Software Engineering over a four-year program. For my graduation project, I developed a full-stack web application focused on real estate management, which I successfully defended with a score of 97%. I am passionate about building practical software solutions, and I am particularly interested in full-stack development, system design, and user experience. I am a highly motivated, detail-oriented individual with strong analytical thinking, good communication skills, and a deep desire to continuously learn and grow as a developer."
                : "Би 22 настай, Шинжлэх Ухаан Технологийн Их Сургуулийн Мэдээлэл, Холбооны Технологийн Сургуулийн Програм хангамжийн бакалаврын хөтөлбөрийг дөрвөн жилийн хугацаанд амжилттай дүүргэсэн. Дипломын ажлаараа үл хөдлөх хөрөнгийн менежментийн вэб систем бүтээж, 97 хувийн үнэлгээтэй хамгаалсан. Би практик програм хангамжийн шийдэл бүтээхэд ихээхэн дуртай бөгөөд бүрэн стек хөгжүүлэлт, системийн архитектур, хэрэглэгчийн туршлагын чиглэлд онцгой сонирхолтой. Нарийн детальд анхаардаг, шинийг сурах эрмэлзэлтэй, асуудал шийдвэрлэх чадвартай, идэвх санаачлагатай, бусадтай сайн харилцдаг, хувийн зохион байгуулалт сайн."
              }
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle}>{isEn ? 'Experience' : 'Ажлын туршлага'}</h2>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={subheadingStyle}>
                {isEn ? 'Full Stack Developer (Graduation Project)' : 'Full Stack Developer'}
              </h3>
              <p style={paragraphStyle}>
                <strong>{isEn ? 'Real Estate Management System' : 'Үл хөдлөх хөрөнгийн менежмент систем'}</strong>
              </p>
              <p style={paragraphStyle}>
                {isEn
                  ? 'Developed a full-stack real estate management web application.'
                  : 'Үл хөдлөх хөрөнгийн бүртгэлийн цогц вэб систем бүтээсэн.'}
              </p>
              <ul style={ulStyle}>
                <li style={liStyle}>{isEn ? 'User authentication and CRUD listings' : 'Хэрэглэгчийн нэвтрэлт ба CRUD зарууд'}</li>
                <li style={liStyle}>{isEn ? 'MongoDB for data storage' : 'MongoDB өгөгдөл хадгалах систем'}</li>
                <li style={liStyle}>{isEn ? 'Responsive UI design' : 'Дасан зохицох интерфэйс дизайн'}</li>
              </ul>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={subheadingStyle}>
                {isEn ? 'Freelance Web Developer' : 'Фриланс Вэб Хөгжүүлэгч'}
              </h3>

              <p style={paragraphStyle}>
                <strong>
                  <a
                    href="https://www.miftaah.ae/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#1a0dab', textDecoration: 'underline' }}
                  >
                    Miftaah.ae
                  </a>
                </strong>
              </p>

              <p style={paragraphStyle}>
                {isEn
                  ? 'Worked as a freelance web developer building and maintaining websites for clients.'
                  : 'Үйлчлүүлэгчдэд зориулан вэб сайт бүтээж,  вэб хөгжүүлэгчээр ажилласан.'}
              </p>

              <ul style={ulStyle}>
                <li style={liStyle}>
                  {isEn
                    ? 'Designed and implemented responsive websites tailored to client needs'
                    : 'Үйлчлүүлэгчийн хэрэгцээнд нийцсэн вебсайт бүтээсэн'}
                </li>
                <li style={liStyle}>
                  {isEn
                    ? 'Handled full project lifecycle from requirements to deployment'
                    : 'Шаардлага тодорхойлохоос эхлэн байршуулалт хүртэлх бүтэн хөгжүүлэлтийн циклийг хийсэн'}
                </li>
                <li style={liStyle}>
                  {isEn
                    ? 'Communicated directly with clients to ensure satisfaction'
                    : 'Үйлчлүүлэгчидтэй шууд харилцаж, сэтгэл ханамжийг хангаж ажилласан'}
                </li>
              </ul>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={subheadingStyle}>{isEn ? 'Backend Developer Intern' : 'Мэргэжлийн дадлага'}</h3>
              <p style={paragraphStyle}><strong>MCS MBank</strong></p>
              <p style={paragraphStyle}>
                {isEn
                  ? 'Worked with Spring Boot, testing and Docker.'
                  : 'Spring Boot ашиглан хөгжүүлэлт хийж, тест болон Docker ашиглан ажилласан.'}
              </p>
              <ul style={ulStyle}>
                <li style={liStyle}>{isEn ? 'Spring Boot development' : 'Spring Boot хөгжүүлэлт'}</li>
                <li style={liStyle}>{isEn ? 'Testing with MockTest' : 'MockTest ашиглан тест хийх'}</li>
                <li style={liStyle}>{isEn ? 'Docker deployment' : 'Docker байршуулалт'}</li>
              </ul>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle}>{isEn ? 'Education' : 'Боловсрол'}</h2>
            <p style={paragraphStyle}>
              <strong>{isEn ? 'Bachelor of Software Engineering' : 'Програм хангамжийн бакалавр'}</strong><br />
              {isEn
                ? 'Mongolian University of Science and Technology'
                : 'Шинжлэх Ухаан Технологийн Их Сургууль'}<br />
              2021 – 2025
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle}>{isEn ? 'Skills' : 'Ур чадвар'}</h2>
            <ul style={ulStyle}>
              <li style={liStyle}>JavaScript / React / Node.js / Next.js</li>
              <li style={liStyle}>HTML / CSS / Tailwind</li>
              <li style={liStyle}>MongoDB / MySQL / Prisma</li>
              <li style={liStyle}>Figma</li>
              <li style={liStyle}>Git</li>
              <li style={liStyle}>Spring Boot / API</li>
              <li style={liStyle}>
                {isEn ? 'Debugging & Problem-solving' : 'Алдааг олох ба асуудал шийдвэрлэх'}
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Resume;
