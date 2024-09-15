function AboutMe() {
  return (
    <>
      <div className="m-2 position-relative" id="am">
        <main>
          <div className="position-relative">
            <div className="bg-img">
              <img src="https://i.ibb.co/P10cPdG/am-bg.jpg" alt="" />
            </div>
            <h1 className="position-absolute am-top-heading glow-red">
              Welcome to my profile!
            </h1>
            <div className="am-my-pic-1">
              <img
                className="position-absolute"
                src="https://i.ibb.co/CJ2891M/am-my-pic-1.png"
                alt=""
              />
            </div>
            <div className="am-pics position-absolute p-1">
              <div className="am-my-pic-2 position-absolute border rounded">
                <img
                  className="position-absolute"
                  src="https://i.ibb.co/1qhZkKp/am-my-pic-2.png"
                  alt=""
                />
              </div>
              <div className="am-my-pic-3 position-absolute border rounded">
                <img
                  className="position-absolute"
                  src="https://i.ibb.co/xX3wcxd/am-my-pic-3.png"
                  alt=""
                />
              </div>
            </div>
            <div className="am-text-bottom position-absolute p-2 border-top rounded">
              <h1 className="text-center glow-red">Read About Me :</h1>
              <p className="ps-2 pe-1">
                Hello there! <span className="glow-red">I'm Sharafat</span>, a
                dedicated student of
                <span className="glow-red">Computer Science</span> at
                <span className="glow-red">
                  Islamia University of Bahawalpur
                </span>
                , currently in my <span className="glow-red">6th semester</span>
                . With a passion for{" "}
                <span className="glow-red">web development</span>, I've been
                immersing myself in the world of coding and design, eager to
                expand my skills and knowledge in this dynamic field. This
                website you're exploring right now is my very first project, a
                testament to my journey of growth and exploration in the realm
                of web development.
              </p>
              <p className="ps-2 pe-1">
                Driven by a curiosity to learn and a commitment to excellence, I
                approach each project with enthusiasm and determination. Through
                hands-on experience and
                <span className="glow-red">continuous learning</span>, I strive
                to create impactful digital solutions that not only meet but
                exceed expectations. My journey as a
                <span className="glow-red">web developer</span> is guided by a
                desire to innovate, collaborate, and make a meaningful
                contribution to the ever-evolving digital landscape.
              </p>
              <p className="ps-2 pe-1">
                Beyond the lines of code, I'm an avid learner, a
                <span className="glow-red">creative thinker</span>, and a team
                player. I believe in the power of collaboration and the endless
                possibilities that arise when diverse perspectives come
                together. Whether it's tackling complex challenges or exploring
                new
                <span className="glow-red">technologies</span>, I'm always eager
                to push the boundaries of what's possible. Let's connect and
                embark on this journey together, shaping the future of
                technology one project at a time.
              </p>
              <ul>
                <li>Passionate student of Computer Science</li>
                <li>Eager to expand skills in web development</li>
                <li>First project is this website</li>
                <li>Driven by curiosity and commitment to excellence</li>
                <li>Believes in the power of collaboration and innovation</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default AboutMe