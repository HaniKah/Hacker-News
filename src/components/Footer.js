import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <img
          alt=""
          className="imageFooter"
          src="https://news.ycombinator.com/s.gif"
        />
        <div className="footerContent">
          <div className="application">
            <a href="https://www.ycombinator.com/apply/">
              Application are open for YC Summer 2023
            </a>
          </div>
          <div className="footerLinks">
            <a href="https://news.ycombinator.com/newsguidelines.html">
              Guidelines
            </a>
            |<a href="https://news.ycombinator.com/newsfaq.html">FAQ</a>|
            <a href="https://news.ycombinator.com/lists">Lists</a>|
            <a href="https://github.com/HackerNews/API">API</a>|
            <a href="https://news.ycombinator.com/security.html">Security</a>|
            <a href="https://www.ycombinator.com/legal/">Legal</a>|
            <a href="https://www.ycombinator.com/apply/">Apply to YC</a>|
            <a href="mailto:hn@ycombinator.com">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}
