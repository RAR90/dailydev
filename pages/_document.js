import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>

        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="assets/images/thumbnail-32x32.png" sizes="32x32" />
          <link rel="icon" href="assets/images/thumbnail-192x192.png" sizes="192x192" />
          <link rel="apple-touch-icon" href="assets/images/thumbnail-180x180.png" />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700%2C800%7CPoppins%3A100%2C200%2C300%2C400%2C500%2C600%2C700%2C800%2C900%7CRoboto%3A100%2C300%2C400%2C500%2C700%2C900' />
          <link rel="stylesheet" href="assets/css/plugins.css" />
          <link rel="stylesheet" href="assets/css/default.css" />
          <link rel="stylesheet" href="assets/css/color.css" />
          <link rel="stylesheet" href="assets/css/style.css" />
        </Head>

        <body>

          <div id="preloader">
            <div className="spinner">
              <div className="uil-ripple-css">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="bg-white d-none d-lg-block">
            <div className="top-header">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <p className="float-left mr-3"><i className="fal fa-calendar-alt mr-2"></i>Sunday, 13 December, 2020</p>
                    <div className="float-left mr-3">|</div>
                    {/* <ul id="menu-top-header" className="menu">
                      <li className="menu-item"><a href="blog.html">News</a></li>
                      <li className="menu-item"><a href="contact.html">Contact</a></li>
                      <li className="menu-item"><a href="archive.html">Technology</a></li>
                      <li className="menu-item"><a href="archive.html">Business</a></li>
                      <li className="menu-item"><a href="archive.html">Covid 19</a></li>
                    </ul> */}
                  </div>
                  <div className="col">
                    <div className="header-social">
                      <a className="facebook-f" href="index.html#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="twitter" href="index.html#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="instagram" href="index.html#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a className="linkedin-in" href="index.html#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 my-auto d-none d-lg-block text-center">
                  <div className="logo">
                    <a href="index.html" className="custom-logo-link" rel="home" aria-current="page"><img src="assets/images/logo.png" className="custom-logo" alt="NewsLab" /></a>
                  </div>
                </div>
              </div>
            </div>
            <header className="site-header">
              <div className="navbar-menu ">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-11  my-auto">
                      <div className="primary-menu d-none d-lg-inline-block">
                        <nav className="desktop-menu">
                          <ul id="menu-primary-menu" className="mb-0 pl-0">
                            <li className="menu-item current_page_parent"><a href="/">Home</a></li>
                            <li className="menu-item"><a href="#">Kotlin</a></li>
                            <li className="menu-item"><a href="#">Next.js</a></li>
                            <li className="menu-item"><a href="#">Daily Dev</a></li>
                            <li className="menu-item"><a href="#">Contact-me!</a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="col-lg-1">
                      <div className="header-search text-right">
                        <a href="index.html#">
                        <i className="fas fa-search"></i>
                        </a>
                        <div className="search-form">
                          <form className="search-form" action="index.html#">
                            <label>
                            <span className="screen-reader-text">Search for:</span>
                            <input type="search" className="search-field" placeholder="Search &hellip;" name="s" />
                            </label>
                            <input type="submit" className="search-submit" />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>

          <div className="bg-white">
            <div className="off-canvas-menu-bar">
              <div className="container">
                <div className="row">
                  <div className="col-6 my-auto">
                    <a href="index.html" className="custom-logo-link" rel="home" aria-current="page"><img src="assets/images/logo.png" className="custom-logo" alt="NewsLab" /></a>
                  </div>
                  <div className="col-6">
                    <div className="mobile-nav-toggler"><span className="far fa-fw fa-bars"></span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="off-canvas-menu">
              <div className="menu-backdrop"></div>
              <i className="close-btn fa fa-close"></i>
              <nav className="mobile-nav">
                <div className="text-center pt-3 pb-3">
                  <a href="index.html" className="custom-logo-link" rel="home" aria-current="page"><img width="512" height="173" src="assets/images/logo.png" className="custom-logo" alt="NewsLab" /></a>
                </div>
                <ul className="navigation">
                </ul>
              </nav>
            </div>
          </div>

          <Main />
          <NextScript />

          <a id="backtotop"><i className="fal fa-lg fa-arrow-up"></i></a>
          <script src="assets/js/plugins.js"></script>
          <script src="assets/js/main.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument