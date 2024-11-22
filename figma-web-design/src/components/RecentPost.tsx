import Link from "next/link";

export default function RecentPosts() {
    return (
      <section className="recent-posts">
        <div className="section-header">
          <h3>Recent Post</h3>
          <Link href="#" className="view-all">View all</Link>
        </div>
        <div className="posts">
          <div className="post-card">
            <h4>Making a design system from scratch</h4>
            <p>12 Feb 2020 &nbsp;&nbsp;|&nbsp;&nbsp; Design, Pattern</p> <br/>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
          <div className="post-card">
            <h4>Making a design system from scratch</h4>
            <p>12 Feb 2020 &nbsp;&nbsp;|&nbsp;&nbsp; Design, Pattern</p> <br />
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
      </section>
    );
  }
  