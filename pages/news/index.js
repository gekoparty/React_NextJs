import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The NewsPage</h1>
      <ul>
          <li>
              <Link href="/news/this-is-great"> Next JS is great </Link></li>
          <li>This is detailed page</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
