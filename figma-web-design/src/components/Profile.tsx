import Image from "next/image";
export default function Profile() {
    return (
          <section className="hero">
            <div className="text-section">
              <h2>Hi, I am John, <br /> Creative Technologist</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br />
                 sint.Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.
              </p>
              <button>Download Resume</button>
            </div>
            <div className="profile-image">
              <img src="/hero-image.png" alt="Profile Picture" />
            </div>
          </section>
        );
      }