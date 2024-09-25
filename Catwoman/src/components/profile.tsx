const Profile = () => {
  return (
    <section className="profile">
      <h2 className="name">Rehk Mansa</h2>
      <p className="title">Freelance Frontend Developer</p>
      <p className="description">
        Hello, I'm <strong>Rehk</strong>, a frontend developer. I love <strong>problem solving</strong> and
        critical thinking. I use coding as a tool to <strong>solve problems</strong>. I am currently interested in <strong>building interactive</strong> UI's for game development.
      </p>
      <div className="social-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:someone@example.com">Email</a>
      </div>
    </section>
  );
};

export default Profile;